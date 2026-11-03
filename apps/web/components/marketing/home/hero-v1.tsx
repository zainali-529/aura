"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, PauseIcon } from "@hugeicons/core-free-icons";

/* ─── All individual chat messages ──────────────────────────────── */
const ALL_MESSAGES = [
	{ name: "Sophia",   initial: "S", message: "Can Aura scale 24/7 omnichannel support for our peak holiday season?" },
	{ name: "Aura BPO", initial: "A", message: "Absolutely! We can onboard 40+ multilingual dedicated agents within 48 hours." },
	{ name: "David",    initial: "D", message: "We need Tier-2 technical support and fraud monitoring with 99.9% SLA compliance." },
	{ name: "Aura BPO", initial: "A", message: "Our certified tech support specialists are active 24/7 with a 45-second average response time." },
	{ name: "Elena",    initial: "E", message: "What was our CSAT and first-contact resolution rate this past week?" },
	{ name: "Aura BPO", initial: "A", message: "Last week CSAT hit 98.4% with an 89% first-contact resolution across all channels." },
	{ name: "Marcus",   initial: "M", message: "Can you manage back-office data processing alongside inbound voice calls?" },
	{ name: "Aura BPO", initial: "A", message: "Yes, our cross-functional teams handle back-office workflows and voice seamlessly." },
];

/* ─── Constants ──────────────────────────────────────────────────── */
const CARD_INTERVAL_MS = 3200;   // how often a new card appears
const SLIDE_MS         = 500;    // animation duration
const CARD_SPACING_PX  = 148;    // vertical distance between card bottoms

type Phase = "entering" | "visible" | "exiting";

type CardEntry = {
	id: number;
	name: string;
	initial: string;
	message: string;
	slot: 0 | 1;
	phase: Phase;
};

let _uid = 0;
const nextId = () => ++_uid;

/* ─── Single chat bubble — Zendesk AI Agent Card Style ───────────── */
function ChatBubble({ card }: { card: CardEntry }) {
	const entering = card.phase === "entering";
	const exiting  = card.phase === "exiting";
	const isAi     = card.name === "Aura BPO";

	return (
		<div
			className="absolute right-0 w-80 rounded-xl bg-white p-4 sm:p-4.5 shadow-2xl border border-black/5 text-left"
			style={{
				bottom: card.slot * CARD_SPACING_PX,
				transform: entering
					? "translateY(52px)"
					: exiting
					? "translateY(-36px)"
					: "translateY(0px)",
				opacity: entering || exiting ? 0 : 1,
				transition: [
					`bottom ${SLIDE_MS}ms cubic-bezier(0.22,1,0.36,1)`,
					`transform ${SLIDE_MS}ms cubic-bezier(0.22,1,0.36,1)`,
					`opacity ${SLIDE_MS}ms ease`,
				].join(", "),
				zIndex: exiting ? 0 : card.slot + 1,
			}}
		>
			<div className="mb-2 flex items-center gap-2.5">
				<span
					className={`inline-flex size-7 items-center justify-center rounded-md text-xs font-bold ${
						isAi ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
					}`}
				>
					{card.initial}
				</span>
				<div className="flex items-center gap-2">
					<span className="text-sm font-semibold text-foreground">{card.name}</span>
					{isAi && (
						<span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
							Pod Lead
						</span>
					)}
				</div>
			</div>
			<p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
				{card.message}
			</p>
		</div>
	);
}

