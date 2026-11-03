"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export interface HalftonePatternHeroProps {
  /** Base height of the canvas container. */
  height?: string;
  /** Distance between dot centers in CSS px. Defaults to 7. */
  dotGap?: number;
  /** Radius of pointer push in CSS px. Defaults to 90. */
  radius?: number;
  /** Fine print grain overlay opacity (0 to 1). Defaults to 0.2. */
  grain?: number;
  /** Whether mouse hover and click physics are active. Defaults to true. */
  interactive?: boolean;
  /** Custom colors override. */
  palette?: {
    ink?: string;
    warm?: string;
  };
  /** Additional CSS class names for container. */
  className?: string;
}

/** Parses hex (#rgb or #rrggbb) to [r, g, b] array. */
function parseHex(hex: string): [number, number, number] | null {
  const clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0]! + clean[0]!, 16);
    const g = parseInt(clean[1]! + clean[1]!, 16);
    const b = parseInt(clean[2]! + clean[2]!, 16);
    return isNaN(r) || isNaN(g) || isNaN(b) ? null : [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return isNaN(r) || isNaN(g) || isNaN(b) ? null : [r, g, b];
  }
  return null;
}

// ── Mountain Ridge Geometry (Normalized X in [0, 1], Y in [0, 1]) ──
// Back Ridge: Distant alpine peaks (starts well below top so there is ZERO cutting)
const BACK_RIDGE: [number, number][] = [
  [0.0, 0.60],
  [0.08, 0.52],
  [0.18, 0.32], // Left Alpine Peak
  [0.26, 0.44],
  [0.35, 0.36],
  [0.44, 0.26],
  [0.50, 0.18], // Central Summit Peak
  [0.56, 0.28],
  [0.66, 0.42],
  [0.76, 0.24], // Right Alpine Peak
  [0.85, 0.38],
  [0.92, 0.48],
  [1.0, 0.58],
];

// Front Ridge: Closer prominent foothills / peaks
const FRONT_RIDGE: [number, number][] = [
  [0.0, 0.76],
  [0.14, 0.62],
  [0.26, 0.46], // Left Front Peak
  [0.36, 0.58],
  [0.48, 0.40], // Center Front Peak
  [0.58, 0.52],
  [0.70, 0.44], // Right Front Peak
  [0.84, 0.60],
  [1.0, 0.72],
];

/** Interpolates Y elevation along a piecewise linear mountain ridge. */
function getRidgeElevation(xRatio: number, ridge: [number, number][]): number {
  if (xRatio <= ridge[0]![0]) return ridge[0]![1];
  for (let i = 0; i < ridge.length - 1; i++) {
    const p1 = ridge[i]!;
    const p2 = ridge[i + 1]!;
    if (xRatio >= p1[0] && xRatio <= p2[0]) {
      const t = (xRatio - p1[0]) / (p2[0] - p1[0]);
      return p1[1] + t * (p2[1] - p1[1]);
    }
  }
  return ridge[ridge.length - 1]![1];
}

/**
 * Calculates crisp, elegant Mountain Range Halftone coverage at (x, y).
 * Zero dots in the sky above the peaks.
 * Delicate dots on distant peaks, full solid dots on foreground mountain slopes.
 */
function calculateMountainCoverage(x: number, y: number, w: number, h: number): number {
  const xRatio = Math.max(0, Math.min(1, x / w));
  const yRatio = y / h;

  // Subtle craggy micro-texture along the ridge lines
  const microBack = Math.sin(x * 0.04) * 0.012 + Math.cos(x * 0.09) * 0.008;
  const microFront = Math.sin(x * 0.035 + 1.2) * 0.014;

  const backY = getRidgeElevation(xRatio, BACK_RIDGE) + microBack;
  const frontY = getRidgeElevation(xRatio, FRONT_RIDGE) + microFront;

  // Above all mountains (Sky): Completely clear, NO dots, NO cutting
  if (yRatio < backY) {
    return 0;
  }

  // Inside foreground mountain
  if (yRatio >= frontY) {
    const depth = (yRatio - frontY) / (1 - frontY);
    // 0.60 at the ridge crest, grading to 1.0 at the grounded bottom
    return Math.min(1, 0.60 + Math.pow(depth, 0.9) * 0.40);
  }

  // Inside distant background mountain
  const depth = (yRatio - backY) / (frontY - backY);
  // 0.28 at the distant peak, grading to 0.55 before disappearing behind front mountain
  return Math.min(1, 0.28 + depth * 0.32);
}

