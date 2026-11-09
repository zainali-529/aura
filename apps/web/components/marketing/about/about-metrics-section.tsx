"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function AboutMetricsSection() {
	return (
		<section className="w-full py-16 sm:py-24 bg-background border-b border-border/40">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				
				{/* Section Header */}
				<div className="max-w-2xl mb-14 sm:mb-18">
					<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-heading text-foreground tracking-tight leading-[1.15] mb-4">
						Powering Growth for Businesses Everywhere
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
						More than 50,000 users in 25+ countries trust us with their mission-critical operations and financial growth.
					</p>
				</div>

				{/* 4 Large Metrics Grid with Sleek Hairline Borders */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:gap-y-16 lg:gap-y-20 gap-x-12 lg:gap-x-16">
					
					{/* Metric 1 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="flex flex-col border-b border-border/60 pb-8 sm:pb-12"
					>
						<span className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold font-heading tracking-tight text-foreground leading-none mb-3">
							150k+
						</span>
						<span className="text-sm sm:text-base font-medium text-muted-foreground">
							50,000+ Active Users
						</span>
					</motion.div>

					{/* Metric 2 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="flex flex-col border-b border-border/60 pb-8 sm:pb-12"
					>
						<span className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold font-heading tracking-tight text-foreground leading-none mb-3">
							$2B+
						</span>
						<span className="text-sm sm:text-base font-medium text-muted-foreground">
							Billion Transactions Handled
						</span>
					</motion.div>

					{/* Metric 3 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex flex-col pt-2"
					>
						<span className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold font-heading tracking-tight text-foreground leading-none mb-3">
							98%
						</span>
						<span className="text-sm sm:text-base font-medium text-muted-foreground">
							Customer Satisfaction Score (CSAT)
						</span>
					</motion.div>

					{/* Metric 4 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-col pt-2"
					>
						<span className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold font-heading tracking-tight text-foreground leading-none mb-3">
							100+
						</span>
						<span className="text-sm sm:text-base font-medium text-muted-foreground">
							Global Team Members &amp; Engineers
						</span>
					</motion.div>

				</div>

			</div>
		</section>
	);
}

export default AboutMetricsSection;
