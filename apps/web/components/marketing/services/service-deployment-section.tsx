const DEPLOYMENT_STAGES = [
	{
		window: "Days 01–03",
		title: "Discovery & SLA Audit",
		description:
			"Historical ticket analysis, handle-time benchmarking, escalation mapping, and formal SLA targets.",
	},
	{
		window: "Days 04–08",
		title: "Talent Selection & Access",
		description:
			"Dedicated specialists matched by domain and language, NDA onboarding, and secure workstation provisioning.",
	},
	{
		window: "Days 09–12",
		title: "SOP Immersion & Nesting",
		description:
			"Deep knowledge-base immersion, response calibration, and live side-by-side shadow queues with QA scoring.",
	},
	{
		window: "Days 13–14+",
		title: "Full Ownership & Telemetry",
		description:
			"Production go-live across agreed shifts with daily volume reporting and weekly executive calibration.",
	},
];

export function ServiceDeploymentSection() {
	return (
		<section className="w-full py-20 sm:py-28 bg-background border-t border-border/40">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				{/* ── 14-Day Launch Architecture ── */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
					<div className="max-w-2xl">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
							Deployment Cadence
						</span>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-foreground leading-[1.15]">
							From signed scope to live SLA coverage in 14 days.
						</h2>
					</div>
					<p className="text-sm sm:text-base text-muted-foreground max-w-sm leading-relaxed">
						A structured two-week onboarding sprint ensures zero handoff friction before your dedicated pod goes live.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-border/70 divide-y lg:divide-y-0 lg:divide-x divide-border/70">
					{DEPLOYMENT_STAGES.map((stage) => (
						<div
							key={stage.window}
							className="py-8 sm:py-10 sm:px-6 lg:first:pl-0 lg:last:pr-0 flex flex-col justify-between"
						>
							<div>
								<span className="font-mono text-xs font-bold uppercase tracking-widest text-forest-surface dark:text-primary block mb-4">
									{stage.window}
								</span>
								<h3 className="text-lg sm:text-xl font-bold font-heading text-foreground tracking-tight mb-2.5">
									{stage.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{stage.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ServiceDeploymentSection;
