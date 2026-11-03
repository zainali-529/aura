"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

// ── Step Timeline Data (Minimalist & High-Impact, matching Dribbble reference) ──
interface StepItem {
	step: string;
	title: string;
	description: string;
}

const HOW_IT_WORKS_STEPS: StepItem[] = [
	{
		step: "Step 1",
		title: "Discovery & Workflow Alignment",
		description:
			"We audit historical ticket streams, SLA benchmarks, and QA scorecards, establishing seamless native integration into your CRM, ticketing, and telephony tools.",
	},
	{
		step: "Step 2",
		title: "Agent Training & SOP Immersion",
		description:
			"Our dedicated trainers and operations coaches immerse your team in your brand voice, escalation protocols, product knowledge base, and custom macros.",
	},
	{
		step: "Step 3",
		title: "Simulation & Quality Benchmark Sandbox",
		description:
			"Your dedicated specialists undergo rigorous mock customer interactions, escalation drills, and supervisor shadowing, achieving a mandatory 99% QA benchmark before taking live queues.",
	},
	{
		step: "Step 4",
		title: "24/7 Live Deployment & Continuous Governance",
		description:
			"Complete operational handover under strict contractual SLAs. You receive transparent weekly performance scorecards, continuous QA audits, and rapid pod scaling on demand.",
	},
];

// ── Main How It Works Section ──────────────────────────────────────
export function HowItWorksSection() {
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const [targetInset, setTargetInset] = React.useState<number>(24);

	// Dynamically calculate the inset so the card matches the exact max-width of other sections (1480px on desktop)
	React.useEffect(() => {
		const handleResize = () => {
			const vw = window.innerWidth;
			if (vw >= 1480) {
				setTargetInset((vw - 1480) / 2);
			} else if (vw >= 1024) {
				setTargetInset(32);
			} else if (vw >= 640) {
				setTargetInset(24);
			} else {
				setTargetInset(16);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Glitch-Free Scroll Animation:
	// - Initially at "start 70%": Container matches the exact width of other sections (max-w-[1480px])
	// - As user scrolls from 70% to 25%: Margins smoothly reduce to 0px, and radius to 0px
	// - Stays 100% full width, edge-to-edge while reading through the section (no flicker, no jumping)
	// - Reverses smoothly when scrolling back up
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 70%", "start 25%"],
	});

	const marginX = useTransform(scrollYProgress, [0, 1], [targetInset, 0]);
	const borderRadius = useTransform(scrollYProgress, [0, 1], [32, 0]);

	return (
		<section
			id="how-it-works"
			ref={sectionRef}
			className="w-full bg-background py-8 sm:py-12 overflow-x-clip scroll-mt-20"
		>
			{/* ── Expanding Solid Dark Container (Initially matches exact 1480px section width) ── */}
			<motion.div
				style={{
					marginLeft: marginX,
					marginRight: marginX,
					borderRadius,
					backgroundColor: "var(--color-forest)",
				}}
				className="text-white relative overflow-hidden shadow-2xl"
			>
				<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-stretch">
						{/* ── Left Column: Headline, Pill, Action Button & Precision-Framed 3D Torus Arch ── */}
						<div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between self-stretch relative">
							<div>
								{/* Pill (Dribbble style) */}
								<div className="inline-flex items-center gap-2 rounded-full bg-forest-surface border border-forest-surface/80 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-2xs mb-5 select-none">
									<span className="size-2 rounded-full bg-primary" />
									<span className="font-mono uppercase tracking-wider">
										How It Works
									</span>
								</div>

								{/* Large, Clean Headline */}
								<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight leading-[1.12] mb-4">
									From Discovery to Full Operational Handover.
								</h2>

								{/* Narrative Subtext in Forest Sage */}
								<p className="text-base sm:text-lg text-forest-muted leading-relaxed max-w-lg mb-7">
									In as fast as 14 days, Aura recruits, trains, and integrates dedicated certified teams into your operations with zero workflow disruption.
								</p>

								{/* Solid Primary Button */}
								<div>
									<Link
										href="/contact"
										className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px"
									>
										<span>Schedule an Onboarding Briefing</span>
										<HugeiconsIcon
											icon={ArrowRight01Icon}
											strokeWidth={2}
											className="size-4"
										/>
									</Link>
								</div>
							</div>

							{/* ── Tightly Cropped 3D Torus Visual (Zero Canvas Padding: Starts Flush on Left, Stays in Column) ── */}
							<div className="relative w-full max-w-[460px] sm:max-w-[500px] mt-6 -mb-16 sm:-mb-20 lg:-mb-24 select-none">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src="/how-it-works-ring-tight.png"
									alt="Aura Strategic Operations Torus Ring Arch"
									className="w-full h-auto object-cover object-bottom pointer-events-none rounded-none"
									loading="lazy"
								/>
							</div>
						</div>

						{/* ── Right Column: Step-by-Step Vertical Timeline (100% Centered Spine, No Overlay) ── */}
						<div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
							<div className="space-y-0">
								{HOW_IT_WORKS_STEPS.map((step, index) => {
									const isLast = index === HOW_IT_WORKS_STEPS.length - 1;
									return (
										<div
											key={index}
											className="grid grid-cols-[24px_1fr] gap-x-6 sm:gap-x-8"
										>
											{/* ── Timeline Spine Column: Dot & Line on EXACT Same Horizontal Center (x = 12px) ── */}
											<div className="flex flex-col items-center">
												{/* Status Dot: Centered horizontally at x = 12px */}
												<div className="size-3.5 rounded-full bg-primary ring-4 ring-forest-surface shrink-0 mt-1 z-10" />

												{/* Connecting Vertical Line: Centered horizontally at x = 12px */}
												{!isLast && (
													<div className="w-px flex-1 bg-white/15 my-2" />
												)}
											</div>

											{/* ── Step Text Content: Clean Minimal Typography (No Chips, No Gold on Hover) ── */}
											<div className={!isLast ? "pb-8 sm:pb-10" : "pb-0"}>
												<span className="text-xs font-mono font-medium text-forest-muted uppercase tracking-wider block mb-1">
													{step.step}
												</span>
												<h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight leading-snug mb-2">
													{step.title}
												</h3>
												<p className="text-sm sm:text-base text-forest-muted leading-relaxed max-w-xl">
													{step.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default HowItWorksSection;
