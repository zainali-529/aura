import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@workspace/ui/lib/utils";

// ── Engagement Model Interface ─────────────────────────────────────
interface EngagementModel {
	id: string;
	number: string;
	badge: string;
	title: string;
	hook: string;
	description: string;
	specs: { label: string; value: string }[];
	highlights: string[];
	ctaText: string;
	ctaHref: string;
	isPrimary?: boolean;
}

// ── 3 Core BPO Engagement Models ───────────────────────────────────
const ENGAGEMENT_MODELS: EngagementModel[] = [
	{
		id: "dedicated",
		number: "01",
		badge: "Exclusive Capacity",
		title: "Dedicated Teams",
		hook: "100% full-time specialists tailored exclusively to your brand.",
		description:
			"Engineered for high-growth tech scaleups and enterprise brands requiring complete brand voice immersion, direct ticketing access, and dedicated team leadership.",
		specs: [
			{ label: "Commitment", value: "100% Dedicated FTEs" },
			{ label: "Management", value: "Dedicated Pod Lead & QA Coach" },
			{ label: "Integration", value: "Direct Slack & Native CRM" },
			{ label: "Structure", value: "Dedicated monthly retainer" },
			{ label: "Ramp-Up Time", value: "14 days to go-live" },
		],
		highlights: [
			"Zero client-sharing — agents work exclusively for you",
			"Bespoke QA calibration & weekly executive reporting",
			"Elastic scale: add +5 to +50 specialists seamlessly",
		],
		ctaText: "Configure dedicated pod",
		ctaHref: "/contact?model=dedicated",
		isPrimary: true,
	},
	{
		id: "shared",
		number: "02",
		badge: "Elastic Multi-Tenant",
		title: "Shared Operations",
		hook: "Fractional certified specialists handling surge & after-hours queues.",
		description:
			"Optimized for seasonal volume spikes, weekend coverage, and 24/7/365 coverage without paying for idle overnight agent downtime.",
		specs: [
			{ label: "Commitment", value: "Fractional / Shared Capacity" },
			{ label: "Availability", value: "24/7/365 Omnichannel" },
			{ label: "Supervision", value: "Dedicated QA & shift leads" },
			{ label: "Structure", value: "Flexible fractional allocation" },
			{ label: "Ramp-Up Time", value: "Rapid 5–7 day onboarding" },
		],
		highlights: [
			"Strict contractual sub-60s live response SLAs",
			"Pay only for active resolved customer interactions",
			"Seamless shift handover to your daytime team",
		],
		ctaText: "Explore shared tiers",
		ctaHref: "/contact?model=shared",
		isPrimary: false,
	},
	{
		id: "project",
		number: "03",
		badge: "Fixed Outcome Sprint",
		title: "Project-Based",
		hook: "Time-bound operational sprints with guaranteed deliverables.",
		description:
			"Targeted operational initiatives executed by senior operators — from historical ticket backlogs and compliance audits to CRM migrations and workflow playbooks.",
		specs: [
			{ label: "Commitment", value: "Dedicated sprint squad" },
			{ label: "Scope", value: "Contractual SOW & criteria" },
			{ label: "Deliverables", value: "Audited data & process playbooks" },
			{ label: "Structure", value: "Fixed-scope milestone delivery" },
			{ label: "Duration", value: "2 to 12 week sprints" },
		],
		highlights: [
			"Zero recurring operational overhead or long-term lock-in",
			"Weekly milestone demos with transparent sprint logs",
			"100% acceptance criteria SLA guarantee",
		],
		ctaText: "Request project scope",
		ctaHref: "/contact?model=project",
		isPrimary: false,
	},
];

export function EngagementModelsSection() {
	return (
		<section
			id="engagement-models"
			className="w-full bg-forest text-white py-20 sm:py-28 overflow-hidden border-t border-white/10"
			aria-labelledby="models-heading"
		>
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				{/* ── Section Header ── */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
					<div className="max-w-2xl">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary font-mono mb-3 block">
							Engagement Models
						</span>
						<h2
							id="models-heading"
							className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-[1.15]"
						>
							Capacity structured for your operational rhythm.
						</h2>
						<p className="mt-4 text-base sm:text-lg text-forest-muted leading-relaxed">
							Choose the exact operational framework that fits your ticket volumes, staffing flexibility, and enterprise compliance requirements.
						</p>
					</div>

					<div className="hidden md:flex items-center gap-2.5 text-xs font-mono text-forest-muted border border-white/10 rounded-full px-4 py-2 bg-white/[0.03] shrink-0">
						<span className="size-2 rounded-full bg-emerald-400" />
						<span>SOC2 Type II &amp; HIPAA Certified</span>
					</div>
				</div>

				{/* ── 3 Columns Separated by Crisp Hairlines ── */}
				<div className="grid grid-cols-1 lg:grid-cols-3 border-y border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
					{ENGAGEMENT_MODELS.map((model) => (
						<div
							key={model.id}
							className="flex flex-col justify-between p-8 sm:p-10 lg:p-10 xl:p-12 hover:bg-white/[0.015] transition-colors duration-300"
						>
							{/* Top Information Block */}
							<div>
								{/* Number & Model Badge */}
								<div className="flex items-center justify-between gap-4 mb-6">
									<span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
										{model.number} // MODEL
									</span>
									<span className="text-[11px] font-mono uppercase tracking-wider text-forest-muted border border-white/10 rounded-full px-2.5 py-0.5 bg-white/[0.02]">
										{model.badge}
									</span>
								</div>

								{/* Model Title */}
								<h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight mb-2.5">
									{model.title}
								</h3>

								{/* Short Punchy Hook */}
								<p className="text-sm font-medium text-white/90 leading-snug mb-3">
									{model.hook}
								</p>

								{/* Narrative Description */}
								<p className="text-xs sm:text-sm text-forest-muted leading-relaxed mb-6">
									{model.description}
								</p>

								{/* Operational Specs (Hairline Key-Value Table) */}
								<div className="border-t border-white/10 divide-y divide-white/10 my-6 text-xs sm:text-sm">
									{model.specs.map((spec, sIdx) => (
										<div
											key={sIdx}
											className="py-2.5 flex items-baseline justify-between gap-4"
										>
											<span className="text-forest-muted font-medium">
												{spec.label}
											</span>
											<span className="text-white font-semibold text-right">
												{spec.value}
											</span>
										</div>
									))}
								</div>

								{/* Key Highlights Checklist */}
								<div className="pt-2 mb-8">
									<span className="text-[11px] font-mono uppercase tracking-wider text-forest-muted/80 block mb-3">
										Operational Highlights
									</span>
									<ul className="space-y-2.5 text-xs sm:text-sm">
										{model.highlights.map((item, hIdx) => (
											<li
												key={hIdx}
												className="flex items-start gap-2.5"
											>
												<HugeiconsIcon
													icon={Tick01Icon}
													strokeWidth={2.5}
													className="size-4 text-primary shrink-0 mt-0.5"
												/>
												<span className="text-white/90 leading-tight">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* Bottom Action CTA */}
							<div className="pt-4">
								<Link
									href={model.ctaHref}
									className={cn(
										"w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 active:translate-y-px cursor-pointer",
										model.isPrimary
											? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-xs"
											: "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
									)}
								>
									<span>{model.ctaText}</span>
									<HugeiconsIcon
										icon={ArrowRight01Icon}
										strokeWidth={2}
										className="size-3.5"
									/>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default EngagementModelsSection;
