import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

const ROWS = 28;
const COLS = 28;
const SPACING = 14;
const WIDTH = COLS * SPACING; // 392
const HEIGHT = ROWS * SPACING; // 392

// Precompute dots array once at module level for zero runtime overhead
const HALFTONE_DOTS = (() => {
	const dots: { cx: number; cy: number; r: number; opacity: number }[] = [];
	const maxDist = WIDTH * 0.95;

	for (let r = 0; r < ROWS; r++) {
		for (let c = 0; c < COLS; c++) {
			const cx = c * SPACING + SPACING / 2;
			const cy = r * SPACING + SPACING / 2;
			// Distance from top-right corner (WIDTH, 0)
			const dx = WIDTH - cx;
			const dy = cy;
			const dist = Math.sqrt(dx * dx + dy * dy);
			const factor = Math.max(0, 1 - dist / maxDist);

			if (factor > 0.03) {
				const radius = Math.pow(factor, 1.4) * 5.4;
				if (radius > 0.4) {
					const opacity = Math.min(1, Math.pow(factor, 0.75) * 0.9);
					dots.push({
						cx,
						cy,
						r: Number(radius.toFixed(2)),
						opacity: Number(opacity.toFixed(2)),
					});
				}
			}
		}
	}
	return dots;
})();

export interface HalftoneCornerProps {
	className?: string;
	position?: "top-right" | "bottom-left" | "top-left" | "bottom-right";
}

export function HalftoneCorner({
	className,
	position = "top-right",
}: HalftoneCornerProps) {
	const rotationStyle = {
		"top-right": "",
		"bottom-left": "rotate-180",
		"top-left": "-scale-x-100",
		"bottom-right": "scale-y-[-1]",
	}[position];

	return (
		<svg
			viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
			fill="currentColor"
			aria-hidden="true"
			className={cn(
				"pointer-events-none select-none",
				rotationStyle,
				className
			)}
		>
			{HALFTONE_DOTS.map((dot, index) => (
				<circle
					key={index}
					cx={dot.cx}
					cy={dot.cy}
					r={dot.r}
					opacity={dot.opacity}
				/>
			))}
		</svg>
	);
}