/** Computes punchy dot radius from coverage and cell spacing. */
function dotRadius(coverage: number, gap: number): number {
  const minR = gap * 0.12;
  const maxR = gap * 0.46; // Bold, punchy dots up to ~3.2px radius (6.4px diameter)
  return minR + (maxR - minR) * Math.pow(Math.min(1, Math.max(0, coverage)), 0.65);
}

/** Physics integration step for displaced dot with Hooke's spring return. */
function stepDot(
  x: number,
  y: number,
  vx: number,
  vy: number,
  hx: number,
  hy: number,
  px: number,
  py: number,
  radius: number
): [number, number, number, number] {
  const dx = x - px;
  const dy = y - py;
  const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;

  if (dist < radius) {
    const force = Math.pow(1 - dist / radius, 1.8) * 18;
    vx += (dx / dist) * force;
    vy += (dy / dist) * force;
  }

  // Hooke's spring return with smooth damping
  const springX = (hx - x) * 0.085;
  const springY = (hy - y) * 0.085;
  vx = (vx + springX) * 0.81;
  vy = (vy + springY) * 0.81;

  return [x + vx, y + vy, vx, vy];
}

/** Calculates warmth factor [0, 1] based on displacement from home. */
function warmthFactor(x: number, y: number, hx: number, hy: number, maxD: number): number {
  const dx = x - hx;
  const dy = y - hy;
  return Math.min(1, Math.sqrt(dx * dx + dy * dy) / maxD);
}

