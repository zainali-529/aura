const GOVERNANCE_PILLARS = [
	{
		number: "01",
		title: "SOP Immersion & Training",
		description:
			"Dedicated operations trainers codify your brand voice, escalation rules, and product macros before a single live customer interaction occurs.",
	},
	{
		number: "02",
		title: "Double-Blind QA Calibration",
		description:
			"Weekly ticket and call scorecards audited against your exact rubric, paired with calibrated executive reviews and root-cause coaching.",
	},
	{
		number: "03",
		title: "Dedicated Workflow Alignment",
		description:
			"Seamless operational continuity. Our teams adapt directly to your SOPs, escalation hierarchies, and approved enterprise environments without disrupting velocity.",
	},
	{
		number: "04",
		title: "Verified Enterprise Security",
		description:
			"Hardware-restricted delivery hubs, SSO/VPN access policies, and audited SOC-2 Type II, HIPAA, and PCI-DSS Level 1 controls.",
	},
];

export function ServiceDeliverySection() {
	return (
		<section className="w-full bg-forest dark:bg-[#0D2115] text-white py-20 sm:py-28 border-t border-border/60 dark:border-white/10">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
					{/* Left Column: Governance Statement */}
					<div className="lg:col-span-4 lg:sticky lg:top-28">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary font-mono mb-3 block">
							Operational Governance
						</span>
						<h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-white leading-[1.15] mb-4">
							Built to pass enterprise scrutiny on day one.
						</h2>
						<p className="text-sm sm:text-base text-forest-muted leading-relaxed">
							Headcount alone doesn&apos;t solve operational scale. Every Aura service line is backed by dedicated pod leads, live telemetry, and verifiable quality controls.
						</p>
					</div>

					{/* Right Column: 2x2 Architectural Hairline Grid */}
					<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border border-white/12 rounded-xl overflow-hidden bg-white/[0.015]">
						{GOVERNANCE_PILLARS.map((pillar, idx) => (
							<div
								key={pillar.number}
								className={`p-7 sm:p-9 flex flex-col justify-between ${
									idx % 2 === 0 ? "sm:border-r border-white/12" : ""
								} ${idx < 2 ? "border-b border-white/12" : ""} ${
									idx === 2 ? "border-b sm:border-b-0 border-white/12" : ""
								}`}
							>
								<div>
									<span className="font-mono text-xs font-bold tracking-widest text-primary block mb-5">
										{pillar.number} // STANDARD
									</span>
									<h3 className="text-xl font-bold font-heading text-white tracking-tight mb-3">
										{pillar.title}
									</h3>
									<p className="text-sm text-forest-muted leading-relaxed">
										{pillar.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServiceDeliverySection;
