"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PRINCIPLES = [
	{
		title: "Integrity in Every Action",
		description:
			"We operate with honesty and transparency, ensuring that every decision builds lasting trust with our clients, partners, and frontline teams.",
	},
	{
		title: "Innovation that Drives Growth",
		description:
			"We embrace modern technology and workflow automation to create smarter, faster, and more reliable operational solutions that move the industry forward.",
	},
	{
		title: "Security You Can Trust",
		description:
			"Protecting our users' data and critical operations is at the heart of everything we build, backed by strict enterprise-grade safeguards and SOC2 compliance.",
	},
];

export function AboutPrinciplesSection() {
	return (
		<section className="w-full py-16 sm:py-24 lg:py-28 bg-background border-b border-border/40">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				
				{/* Section Header */}
				<div className="max-w-3xl mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-heading text-foreground tracking-tight leading-[1.15] mb-4">
						Guided by Principles, Driven by Innovation
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
						We believe in building enterprise solutions that prioritize uncompromising trust, transparency, and sustainable client success.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
					
					{/* ── Left Column: Team Collaboration Workshop Photo ── */}
					<motion.div
						initial={{ opacity: 0, scale: 0.97 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-6"
					>
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:rounded-[2rem] border border-border/60 bg-muted shadow-xl">
							<Image
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
								alt="Team brainstorming and operational collaboration"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
								className="object-cover"
							/>
						</div>
					</motion.div>

					{/* ── Right Column: Stacked Principles List ── */}
					<div className="lg:col-span-6 flex flex-col divide-y divide-border/60">
						{PRINCIPLES.map((principle, index) => (
							<motion.div
								key={principle.title}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.12 }}
								className="py-6 sm:py-7 first:pt-0 last:pb-0"
							>
								<h3 className="text-lg sm:text-xl font-bold font-heading text-foreground tracking-tight mb-2">
									{principle.title}
								</h3>
								<p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
									{principle.description}
								</p>
							</motion.div>
						))}
					</div>

				</div>

			</div>
		</section>
	);
}

export default AboutPrinciplesSection;