export function HalftonePatternHero({
  height = "460px",
  dotGap = 7,
  radius = 90,
  grain = 0.2,
  interactive = true,
  palette,
  className = "",
}: HalftonePatternHeroProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  // Light mode: Deep forest pine (#112B1B) with Electric Parrot (#C7E96B) hover
  // Dark mode: Soft sage (#C4D6C8) with Electric Parrot (#C7E96B) hover
  const activeInkHex = palette?.ink || (isDark ? "#C4D6C8" : "#112B1B");
  const activeWarmHex = palette?.warm || "#C7E96B";

  React.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let px = -1e5;
    let py = -1e5;
    let raf = 0;
    let ring = { x: 0, y: 0, t: -1 };

    // Flat arrays: [x, y, vx, vy, hx, hy, r] per dot
    let dots = new Float32Array(0);
    let count = 0;
    let grainTile: HTMLCanvasElement | null = null;

    const ink = parseHex(activeInkHex) || [17, 43, 27];
    const warm = parseHex(activeWarmHex) || [199, 233, 107];

    const layout = () => {
      const rect = container.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      const gap = Math.max(4, dotGap);
      const cols = Math.ceil(w / gap);
      const rows = Math.ceil(h / gap);
      const tmp: number[] = [];

      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const hx = gx * gap + gap / 2;
          const hy = gy * gap + gap / 2;
          const cov = calculateMountainCoverage(hx, hy, w, h);
          if (cov < 0.08) continue;

          const r = dotRadius(cov, gap);
          tmp.push(hx, hy, 0, 0, hx, hy, r);
        }
      }

      dots = new Float32Array(tmp);
      count = tmp.length / 7;

      // Subtle fine grain texture
      if (grain > 0) {
        grainTile = document.createElement("canvas");
        grainTile.width = 128;
        grainTile.height = 128;
        const gCtx = grainTile.getContext("2d");
        if (gCtx) {
          const imgData = gCtx.createImageData(128, 128);
          for (let i = 0; i < imgData.data.length; i += 4) {
            const val = Math.random() * 255;
            imgData.data[i] = val;
            imgData.data[i + 1] = val;
            imgData.data[i + 2] = val;
            imgData.data[i + 3] = Math.random() < 0.5 ? 0 : 255;
          }
          gCtx.putImageData(imgData, 0, 0);
        }
      }
    };

    const draw = (now: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const r = interactive && !prefersReducedMotion ? Math.max(0, radius) : 0;
      const ringAge = ring.t < 0 ? 1e9 : now - ring.t;
      const ringR = ringAge * 0.95;

      const [inkR, inkG, inkB] = ink;
      const [warmR, warmG, warmB] = warm;

      for (let i = 0; i < count; i++) {
        const j = i * 7;
        let x = dots[j]!;
        let y = dots[j + 1]!;
        let vx = dots[j + 2]!;
        let vy = dots[j + 3]!;
        const hx = dots[j + 4]!;
        const hy = dots[j + 5]!;
        const dotR = dots[j + 6]!;

        if (!prefersReducedMotion) {
          // Click shockwave ring
          if (ringAge < 950) {
            const dx = hx - ring.x;
            const dy = hy - ring.y;
            const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
            const band = 1 - Math.min(1, Math.abs(d - ringR) / 30);
            if (band > 0) {
              const f = band * 3.8 * (1 - ringAge / 950);
              vx += (dx / d) * f;
              vy += (dy / d) * f;
            }
          }

          // Pointer repulsive push
          const [nextX, nextY, nextVx, nextVy] = stepDot(x, y, vx, vy, hx, hy, px, py, r);
          x = nextX;
          y = nextY;
          vx = nextVx;
          vy = nextVy;

          // Resting threshold
          if (Math.abs(vx) + Math.abs(vy) <= 0.02 && Math.abs(x - hx) + Math.abs(y - hy) <= 0.05) {
            x = hx;
            y = hy;
            vx = 0;
            vy = 0;
          }

          dots[j] = x;
          dots[j + 1] = y;
          dots[j + 2] = vx;
          dots[j + 3] = vy;
        }

        // Color warmth factor (Electric Parrot lime transition)
        const warmth = warmthFactor(x, y, hx, hy, 28);
        if (warmth > 0.02) {
          const curR = Math.round(inkR + (warmR - inkR) * warmth);
          const curG = Math.round(inkG + (warmG - inkG) * warmth);
          const curB = Math.round(inkB + (warmB - inkB) * warmth);
          ctx.fillStyle = `rgb(${curR}, ${curG}, ${curB})`;
        } else {
          ctx.fillStyle = activeInkHex;
        }

        ctx.beginPath();
        ctx.arc(x, y, dotR, 0, Math.PI * 2);
        ctx.fill();
      }

      // Subtle fine print grain overlay
      if (grainTile && grain > 0) {
        ctx.globalAlpha = Math.min(1, grain) * 0.05;
        ctx.globalCompositeOperation = "overlay";
        const pattern = ctx.createPattern(grainTile, "repeat");
        if (pattern) {
          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, w, h);
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
      }

      raf = requestAnimationFrame(draw);
    };

    layout();
    raf = requestAnimationFrame(draw);

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      px = e.clientX - rect.left;
      py = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      px = -1e5;
      py = -1e5;
    };

    const onPointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      ring = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        t: performance.now(),
      };
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
    container.addEventListener("pointerdown", onPointerDown);

    const resizeObserver = new ResizeObserver(() => {
      layout();
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeEventListener("pointerdown", onPointerDown);
      resizeObserver.disconnect();
    };
  }, [dotGap, radius, grain, interactive, activeInkHex, activeWarmHex]);

  return (
    <div
      ref={containerRef}
      style={{ height: height || undefined }}
      aria-hidden="true"
      className={`relative w-full select-none cursor-crosshair overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export default HalftonePatternHero;
