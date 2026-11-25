import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

const BENCHMARKS = [
	{ value: "07", label: "Core BPO Practices" },
	{ value: "14 Days", label: "Standard Pod Deployment" },
	{ value: "99.4%", label: "Audited SLA Adherence" },
	{ value: "24/7/365", label: "Follow-the-Sun Delivery" },
];

export function ServicesHeroSection() {
	return (
		<section className="w-full bg-background pt-12 sm:pt-16 lg:pt-20 border-b border-border/60">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				{/* ── Top Asymmetric Editorial Split ── */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center pb-14 sm:pb-18">
					{/* Left Column: Editorial Headline & Direct Actions */}
					<div className="lg:col-span-7 flex flex-col items-start">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-4 block">
							Services &amp; Capabilities
						</span>

						<h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold font-heading tracking-tight text-foreground leading-[1.06] mb-6 max-w-2xl">
							Dedicated operations engineered for enterprise scale.
						</h1>

						<p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal">
							Seven specialized BPO practices built around dedicated human teams, strict SLA governance, and seamless alignment with your internal operational workflows.
						</p>

						<div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
							<Link
								href="/contact"
								className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px"
							>
								<span>Scope a Dedicated Pod</span>
								<HugeiconsIcon
									icon={ArrowRight01Icon}
									strokeWidth={2}
									className="size-4"
								/>
							</Link>
							<a
								href="#capabilities"
								className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm sm:text-base font-medium text-foreground transition-colors hover:bg-muted active:translate-y-px"
							>
								Browse 7 Practices
							</a>
						</div>
					</div>

					{/* Right Column: Architectural Operations Showcase Mosaic */}
					<div className="lg:col-span-5 w-full">
						<div className="grid grid-cols-12 gap-3.5">
							{/* Top Full-Width Architectural Operations Hub Photo */}
							<div className="col-span-12 relative aspect-[16/10] rounded-xl overflow-hidden border border-border/70 bg-muted">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
									alt="Dedicated operations specialists collaborating across laptops with headsets"
									className="h-full w-full object-cover object-center"
								/>
							</div>

							{/* Bottom Left: Architectural Delivery Hub Corridor */}
							<div className="col-span-5 relative rounded-xl overflow-hidden border border-border/70 bg-muted min-h-[156px]">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
									alt="Modern glass-and-oak enterprise delivery office"
									className="h-full w-full object-cover object-center"
								/>
							</div>

							{/* Bottom Right: High-Contrast Forest Governance Anchor Block */}
							<a
								href="#capabilities"
								className="group col-span-7 rounded-xl bg-forest dark:bg-forest-surface/65 text-white border border-forest-surface dark:border-white/12 p-4 sm:p-5 flex flex-col justify-between transition-colors hover:border-primary/50"
							>
								<div className="flex items-center justify-between gap-2">
									<span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
										SLA Architecture
									</span>
									<HugeiconsIcon
										icon={ArrowUpRight01Icon}
										strokeWidth={2}
										className="size-3.5 text-white/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
									/>
								</div>

								<div className="my-3">
									<span className="block text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
										14 Days
									</span>
									<p className="text-xs text-forest-muted leading-relaxed mt-1">
										Average onboarding sprint from workflow discovery to live SLA production.
									</p>
								</div>

								<div className="pt-2.5 border-t border-white/12 flex items-center justify-between text-[11px] font-mono text-white/85">
									<span>07 Core Practices</span>
									<span className="text-primary">Explore &darr;</span>
								</div>
							</a>
						</div>
					</div>
				</div>

				{/* ── Bottom 4-Cell Hairline Operational Benchmark Bar ── */}
				<div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border/60 divide-y lg:divide-y-0 divide-x divide-border/60">
					{BENCHMARKS.map((stat) => (
						<div key={stat.label} className="py-6 sm:py-8 px-4 sm:px-6 first:pl-0">
							<span className="block text-2xl sm:text-3xl font-bold font-heading tracking-tight text-foreground">
								{stat.value}
							</span>
							<span className="mt-1 block text-xs sm:text-sm text-muted-foreground font-mono">
								{stat.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ServicesHeroSection;
