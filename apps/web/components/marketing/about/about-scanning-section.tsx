"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	ShieldCheckIcon,
	SecurityCheckIcon,
	ArrowRight01Icon,
	CpuIcon,
	SmartPhone01Icon,
} from "@hugeicons/core-free-icons";

export function AboutScanningSection() {
	return (
		<section className="w-full py-16 sm:py-24 lg:py-28 bg-muted/20 border-b border-border/40 overflow-hidden">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					
					{/* ── Left Column: Heading & Connected Device Callout ── */}
					<div className="lg:col-span-4 flex flex-col items-start">
						<h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold font-heading text-foreground tracking-tight leading-[1.18] mb-8">
							Intelligent Transaction Scanning
						</h2>

						{/* Connected device management callout card */}
						<div className="rounded-2xl bg-card border border-border/70 p-5 sm:p-6 shadow-sm">
							<div className="flex items-center gap-2.5 mb-2.5">
								<div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary-foreground">
									<HugeiconsIcon icon={SmartPhone01Icon} className="size-4 text-foreground" />
								</div>
								<h3 className="text-sm font-bold font-heading text-foreground">
									Connected device management
								</h3>
							</div>
							<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
								Easily monitor, control, and secure all your linked devices and operations from a single dashboard, ensuring safe access.
							</p>
						</div>
					</div>

					{/* ── Center Column: Concentric Circular Orbit Radar Diagram ── */}
					<div className="lg:col-span-5 flex justify-center py-4">
						<div className="relative size-[300px] sm:size-[360px] lg:size-[380px] flex items-center justify-center">
							
							{/* Outer Orbit Circle */}
							<div className="absolute inset-0 rounded-full border border-border/60 dark:border-white/10" />
							
							{/* Middle Orbit Circle */}
							<div className="absolute inset-10 rounded-full border border-dashed border-border/80 dark:border-white/15" />
							
							{/* Inner Orbit Circle */}
							<div className="absolute inset-20 rounded-full border border-border/60 dark:border-white/10" />

							{/* Radar Sweep Effect */}
							<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none animate-spin [animation-duration:12s]" />

							{/* Center Core Node */}
							<div className="relative z-10 size-16 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 flex items-center justify-center">
								<HugeiconsIcon icon={SecurityCheckIcon} className="size-8 text-foreground" strokeWidth={2} />
							</div>

							{/* Orbit Node 1: Top (Google) */}
							<div className="absolute top-2 left-1/2 -translate-x-1/2 size-9 rounded-full bg-card border border-border/80 shadow-md flex items-center justify-center">
								<svg className="size-4" viewBox="0 0 24 24">
									<path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
									<path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
									<path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
									<path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
								</svg>
							</div>

							{/* Orbit Node 2: Top Right (Mastercard) */}
							<div className="absolute top-16 right-10 size-8 rounded-full bg-card border border-border/80 shadow-md flex items-center justify-center">
								<div className="flex -space-x-1.5">
									<span className="size-3 rounded-full bg-red-500 opacity-90 inline-block" />
									<span className="size-3 rounded-full bg-amber-400 opacity-90 inline-block" />
								</div>
							</div>

							{/* Orbit Node 3: Left (Visa) */}
							<div className="absolute top-1/2 left-4 -translate-y-1/2 px-2.5 py-1 rounded-full bg-card border border-border/80 shadow-md">
								<span className="text-[11px] font-extrabold text-blue-600 tracking-wider">VISA</span>
							</div>

							{/* Orbit Node 4: Bottom (Samsung) */}
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-card border border-border/80 shadow-md">
								<span className="text-[10px] font-bold tracking-widest text-foreground uppercase">SAMSUNG</span>
							</div>

							{/* Orbit Node 5: Right (Security node) */}
							<div className="absolute top-1/2 right-4 -translate-y-1/2 size-8 rounded-full bg-card border border-border/80 shadow-md flex items-center justify-center text-primary">
								<HugeiconsIcon icon={CpuIcon} className="size-4 text-foreground" />
							</div>

						</div>
					</div>

					{/* ── Right Column: Safeguard Narrative & Action ── */}
					<div className="lg:col-span-3 flex flex-col items-start">
						<p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-normal">
							We combine cutting-edge security protocols with continuous live monitoring to safeguard your enterprise financial and operations journey.
						</p>

						<Link
							href="/services"
							className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5"
						>
							<span>Learn More</span>
							<HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
						</Link>
					</div>

				</div>
			</div>
		</section>
	);
}

export default AboutScanningSection;
