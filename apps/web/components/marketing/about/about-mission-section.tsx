"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	CheckmarkCircle02Icon,
	ArrowRight01Icon,
	CreditCardIcon,
	Wallet01Icon,
	SentIcon,
	Coins01Icon,
} from "@hugeicons/core-free-icons";

export function AboutMissionSection() {
	return (
		<section className="w-full py-16 sm:py-24 lg:py-28 bg-background border-b border-border/40">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
					
					{/* ── Left Column: Heading + App & Transaction Showcase ── */}
					<div className="lg:col-span-6 flex flex-col">
						<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-heading text-foreground tracking-tight leading-[1.15] mb-4">
							Redefining the Future of Finance &amp; Operations
						</h2>
						<p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl font-normal">
							We are on a mission to make operations and financial workflows faster, safer, and more accessible through continuous innovation and enterprise-grade technology.
						</p>

						{/* Mockup Canvas */}
						<div className="relative w-full max-w-md mx-auto lg:mx-0 min-h-[340px] flex items-center justify-center py-6">
							{/* Subtle background ambient blob */}
							<div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

							{/* Center Mobile Phone Frame */}
							<div className="relative z-10 w-56 sm:w-60 rounded-[2.2rem] bg-card border-4 border-foreground/10 dark:border-white/10 p-4 shadow-2xl">
								{/* Phone Notch/Speaker */}
								<div className="mx-auto w-16 h-1.5 bg-foreground/20 rounded-full mb-4" />
								
								{/* Balance inside phone */}
								<div className="text-center mb-4">
									<p className="text-[10px] text-muted-foreground uppercase font-medium">Wallet Balance</p>
									<p className="text-xl font-bold font-heading text-foreground tracking-tight">$18,420.31</p>
								</div>

								{/* Action buttons inside phone */}
								<div className="grid grid-cols-2 gap-2 mb-4">
									<div className="flex items-center justify-center gap-1.5 py-1.5 bg-muted rounded-lg text-[10px] font-semibold text-foreground">
										<HugeiconsIcon icon={SentIcon} className="size-3 text-primary" />
										<span>Send</span>
									</div>
									<div className="flex items-center justify-center gap-1.5 py-1.5 bg-muted rounded-lg text-[10px] font-semibold text-foreground">
										<HugeiconsIcon icon={Wallet01Icon} className="size-3 text-primary" />
										<span>Receive</span>
									</div>
								</div>

								{/* Mini recent transactions inside phone */}
								<div className="space-y-2">
									<div className="flex items-center justify-between text-[11px] p-1.5 rounded-lg bg-muted/40">
										<span className="font-medium text-foreground">Cloud Node</span>
										<span className="font-mono text-emerald-600 font-semibold">+99.9%</span>
									</div>
									<div className="flex items-center justify-between text-[11px] p-1.5 rounded-lg bg-muted/40">
										<span className="font-medium text-foreground">Ticket Triage</span>
										<span className="font-mono text-muted-foreground">42s AHT</span>
									</div>
								</div>

								<div className="mt-4 text-center">
									<span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-[10px] font-semibold rounded-full shadow-xs">
										Active Pod
									</span>
								</div>
							</div>

							{/* Floating Overlay Card 1: Left "Payment Successful" */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="absolute left-0 bottom-4 z-20 rounded-xl bg-card/95 backdrop-blur-md border border-border/80 p-3 shadow-xl flex items-center gap-3 w-44"
							>
								<div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
									<HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-4.5" strokeWidth={2.5} />
								</div>
								<div>
									<p className="text-[10px] text-muted-foreground font-medium">Payment Successful</p>
									<p className="text-xs font-bold font-heading text-foreground">$435.24</p>
								</div>
							</motion.div>

							{/* Floating Overlay Card 2: Top Right "Received USD" */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.15 }}
								className="absolute right-0 top-6 z-20 rounded-xl bg-card/95 backdrop-blur-md border border-border/80 p-2.5 px-3 shadow-xl flex items-center gap-2.5"
							>
								<span className="text-sm">🇺🇸</span>
								<div>
									<p className="text-[10px] text-muted-foreground font-medium">Settled</p>
									<p className="text-xs font-bold font-heading text-foreground">350.20 USD</p>
								</div>
							</motion.div>

							{/* Floating Overlay Card 3: Bottom Right "PayPal / Instant Card" */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.25 }}
								className="absolute right-2 bottom-6 z-20 rounded-xl bg-card/95 backdrop-blur-md border border-border/80 p-3 shadow-xl flex items-center gap-2.5"
							>
								<div className="size-7 rounded-lg bg-primary/20 text-primary-foreground flex items-center justify-center">
									<HugeiconsIcon icon={Coins01Icon} className="size-4 text-foreground" />
								</div>
								<span className="text-xs font-bold font-heading text-foreground">$203.01</span>
							</motion.div>
						</div>
					</div>

					{/* ── Right Column: 150k+ Our User & Narrative Card ── */}
					<div className="lg:col-span-6 flex flex-col justify-center">
						
						{/* Top: Avatar stack & User Metric */}
						<div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-8">
							{/* Overlapping Avatars */}
							<div className="flex items-center -space-x-2.5">
								<div className="relative size-11 rounded-full border-2 border-background overflow-hidden shadow-xs">
									<Image
										src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
										alt="User avatar"
										fill
										className="object-cover"
									/>
								</div>
								<div className="relative size-11 rounded-full border-2 border-background overflow-hidden shadow-xs">
									<Image
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
										alt="User avatar"
										fill
										className="object-cover"
									/>
								</div>
								<div className="relative size-11 rounded-full border-2 border-background overflow-hidden shadow-xs">
									<Image
										src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
										alt="User avatar"
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex size-11 items-center justify-center rounded-full border-2 border-background bg-foreground text-background font-bold text-sm shadow-xs dark:bg-primary dark:text-primary-foreground">
									+
								</div>
							</div>

							{/* Big Metric Tag */}
							<div>
								<span className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-foreground">
									150k+
								</span>
								<span className="text-sm font-medium text-muted-foreground ml-2">
									Our Users
								</span>
							</div>
						</div>

						{/* Bottom Card Container */}
						<div className="rounded-3xl bg-muted/30 dark:bg-card/40 border border-border/60 p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col items-start">
							<p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-8 font-normal">
								We are a forward-thinking fintech and customer operations company committed to transforming the way modern enterprises manage their operations and revenue. By combining innovation, resilient infrastructure, and frontline expertise, we deliver solutions that are secure, seamless, and designed to empower continuous growth.
							</p>

							<Link
								href="/services"
								className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background hover:bg-muted text-foreground px-6 py-3 text-sm font-semibold transition-all duration-200 shadow-xs hover:-translate-y-0.5"
							>
								<span>About Us</span>
								<HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
							</Link>
						</div>

					</div>

				</div>
			</div>
		</section>
	);
}

export default AboutMissionSection;