/* ─── Hero Section ───────────────────────────────────────────────── */
export function HeroSection() {
	const router = useRouter();
	const [email, setEmail]     = useState("");
	const [playing, setPlaying] = useState(true);
	const [cards, setCards]     = useState<CardEntry[]>([]);
	const msgIndexRef           = useRef(0);
	const intervalRef           = useRef<ReturnType<typeof setInterval> | null>(null);
	const cleanupTimers         = useRef<ReturnType<typeof setTimeout>[]>([]);

	const handleSignupSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			router.push(`/contact?email=${encodeURIComponent(email)}`);
		} else {
			router.push("/contact");
		}
	};

	const addCard = () => {
		const idx = msgIndexRef.current % ALL_MESSAGES.length;
		msgIndexRef.current++;
		const msg   = ALL_MESSAGES[idx]!;
		const newId = nextId();

		setCards((prev) => {
			const visible = prev.filter((c) => c.phase !== "exiting");
			let next      = [...prev];

			if (visible.length >= 2) {
				next = next.map((c) =>
					c.phase !== "exiting" && c.slot === 1
						? { ...c, phase: "exiting" as Phase }
						: c
				);
			}

			next = next.map((c) =>
				c.phase !== "exiting" && c.slot === 0
					? { ...c, slot: 1 as const }
					: c
			);

			next.push({
				id:      newId,
				name:    msg.name,
				initial: msg.initial,
				message: msg.message,
				slot:    0,
				phase:   "entering",
			});

			return next;
		});

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				setCards((prev) =>
					prev.map((c) =>
						c.id === newId ? { ...c, phase: "visible" as Phase } : c
					)
				);
			});
		});

		const t = setTimeout(() => {
			setCards((prev) => prev.filter((c) => c.phase !== "exiting"));
		}, SLIDE_MS + 80);
		cleanupTimers.current.push(t);
	};

	useEffect(() => {
		if (!playing) {
			if (intervalRef.current) clearInterval(intervalRef.current);
			return;
		}

		addCard();
		intervalRef.current = setInterval(addCard, CARD_INTERVAL_MS);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
			cleanupTimers.current.forEach(clearTimeout);
			cleanupTimers.current = [];
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playing]);

	return (
		<section className="w-full px-4 pt-0 pb-6 sm:px-6 sm:pt-0 sm:pb-8 lg:px-8 flex justify-center">
			{/* ── Floating Framed Canvas with Expansive Max-Width & Sweeping Rounded Corners ── */}
			<div className="relative min-h-[calc(100vh-6rem)] w-full max-w-[2060px] mx-auto overflow-hidden rounded-[2.75rem] shadow-2xl">
				{/* ── Background Image: Custom hero-1.png ── */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="/hero-6.png"
					alt="Aura BPO modern operations leadership"
					className="absolute inset-0 h-full w-full object-cover object-[center_right] lg:object-[82%_center]"
				/>

				{/* ── Legibility Overlays: Left dark gradient for crystal clear text readability ── */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-transparent sm:w-4/5 lg:w-3/5" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

				{/* ── Left Content: Clean, Impactful, Zendesk-Level Typography ── */}
				<div className="relative flex h-full min-h-[calc(100vh-6rem)] flex-col justify-center px-8 py-16 sm:px-14 lg:px-20 xl:px-24 max-w-4xl">
					{/* Category Kicker */}
					<p className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/90 font-mono">
						Enterprise BPO &amp; Strategic Customer Operations
					</p>

					{/* Semi-Bold Commanding Headline */}
					<h1 className="mb-4 text-4xl sm:text-6xl lg:text-[4.15rem] xl:text-[4.4rem] font-semibold leading-[1.08] tracking-tight text-white font-heading">
						Scale your operations. Deliver world-class support.
					</h1>

					{/* Shortened, Punchy 1-Line Subtext */}
					<p className="mb-6 text-base sm:text-lg lg:text-xl leading-relaxed text-white/85 font-normal max-w-xl">
						Dedicated 24/7 customer care teams, certified technical support, and high-volume back-office execution engineered for operational excellence.
					</p>

					{/* Micro Trust Proof Line */}
					<div className="mb-7 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/90">
						<span className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
						<span>24/7 Global Delivery • 99.8% SLA Guarantee • SOC-2 &amp; ISO Certified</span>
					</div>

					{/* Boxy Form: Input + Golden Accent CTA Button */}
					<form
						onSubmit={handleSignupSubmit}
						className="flex w-full max-w-md flex-col gap-3 sm:flex-row lg:max-w-lg lg:gap-3.5"
					>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter work email"
							className="h-12 flex-1 rounded-lg bg-white px-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary lg:h-14 lg:px-6 lg:text-base border border-border/40 shadow-xs"
						/>
						<button
							type="submit"
							className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 text-sm sm:text-base font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px lg:h-14 cursor-pointer"
						>
							Get a Proposal
						</button>
					</form>
				</div>

				{/* ── Stacking chat cards (Bottom Right) ── */}
				<div className="pointer-events-none absolute inset-0 hidden lg:block">
					<div
						className="absolute bottom-16 right-16"
						style={{ width: "20rem", height: `${CARD_SPACING_PX * 2 + 40}px` }}
					>
						{cards.map((card) => (
							<ChatBubble key={card.id} card={card} />
						))}
					</div>
				</div>

				{/* Play / pause control (Boxy rounded-lg) */}
				<button
					type="button"
					onClick={() => setPlaying((p) => !p)}
					aria-label={playing ? "Pause card rotation" : "Resume card rotation"}
					className="absolute bottom-6 right-6 inline-flex size-9 items-center justify-center rounded-lg bg-black/40 text-white/90 backdrop-blur-md transition-colors hover:bg-black/60 cursor-pointer"
				>
					{playing ? (
						<HugeiconsIcon icon={PauseIcon} strokeWidth={2} className="size-4" />
					) : (
						<HugeiconsIcon icon={PlayIcon} strokeWidth={2} className="size-4" />
					)}
				</button>
			</div>
		</section>
	);
}

export default HeroSection;
