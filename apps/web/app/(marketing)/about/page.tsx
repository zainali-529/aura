import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowRight01Icon,
	ShieldCheckIcon,
	Clock01Icon,
	Coins01Icon,
} from "@hugeicons/core-free-icons";
import { HalftonePatternHero } from "@/components/ui/halftone-pattern-hero";

export const metadata = {
	title: "About Us | Aura BPO",
	description:
		"Learn about Aura's executive leadership, global delivery infrastructure, and commitment to enterprise customer operations.",
};

export default function AboutPage() {
	return (
		<div className="flex flex-col w-full overflow-hidden">
			{/* ── Section: Full Viewport Height Hero with Centered Content & Halftone Architectural Landscape ── */}
			<section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between bg-background overflow-hidden border-b border-border/40">
				{/* Ambient background glow */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary/5 dark:bg-primary/[0.03] blur-3xl pointer-events-none rounded-full" />

				{/* ── Upper / Center Hero Typography & Actions ── */}
				<div className="relative z-10 mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-14 sm:pt-20 lg:pt-24 pb-6 sm:pb-8">
					{/* Status Tag */}
					<div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 dark:bg-white/5 px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6 shadow-xs backdrop-blur-xs">
						<span className="size-2 rounded-full bg-primary animate-pulse" />
						<span>Strategic Customer Operations &amp; Enterprise BPO</span>
					</div>

					{/* Category Kicker */}
					<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-forest-surface dark:text-primary font-mono mb-4 block">
						Who We Are &amp; What We Stand For
					</span>

					{/* Large Centered Headline */}
					<h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold font-heading tracking-tight text-foreground leading-[1.05] max-w-5xl mx-auto mb-6">
						Human expertise. Global governance. Engineered for scale.
					</h1>

					{/* Centered Descriptive Narrative */}
					<p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-normal">
						Aura was built on a simple conviction: modern enterprises deserve dedicated, high-touch customer care and technical precision without bureaucratic latency or quality loss.
					</p>

					{/* Dual Zendesk-Style Action Buttons */}
					<div className="flex flex-wrap items-center justify-center gap-3.5">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px cursor-pointer"
						>
							<span>Book an Executive Briefing</span>
							<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
						</Link>
						<Link
							href="#pillars"
							className="inline-flex items-center justify-center rounded-lg border border-border/80 bg-background/80 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-foreground transition-colors hover:bg-muted active:translate-y-px backdrop-blur-xs cursor-pointer"
						>
							<span>Our Operating Principles</span>
						</Link>
					</div>
				</div>

				{/* ── Mountain Halftone Silhouette Grounded at the Bottom Edge ── */}
				<div className="relative w-full mt-auto">
					<HalftonePatternHero
						height="460px"
						dotGap={7}
						radius={90}
						grain={0.2}
						className="w-full h-[340px] sm:h-[400px] lg:h-[460px] xl:h-[500px]"
					/>
				</div>
			</section>

			{/* ── Section: Key Architectural Metrics / Proof Strip ── */}
			<section id="pillars" className="w-full py-16 sm:py-24 bg-muted/30 border-b border-border/40 scroll-mt-20">
				<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
						{/* Pillar 1 */}
						<div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-xs">
							<div className="size-10 rounded-xl bg-forest-surface text-primary flex items-center justify-center mb-5">
								<HugeiconsIcon icon={ShieldCheckIcon} strokeWidth={2} className="size-5" />
							</div>
							<span className="text-3xl sm:text-4xl font-bold font-heading text-foreground tracking-tight">
								99.4%
							</span>
							<h3 className="text-base font-bold text-foreground mt-2 font-heading">
								SLA Compliance &amp; Precision
							</h3>
							<p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
								Rigorous ITIL incident triage, continuous QA calibration, and live manager auditing across all ticket queues.
							</p>
						</div>

						{/* Pillar 2 */}
						<div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-xs">
							<div className="size-10 rounded-xl bg-forest-surface text-primary flex items-center justify-center mb-5">
								<HugeiconsIcon icon={Coins01Icon} strokeWidth={2} className="size-5" />
							</div>
							<span className="text-3xl sm:text-4xl font-bold font-heading text-foreground tracking-tight">
								40%
							</span>
							<h3 className="text-base font-bold text-foreground mt-2 font-heading">
								Efficiency Optimization
							</h3>
							<p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
								Reduce overhead and staffing volatility with bespoke dedicated pods and elastic workforce scaling.
							</p>
						</div>

						{/* Pillar 3 */}
						<div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-xs">
							<div className="size-10 rounded-xl bg-forest-surface text-primary flex items-center justify-center mb-5">
								<HugeiconsIcon icon={Clock01Icon} strokeWidth={2} className="size-5" />
							</div>
							<span className="text-3xl sm:text-4xl font-bold font-heading text-foreground tracking-tight">
								24/7/365
							</span>
							<h3 className="text-base font-bold text-foreground mt-2 font-heading">
								Follow-the-Sun Delivery
							</h3>
							<p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
								Active delivery centers across New York, London, Singapore, and Manila providing uninterrupted global coverage.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
