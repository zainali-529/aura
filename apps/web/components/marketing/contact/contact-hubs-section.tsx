const DELIVERY_HUBS = [
	{
		city: "New York",
		role: "Global Headquarters",
		address: "One World Trade Center, Suite 8500",
		timezone: "EST (UTC-5)",
		focus: "Executive client governance, enterprise compliance, and North American account strategy.",
	},
	{
		city: "London",
		role: "EMEA Operations Hub",
		address: "22 Bishopsgate, Level 18",
		timezone: "GMT (UTC+0)",
		focus: "Multilingual European CX pods, regulated fintech compliance, and GDPR operations.",
	},
	{
		city: "Singapore",
		role: "APAC Technical Center",
		address: "Marina Bay Financial Centre, Tower 2",
		timezone: "SGT (UTC+8)",
		focus: "Tier 1–3 ITIL technical helpdesks, engineering escalations, and APAC enterprise care.",
	},
	{
		city: "Manila",
		role: "24/7 Omnichannel Hub",
		address: "Bonifacio Global City, High Street South",
		timezone: "PHT (UTC+8)",
		focus: "High-throughput 24/7 voice/chat care, back-office KYC auditing, and elastic surge teams.",
	},
];

export function ContactHubsSection() {
	return (
		<section className="w-full py-20 sm:py-24 bg-background">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
					<div className="max-w-2xl">
						<span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary mb-3 block">
							Global Delivery Footprint
						</span>
						<h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-foreground leading-[1.15]">
							Four operational hubs synchronized 24/7.
						</h2>
					</div>
					<p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
						Physical clean-desk security facilities operating across global timezones for uninterrupted SLA continuity.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-border/75 divide-y lg:divide-y-0 lg:divide-x divide-border/75">
					{DELIVERY_HUBS.map((hub) => (
						<div
							key={hub.city}
							className="py-8 sm:py-10 sm:px-6 lg:first:pl-0 lg:last:pr-0 flex flex-col justify-between"
						>
							<div>
								<div className="flex items-center justify-between gap-2 mb-4">
									<span className="font-mono text-xs font-bold uppercase tracking-wider text-forest-surface dark:text-primary">
										{hub.role}
									</span>
									<span className="font-mono text-[11px] text-muted-foreground">
										{hub.timezone}
									</span>
								</div>

								<h3 className="text-2xl font-bold font-heading text-foreground tracking-tight mb-1.5">
									{hub.city}
								</h3>
								<p className="font-mono text-xs text-muted-foreground mb-4">
									{hub.address}
								</p>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{hub.focus}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ContactHubsSection;
