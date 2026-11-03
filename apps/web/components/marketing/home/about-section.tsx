"use client";

import * as React from "react";
import Link from "next/link";

export function AboutSection() {
	return (
		<section
			id="about"
			className="w-full border-t border-border/40 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
		>
			<div className="mx-auto max-w-7xl xl:max-w-[1480px]">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
					{/* ── Left Column: Clean Team Photo Card (Stretches 1:1 with Right Column) ── */}
					<div className="lg:col-span-5 xl:col-span-5 relative overflow-hidden rounded-3xl bg-muted h-full min-h-[460px] sm:min-h-[500px] lg:min-h-full border border-border/40 shadow-lg group">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="https://images.unsplash.com/photo-1506787497326-c2736dde1bef?q=80&w=784&auto=format&fit=crop"
							alt="Aura BPO executive leadership and global operations specialist"
							loading="lazy"
							className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
						/>
					</div>

					{/* ── Right Column: Large Impact Content & Surface Stat Card ── */}
					<div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between">
						<div>
							{/* Category Kicker in Surface Green */}
							<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
								Who We Are
							</span>

							{/* Large, Bold, Focused Headline (Zendesk Style) */}
							<h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.15rem] font-bold tracking-tight text-foreground font-heading leading-[1.12] mb-4">
								Next-gen BPO built for modern enterprise scale.
							</h2>

							{/* Large, Highly Readable Narrative Text */}
							<p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground font-normal mb-6 max-w-2xl">
								Aura provides dedicated multilingual teams, rigorous QA governance, and tailored workflow execution — empowering high-growth brands and enterprise leaders to deliver world-class 24/7 customer care and back-office precision with up to 40% operational cost savings.
							</p>

							{/* Zendesk-Style Boxy Action Buttons */}
							<div className="flex flex-wrap items-center gap-3.5 mb-8">
								<Link
									href="/contact"
									className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px"
								>
									Get a Proposal
								</Link>
								<Link
									href="#services"
									className="inline-flex items-center justify-center rounded-lg border border-border/80 bg-background px-6 py-3 text-sm sm:text-base font-medium text-foreground transition-colors hover:bg-muted active:translate-y-px"
								>
									Explore Capabilities
								</Link>
							</div>
						</div>

						{/* Bottom: Impact Narrative + Perfectly Sized Surface Green 40% Stat Box */}
						<div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-6 border-t border-border/50">
							{/* Narrative on the Left */}
							<div className="sm:col-span-7">
								<p className="text-sm sm:text-base lg:text-[1.05rem] leading-relaxed text-foreground font-medium">
									Over 10M+ customer inquiries resolved annually with an average 98.4% CSAT rating and strict 45-second first response time.
								</p>
							</div>

							{/* Symmetrical Surface Stat Box Aligned with Image Bottom */}
							<div className="sm:col-span-5 flex justify-start sm:justify-end">
								<div className="rounded-2xl p-5 sm:p-5.5 bg-forest-surface text-white shadow-md flex flex-col justify-between w-full sm:w-[200px] lg:w-[215px] h-[150px] sm:h-[155px] lg:h-[160px] transition-transform duration-300 hover:scale-[1.02]">
									<div className="text-4xl sm:text-5xl font-bold tracking-tight font-heading text-primary leading-none">
										40%
									</div>
									<p className="text-xs font-medium leading-snug text-forest-muted">
										Average operational cost reduction for partner brands.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
