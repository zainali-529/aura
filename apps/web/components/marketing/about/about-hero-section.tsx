"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowRight01Icon,
	Coins01Icon,
	Invoice01Icon,
	SparklesIcon,
	ArrowUpRight01Icon,
	AnalyticsUpIcon,
	ShieldCheckIcon,
} from "@hugeicons/core-free-icons";

export interface AboutHeroSectionProps {
	badge?: string;
	title?: string;
	description?: string;
	primaryCtaText?: string;
	primaryCtaHref?: string;
	secondaryCtaText?: string;
	secondaryCtaHref?: string;
	imageSrc?: string;
}

export function AboutHeroSection({
	badge = "About Us",
	title = "Redefining the Future of Finance & Operations",
	description = "We are dedicated to making modern customer operations and financial services smarter, faster, and more accessible. With innovation, trust, and advanced technology at our core, we empower businesses and individuals to take complete control of their journey.",
	primaryCtaText = "Contact Us",
	primaryCtaHref = "/contact",
	secondaryCtaText = "Explore Features",
	secondaryCtaHref = "/services",
	imageSrc = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
}: AboutHeroSectionProps) {
	// Mode state to switch between Fintech view and BPO Operations view on the floating metric card
	const [activeMetricTab, setActiveMetricTab] = React.useState<"fintech" | "operations">("fintech");

	return (
		<section className="relative w-full overflow-hidden bg-background pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-28">
			{/* Ambient modern lighting gradients inspired by high-end Dribbble showcase */}
			<div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-gradient-to-b from-primary/10 via-emerald-500/5 to-transparent blur-3xl rounded-full" />
			<div className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

			<div className="relative mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
					
					{/* ── Left Column: Clean Modern Editorial Typography & CTAs ── */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						className="flex flex-col items-start lg:col-span-7 xl:col-span-7"
					>
						{/* Dribbble-style Pill Badge */}
						<div className="inline-flex items-center gap-2 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background shadow-xs dark:bg-card dark:text-foreground dark:border dark:border-border/80 mb-6 sm:mb-8 transition-transform hover:scale-[1.02]">
							<span className="size-2 rounded-full bg-primary animate-pulse" />
							<span>{badge}</span>
						</div>

						{/* Hero Headline */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold font-heading tracking-tight text-foreground leading-[1.08] sm:leading-[1.1] mb-6">
							{title}
						</h1>

						{/* Descriptive Body */}
						<p className="text-base sm:text-lg lg:text-[1.125rem] text-muted-foreground leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
							{description}
						</p>

						{/* Action Buttons */}
						<div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
							<Link
								href={primaryCtaHref}
								className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
							>
								<span>{primaryCtaText}</span>
								<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
							</Link>

							<Link
								href={secondaryCtaHref}
								className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-border/90 bg-background/80 hover:bg-muted/80 text-foreground px-7 py-3.5 text-sm sm:text-base font-medium transition-all duration-200 backdrop-blur-xs hover:-translate-y-0.5 active:translate-y-0"
							>
								<span>{secondaryCtaText}</span>
							</Link>
						</div>

						{/* Micro Trust indicators below buttons */}
						<div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-mono">
							<div className="flex items-center gap-2">
								<HugeiconsIcon icon={ShieldCheckIcon} className="size-4 text-primary" strokeWidth={2} />
								<span>SOC2 &amp; ISO 27001 Certified</span>
							</div>
							<div className="flex items-center gap-2">
								<HugeiconsIcon icon={AnalyticsUpIcon} className="size-4 text-primary" strokeWidth={2} />
								<span>99.4% First-Contact Resolution</span>
							</div>
						</div>
					</motion.div>

					{/* ── Right Column: Portrait Frame + Floating Overlay Metric Card ── */}
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
						className="relative flex justify-center lg:justify-end lg:col-span-5 xl:col-span-5 pt-4 pb-10 sm:pb-12 lg:pb-0"
					>
						{/* Main Portrait Card Container */}
						<div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none">
							
							{/* Ambient Soft Glow Behind Photo */}
							<div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-emerald-400/10 rounded-[3rem] blur-2xl opacity-60 -z-10" />

							{/* Image Container with Dribbble Rounded Radius */}
							<div className="relative aspect-[4/4.9] w-full overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] border border-border/60 bg-muted/30 shadow-2xl">
								<Image
									src={imageSrc}
									alt="Leadership & Customer Operations"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
									className="object-cover object-center transition-transform duration-700 hover:scale-105"
									priority
								/>

								{/* Subtle bottom vignette to ensure card pops */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
							</div>

							{/* ── Floating Overlay Card (Matching Paynova / Dribbble Design) ── */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
								className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-8 z-20 w-[270px] sm:w-[290px] rounded-2xl bg-card/95 dark:bg-card/90 backdrop-blur-md border border-border/80 p-4 sm:p-5 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
							>
								{/* Card Header & Trend */}
								<div className="flex items-start justify-between">
									<div>
										<p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
											{activeMetricTab === "fintech" ? "Account Balance" : "Operational SLA"}
										</p>
										<div className="mt-1 flex items-baseline gap-2">
											<span className="text-2xl sm:text-[1.65rem] font-bold font-heading text-foreground tracking-tight">
												{activeMetricTab === "fintech" ? "$3,534.01" : "99.85%"}
											</span>
										</div>
									</div>

									{/* Upward Green Trend Sparkline / Badge */}
									<div className="flex flex-col items-end">
										<div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
											<HugeiconsIcon icon={ArrowUpRight01Icon} className="size-3" strokeWidth={2.5} />
											<span>+18.4%</span>
										</div>
										{/* Clean Minimalist Green Sparkline SVG */}
										<svg className="w-14 h-5 mt-1 stroke-emerald-500 fill-none" viewBox="0 0 56 20">
											<path
												d="M2 17 C 12 16, 18 8, 28 11 C 38 14, 42 4, 54 3"
												strokeWidth="2.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</div>

								{/* Divider */}
								<div className="my-3.5 h-px w-full bg-border/60" />

								{/* Mini Activity Section */}
								<div>
									<div className="flex items-center justify-between mb-2">
										<span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
											Recent
										</span>
										{/* Interactive tab switcher */}
										<button
											type="button"
											onClick={() => setActiveMetricTab(prev => prev === "fintech" ? "operations" : "fintech")}
											className="text-[10px] text-primary hover:underline font-mono cursor-pointer"
										>
											{activeMetricTab === "fintech" ? "View Operations" : "View Fintech"}
										</button>
									</div>

									{activeMetricTab === "fintech" ? (
										<div className="space-y-2">
											{/* Item 1 */}
											<div className="flex items-center justify-between text-xs">
												<div className="flex items-center gap-2">
													<div className="size-6 rounded-md bg-muted flex items-center justify-center text-foreground">
														<HugeiconsIcon icon={Invoice01Icon} className="size-3.5" />
													</div>
													<span className="font-medium text-foreground">Bill &amp; Taxes</span>
												</div>
												<span className="font-mono text-xs font-semibold text-rose-500 dark:text-rose-400">
													-$20.22
												</span>
											</div>

											{/* Item 2 */}
											<div className="flex items-center justify-between text-xs">
												<div className="flex items-center gap-2">
													<div className="size-6 rounded-md bg-muted flex items-center justify-center text-foreground">
														<HugeiconsIcon icon={Coins01Icon} className="size-3.5" />
													</div>
													<span className="font-medium text-foreground">Car Energy</span>
												</div>
												<span className="font-mono text-xs font-semibold text-rose-500 dark:text-rose-400">
													-$20.22
												</span>
											</div>
										</div>
									) : (
										<div className="space-y-2">
											{/* Ops Item 1 */}
											<div className="flex items-center justify-between text-xs">
												<div className="flex items-center gap-2">
													<div className="size-6 rounded-md bg-primary/20 flex items-center justify-center text-primary-foreground">
														<HugeiconsIcon icon={SparklesIcon} className="size-3.5 text-foreground" />
													</div>
													<span className="font-medium text-foreground">Tier-2 Queue</span>
												</div>
												<span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
													45s AHT
												</span>
											</div>

											{/* Ops Item 2 */}
											<div className="flex items-center justify-between text-xs">
												<div className="flex items-center gap-2">
													<div className="size-6 rounded-md bg-primary/20 flex items-center justify-center text-primary-foreground">
														<HugeiconsIcon icon={ShieldCheckIcon} className="size-3.5 text-foreground" />
													</div>
													<span className="font-medium text-foreground">Escalation Rate</span>
												</div>
												<span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
													0.6% Low
												</span>
											</div>
										</div>
									)}
								</div>
							</motion.div>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}

export default AboutHeroSection;
