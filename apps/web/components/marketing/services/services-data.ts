export type ServiceCategory =
	| "front-office"
	| "technical-data"
	| "corporate-creative";

export interface ServiceWorkflowItem {
	number: string;
	title: string;
	description: string;
	slaTarget: string;
}

export interface ServicePodRole {
	code: string;
	role: string;
	focus: string;
}

export interface ServiceImpactMetric {
	label: string;
	baseline: string;
	withAura: string;
}

export interface ServiceFaqItem {
	question: string;
	answer: string;
}

export interface BpoService {
	id: string;
	number: string;
	category: ServiceCategory;
	categoryLabel: string;
	title: string;
	tag: string;
	description: string;
	image: string;
	link: string;
	contactHref: string;
	metricLabel: string;
	metricValue: string;
	slaSummary: string;
	deliverables: string[];
	// Extended data for /services/[slug] detail pages
	detailHeadline: string;
	longDescription: string;
	deploymentWindow: string;
	coverageWindow: string;
	workflows: ServiceWorkflowItem[];
	podRoles: ServicePodRole[];
	impactMetrics: ServiceImpactMetric[];
	faqs: ServiceFaqItem[];
}

/**
 * Single source of truth for Aura's 7 enterprise BPO service practices.
 * Consumed by Home carousel, /services catalog, /services/[slug] detail pages, and /contact.
 */
export const BPO_SERVICES_CATALOG: BpoService[] = [
	{
		id: "customer-experience",
		number: "01",
		category: "front-office",
		categoryLabel: "Front-Office & Growth",
		title: "Customer Experience",
		tag: "24/7 Omnichannel Care • Voice, Chat & Email",
		description:
			"Tier 1–3 multilingual care specialists delivering personalized, empathetic interactions and consistent 98.4% CSAT across every touchpoint.",
		image:
			"https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1000&q=80",
		link: "/services/customer-experience",
		contactHref: "/contact?service=customer-experience",
		metricLabel: "Target CSAT",
		metricValue: "98.4%",
		slaSummary: "< 30s response",
		deliverables: [
			"Inbound Voice & VIP Concierge",
			"Live Chat & Social Messaging",
			"Tiered Ticket Escalation & Triage",
			"Multilingual Teams (12+ Languages)",
		],
		detailHeadline:
			"High-empathy omnichannel customer care built for brand loyalty.",
		longDescription:
			"Your frontline interactions define customer retention. Aura embeds dedicated, voice-calibrated care specialists across voice, live chat, email, and social channels — maintaining strict brand tone and resolving complex inquiries on first contact.",
		deploymentWindow: "14 Days",
		coverageWindow: "24/7/365",
		workflows: [
			{
				number: "01",
				title: "Inbound Voice & VIP Queue Care",
				description:
					"Dedicated bilingual specialists trained in empathy, rapid de-escalation, and executive concierge routing with minimal hold latency.",
				slaTarget: "< 25s answer speed",
			},
			{
				number: "02",
				title: "Real-Time Live Chat & Messaging",
				description:
					"Concurrent multi-session chat resolution for pre-sales questions, account changes, subscription retention, and urgent triage.",
				slaTarget: "< 30s first reply",
			},
			{
				number: "03",
				title: "Structured Email & Ticket Resolution",
				description:
					"Thorough, policy-accurate written resolutions with full root-cause tagging and structured escalation summaries.",
				slaTarget: "< 2h ticket turnaround",
			},
			{
				number: "04",
				title: "Peak Seasonal Surge Elasticity",
				description:
					"Cross-trained reserve cohorts able to absorb sudden 2x–3x volume spikes during product launches or retail holidays without SLA drops.",
				slaTarget: "Zero SLA breaches",
			},
		],
		podRoles: [
			{
				code: "01 // FRONTLINE",
				role: "Omnichannel Care Specialists",
				focus:
					"Brand-immersed agents dedicated exclusively to your customer queues across voice, live chat, and email.",
			},
			{
				code: "02 // QUALITY",
				role: "Dedicated QA Calibration Coach",
				focus:
					"Blind weekly call and ticket audits scored directly against your brand rubric with actionable tone feedback.",
			},
			{
				code: "03 // LEADERSHIP",
				role: "CX Operations Pod Lead",
				focus:
					"Real-time queue balancing, shift adherence monitoring, shrinkage buffering, and weekly executive reviews.",
			},
		],
		impactMetrics: [
			{ label: "Customer Satisfaction (CSAT)", baseline: "86% avg", withAura: "98.4% target" },
			{ label: "First-Contact Resolution (FCR)", baseline: "68% avg", withAura: "89.2% verified" },
			{ label: "Operational Cost Overhead", baseline: "100% baseline", withAura: "Up to 40% saved" },
		],
		faqs: [
			{
				question: "Can agents handle multiple languages simultaneously or in regional pods?",
				answer:
					"Yes. We deploy dedicated English, Spanish, French, German, Arabic, and APAC language cohorts trained in regional cultural nuances.",
			},
			{
				question: "How do you guarantee our brand voice stays authentic?",
				answer:
					"During Days 9–12 of onboarding, our trainers run scenario-based tone drills and blind calibration checks approved directly by your team.",
			},
			{
				question: "What minimum seat count is required to launch a Customer Experience pod?",
				answer:
					"Dedicated pods start at 3 FTE specialists and scale smoothly in increments up to 100+ seats across multi-shift coverage.",
			},
		],
	},
	{
		id: "lead-generation",
		number: "02",
		category: "front-office",
		categoryLabel: "Front-Office & Growth",
		title: "Lead Generation",
		tag: "Pipeline Acceleration • Dedicated SDR Pods",
		description:
			"High-impact outbound prospecting, qualified sales appointment booking, and multi-channel account mapping that scale executive revenue pipelines.",
		image:
			"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
		link: "/services/lead-generation",
		contactHref: "/contact?service=lead-generation",
		metricLabel: "Pipeline Lift",
		metricValue: "3.2x ROI",
		slaSummary: "Qualified Meetings",
		deliverables: [
			"Targeted B2B Outbound Prospecting",
			"Executive Calendar & Demo Booking",
			"Account Mapping & Lead Enrichment",
			"Win-Back & Renewal Retention Calls",
		],
		detailHeadline:
			"Disciplined outbound SDR pods engineered for qualified pipeline.",
		longDescription:
			"Scaling an internal SDR floor takes months of recruiting and ramp time. Aura launches researched, articulate outbound specialists who map target buying committees, run disciplined cadences, and hand off sales-ready meetings to your closers.",
		deploymentWindow: "14 Days",
		coverageWindow: "Regional Shift Aligned",
		workflows: [
			{
				number: "01",
				title: "Multi-Touch Outbound Cadences",
				description:
					"Coordinated phone, email, and social outreach crafted around persona pain points rather than high-churn generic spam.",
				slaTarget: "Strict QA outreach review",
			},
			{
				number: "02",
				title: "Qualification & Demo Booking",
				description:
					"Pre-call discovery scoring against your exact ICP criteria before placing vetted decision-makers onto account executive calendars.",
				slaTarget: "90%+ show-rate target",
			},
			{
				number: "03",
				title: "Account Research & Data Enrichment",
				description:
					"Continuous org-chart mapping, trigger monitoring, and clean contact hygiene so sales leadership works from verified intelligence.",
				slaTarget: "99% record accuracy",
			},
			{
				number: "04",
				title: "Win-Back & Expansion Calling",
				description:
					"Structured outreach to dormant accounts, trial drop-offs, and renewal cohorts to capture recoverable recurring revenue.",
				slaTarget: "Weekly conversion telemetry",
			},
		],
		podRoles: [
			{
				code: "01 // OUTBOUND",
				role: "Dedicated SDR Specialists",
				focus:
					"Articulate sales development reps trained on your pitch, objection handling, and target buyer personas.",
			},
			{
				code: "02 // INTELLIGENCE",
				role: "Research & List Analyst",
				focus:
					"Curates verified decision-maker lists, territory segmentation, and account triggers ahead of daily dialing.",
			},
			{
				code: "03 // CONVERSION",
				role: "Sales Pod Manager",
				focus:
					"Tracks daily connect rates, qualification accuracy, script A/B outcomes, and calendar show rates.",
			},
		],
		impactMetrics: [
			{ label: "Qualified Pipeline Multiplier", baseline: "1.0x baseline", withAura: "3.2x average lift" },
			{ label: "Ramp Time to First Meetings", baseline: "60–90 days", withAura: "14 days launch" },
			{ label: "Booked Meeting Show Rate", baseline: "65% industry avg", withAura: "88%+ calibrated" },
		],
		faqs: [
			{
				question: "Do we control the target account list and qualification criteria?",
				answer:
					"Completely. Every call script, qualification rubric, and target ICP filter is signed off with your revenue leadership before launch.",
			},
			{
				question: "Can outbound SDRs coordinate closely with our internal Account Executives?",
				answer:
					"Yes. SDRs join your weekly pipeline standups and warm-transfer or calendar-book prospects directly into your AE schedule.",
			},
			{
				question: "How is outreach quality prevented from sounding robotic?",
				answer:
					"Our QA team reviews daily call recordings and rejects cookie-cutter pitch delivery, enforcing consultative discovery standards.",
			},
		],
	},
	{
		id: "technical-support",
		number: "03",
		category: "technical-data",
		categoryLabel: "Technical & Data",
		title: "Technical Support",
		tag: "ITIL Certified • Strict 45s SLA",
		description:
			"Certified tier-1 to tier-3 technical engineers resolving complex SaaS, cloud infrastructure, API diagnostics, and developer incident triage.",
		image:
			"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
		link: "/services/technical-support",
		contactHref: "/contact?service=technical-support",
		metricLabel: "Triage SLA",
		metricValue: "45s Avg",
		slaSummary: "Tier 1–3 ITIL",
		deliverables: [
			"Application Diagnostics & Root Cause",
			"API Webhook & SDK Reproduction",
			"Engineering Triage & Bug Escalations",
			"24/7 Infrastructure Alert Response",
		],
		detailHeadline:
			"ITIL-certified technical support pods that shield core engineering.",
		longDescription:
			"Software teams lose velocity when product engineers spend hours answering diagnostic tickets. Aura deploys technically fluent Tier 1–3 specialists who reproduce issues, parse logs, troubleshoot API payloads, and escalate only verified engineering bugs.",
		deploymentWindow: "14–18 Days",
		coverageWindow: "24/7 NOC & Desk",
		workflows: [
			{
				number: "01",
				title: "Tier 1–2 Application Troubleshooting",
				description:
					"Guided configuration assistance, permissions debugging, integration setup, and live screen-share diagnostics.",
				slaTarget: "< 45s critical triage",
			},
			{
				number: "02",
				title: "API, Webhook & Log Inspection",
				description:
					"Inspecting JSON payloads, auth tokens, HTTP status codes, and reproduction environments for technical buyers and developers.",
				slaTarget: "Full repro packets",
			},
			{
				number: "03",
				title: "Severity Incident Routing",
				description:
					"Structured P1–P3 incident classification, stakeholder updates, and crisp handoff packets into your engineering escalation path.",
				slaTarget: "Zero noisy escalations",
			},
			{
				number: "04",
				title: "Knowledge Base & Macro Stewardship",
				description:
					"Turning recurring troubleshooting steps into clear internal runbooks and customer self-service documentation.",
				slaTarget: "Weekly KB updates",
			},
		],
		podRoles: [
			{
				code: "01 // DIAGNOSTICS",
				role: "Tier 1–2 Technical Specialists",
				focus:
					"CS-trained and ITIL-grounded engineers handling live troubleshooting, configuration, and log verification.",
			},
			{
				code: "02 // ESCALATION",
				role: "Tier-3 Senior Triage Lead",
				focus:
					"Reproduces edge-case bugs, validates severity, and prepares clean engineering-ready tickets before escalating.",
			},
			{
				code: "03 // RELIABILITY",
				role: "Technical QA & SLA Lead",
				focus:
					"Monitors P1 response adherence, escalation deflection ratios, and resolution accuracy weekly.",
			},
		],
		impactMetrics: [
			{ label: "Critical P1 Triage Time", baseline: "22 mins avg", withAura: "45s flat SLA" },
			{ label: "Engineering Escalation Deflection", baseline: "45% deflected", withAura: "82%+ resolved in-pod" },
			{ label: "Documentation Coverage", baseline: "Ad-hoc updates", withAura: "Continuous sprint sync" },
		],
		faqs: [
			{
				question: "Can your engineers troubleshoot developer and API-heavy products?",
				answer:
					"Yes. We recruit candidates with computer science backgrounds and hands-on testing skills in REST APIs, auth flows, and log diagnostics.",
			},
			{
				question: "How do technical specialists ramp up on a proprietary platform?",
				answer:
					"We immerse leads in your documentation and staging sandboxes during Days 4–12, writing test cases and shadowing your core engineers.",
			},
			{
				question: "Does technical support cover overnight P1 on-call alerts?",
				answer:
					"Yes. Our follow-the-sun hubs across Manila, Singapore, and London maintain active eyes-on-glass coverage 24/7.",
			},
		],
	},
	{
		id: "back-office-operations",
		number: "04",
		category: "technical-data",
		categoryLabel: "Technical & Data",
		title: "Back-Office Operations",
		tag: "High Throughput • 99.9% Data Accuracy",
		description:
			"Scalable document verification, catalog governance, transaction auditing, and rapid structured data extraction at massive enterprise volumes.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
		link: "/services/back-office-operations",
		contactHref: "/contact?service=back-office-operations",
		metricLabel: "Data Accuracy",
		metricValue: "99.9%",
		slaSummary: "100k+ Ops / Day",
		deliverables: [
			"KYC & Merchant Document Auditing",
			"SKU Catalog & Inventory Governance",
			"Order Exception & Logistics Triage",
			"Trust, Safety & Content Moderation",
		],
		detailHeadline:
			"High-throughput back-office precision at enterprise volume.",
		longDescription:
			"Growth bottlenecks often hide behind manual queues — merchant onboarding checks, SKU validation, logistics exceptions, and marketplace safety reviews. Aura clears backlogs around the clock with multi-pass QA verification.",
		deploymentWindow: "10–14 Days",
		coverageWindow: "24/7 Batch & Live",
		workflows: [
			{
				number: "01",
				title: "KYC, KYB & Identity Verification",
				description:
					"Structured manual review of incorporation documents, compliance records, and fraud signals with full audit trails.",
				slaTarget: "99.9% audit accuracy",
			},
			{
				number: "02",
				title: "Marketplace & Catalog Curation",
				description:
					"Product taxonomy normalization, SKU attribute enrichment, pricing checks, and duplicate listing cleanup at scale.",
				slaTarget: "100k+ daily throughput",
			},
			{
				number: "03",
				title: "Trust, Safety & Policy Moderation",
				description:
					"24/7 human moderation guarding brand communities against fraudulent sellers, counterfeit goods, and policy violations.",
				slaTarget: "< 0.02% leak rate",
			},
			{
				number: "04",
				title: "Logistics & Supply Chain Exceptions",
				description:
					"Bill of lading validation, carrier delay triage, freight claims indexing, and real-time shipment documentation checks.",
				slaTarget: "Zero queue backlog",
			},
		],
		podRoles: [
			{
				code: "01 // EXECUTION",
				role: "Data & Verification Analysts",
				focus:
					"Detail-oriented processors trained on strict decision trees, edge-case guidelines, and high throughput targets.",
			},
			{
				code: "02 // VERIFICATION",
				role: "Dual-Pass QA Auditors",
				focus:
					"Executes randomized and high-risk sampling audits to lock accuracy above 99.9%.",
			},
			{
				code: "03 // THROUGHPUT",
				role: "Back-Office Floor Lead",
				focus:
					"Balances queue velocity across regional shifts and flags recurring upstream data bottlenecks.",
			},
		],
		impactMetrics: [
			{ label: "Verified Data & Decision Accuracy", baseline: "94% manual avg", withAura: "99.9% dual-pass QA" },
			{ label: "Queue Backlog Clearance", baseline: "48–72h lag", withAura: "Same-shift SLA" },
			{ label: "Unit Processing Cost", baseline: "100% baseline", withAura: "40% lower cost/item" },
		],
		faqs: [
			{
				question: "How do you maintain 99.9% accuracy across repetitive workflows?",
				answer:
					"We pair strict guideline checklists with dual-pass review gates on sensitive items and real-time individual error-rate tracking.",
			},
			{
				question: "What security protocols protect sensitive KYC or customer records?",
				answer:
					"Agents work exclusively on locked terminals with zero local download permissions, restricted screenshots, and SOC-2 / ISO 27001 controls.",
			},
			{
				question: "Can backlog volumes scale dynamically month-over-month?",
				answer:
					"Yes. We size a dedicated baseline pod and maintain cross-trained reserve analysts for seasonal spikes or migration bursts.",
			},
		],
	},
	{
		id: "finance-operations",
		number: "05",
		category: "corporate-creative",
		categoryLabel: "Corporate & Creative",
		title: "Finance & Specialized Operations",
		tag: "FinOps & Billing • PCI-DSS Compliance",
		description:
			"Accounts receivable reconciliation, invoice auditing, chargeback dispute arbitration, and claims management under rigorous enterprise compliance.",
		image:
			"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
		link: "/services/finance-operations",
		contactHref: "/contact?service=finance-operations",
		metricLabel: "Audit Accuracy",
		metricValue: "99.8%",
		slaSummary: "PCI-DSS Level 1",
		deliverables: [
			"Accounts Payable & Receivable",
			"Chargeback & Dispute Arbitration",
			"Insurance & Healthcare Claims Audit",
			"Multi-Entity Invoice Reconciliation",
		],
		detailHeadline:
			"Compliance-governed financial back-office and billing execution.",
		longDescription:
			"Financial back-office operations require meticulous attention to detail and airtight compliance governance. Aura provides credentialed accounting and claims specialists to manage reconciliation, dispute evidence packets, and billing cycles cleanly.",
		deploymentWindow: "14–21 Days",
		coverageWindow: "Audit-Logged Shifts",
		workflows: [
			{
				number: "01",
				title: "AP / AR & Invoice Reconciliation",
				description:
					"Matching multi-currency vendor invoices, purchase orders, payment batches, and monthly ledger close support.",
				slaTarget: "99.8% match precision",
			},
			{
				number: "02",
				title: "Chargeback & Dispute Arbitration",
				description:
					"Assembling compelling transaction logs, fulfillment proof, and card-network representment responses on strict deadlines.",
				slaTarget: "Zero missed windows",
			},
			{
				number: "03",
				title: "Insurance & Healthcare Claims Review",
				description:
					"Pre-authorization verification, medical/policy coding checks, and structured adjudication documentation under HIPAA standards.",
				slaTarget: "Full audit traceability",
			},
			{
				number: "04",
				title: "Subscription Billing & Dunning Ops",
				description:
					"Proactive resolution of failed enterprise invoices, payment method updates, and contract renewal adjustments.",
				slaTarget: "Higher net recovery",
			},
		],
		podRoles: [
			{
				code: "01 // ACCOUNTING",
				role: "FinOps & Billing Specialists",
				focus:
					"Finance-degreed specialists executing daily AP/AR reconciliation, billing adjustments, and claims indexing.",
			},
			{
				code: "02 // COMPLIANCE",
				role: "Financial Audit Reviewer",
				focus:
					"Independent verification of disbursement batches, dispute packets, and regulatory policy adherence.",
			},
			{
				code: "03 // GOVERNANCE",
				role: "FinOps Engagement Lead",
				focus:
					"Coordinates month-end close deadlines, audit logs, and exception escalations with your finance controller.",
			},
		],
		impactMetrics: [
			{ label: "Ledger & Billing Precision", baseline: "96% un-audited", withAura: "99.8% verified" },
			{ label: "Chargeback Win-Back Speed", baseline: "5–7 day prep", withAura: "< 24h evidence packet" },
			{ label: "Month-End Close Readiness", baseline: "Manual bottlenecks", withAura: "On-schedule SLA" },
		],
		faqs: [
			{
				question: "What compliance frameworks govern financial workflows?",
				answer:
					"All FinOps pods operate in PCI-DSS Level 1 and SOC-2 Type II compliant spaces, with HIPAA controls active for healthcare claims.",
			},
			{
				question: "Do your specialists hold formal finance or accounting backgrounds?",
				answer:
					"Yes. We hire commerce, accounting, and finance graduates vetted through practical reconciliation and compliance testing.",
			},
			{
				question: "Can Aura assist with quarterly or annual external audit preparations?",
				answer:
					"Yes. Every action creates a structured log and documentation packet tailored to simplify external auditor sampling.",
			},
		],
	},
	{
		id: "hr-business-support",
		number: "06",
		category: "corporate-creative",
		categoryLabel: "Corporate & Creative",
		title: "HR & Business Support",
		tag: "Talent Ops • Executive Concierge & Payroll",
		description:
			"End-to-end recruitment screening, global talent onboarding coordination, payroll administration, and dedicated executive administrative support.",
		image:
			"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
		link: "/services/hr-business-support",
		contactHref: "/contact?service=hr-business-support",
		metricLabel: "Onboarding Cycle",
		metricValue: "4 Days",
		slaSummary: "Dedicated HR Pods",
		deliverables: [
			"Candidate Screening & Scheduling",
			"Employee Onboarding & Compliance",
			"Payroll & Benefits Coordination",
			"Executive Calendar & Inbox Ops",
		],
		detailHeadline:
			"People operations and executive support built for fast-scaling orgs.",
		longDescription:
			"Rapidly growing organizations often bury HR directors and executives under scheduling, document chasing, and payroll administration. Aura provides discreet, high-EQ HR coordinators and executive support specialists to keep teams moving smoothly.",
		deploymentWindow: "10–14 Days",
		coverageWindow: "Multi-Timezone Coverage",
		workflows: [
			{
				number: "01",
				title: "Recruitment Coordination & Screening",
				description:
					"Resume shortlisting against technical/role scorecards, candidate pre-screens, and seamless multi-panel interview scheduling.",
				slaTarget: "< 24h scheduling SLA",
			},
			{
				number: "02",
				title: "Employee Onboarding Administration",
				description:
					"Contract dispatching, background check tracking, training enrollment, and day-one readiness verification across geographies.",
				slaTarget: "4-day full onboarding",
			},
			{
				number: "03",
				title: "Payroll & Timesheet Governance",
				description:
					"Pre-payroll hours auditing, leave reconciliation, expense checks, and employee query ticketing.",
				slaTarget: "Zero payroll variance",
			},
			{
				number: "04",
				title: "Executive Administrative Concierge",
				description:
					"Dedicated C-suite calendar optimization, travel logistics, board packet prep, and priority inbox triage.",
				slaTarget: "Discreet NDA-bound care",
			},
		],
		podRoles: [
			{
				code: "01 // PEOPLE OPS",
				role: "Talent & HR Coordinators",
				focus:
					"Handles candidate pipelines, offer paperwork, onboarding follow-ups, and employee helpdesk inquiries.",
			},
			{
				code: "02 // EXECUTIVE",
				role: "Executive Support Associates",
				focus:
					"Manages complex executive calendars, cross-timezone scheduling, and confidential documentation workflows.",
			},
			{
				code: "03 // GOVERNANCE",
				role: "People Ops Pod Lead",
				focus:
					"Ensures strict PII confidentiality, onboarding SLA consistency, and surge recruitment buffering.",
			},
		],
		impactMetrics: [
			{ label: "New-Hire Onboarding Cycle", baseline: "2–3 weeks lag", withAura: "4 business days" },
			{ label: "Interview Scheduling Speed", baseline: "3–4 days email tag", withAura: "Same-day confirmation" },
			{ label: "Executive Hours Reclaimed", baseline: "Minimal admin help", withAura: "12+ hrs saved/week" },
		],
		faqs: [
			{
				question: "How is sensitive employee PII and payroll information safeguarded?",
				answer:
					"All HR and Executive specialists sign enhanced confidentiality agreements and work under restricted role-based access controls.",
			},
			{
				question: "Can an HR pod ramp up ahead of major hiring sprints?",
				answer:
					"Yes. Elastic recruiting coordinators can be added for 60–90 day hiring waves without permanent internal headcount bloat.",
			},
			{
				question: "Do Executive Associates align directly with North American or European hours?",
				answer:
					"Yes. Your assigned support associates mirror your executive team's exact working hours and holiday calendar.",
			},
		],
	},
	{
		id: "digital-creative",
		number: "07",
		category: "corporate-creative",
		categoryLabel: "Corporate & Creative",
		title: "Digital & Creative Services",
		tag: "Brand Production • UI/UX & Content Ops",
		description:
			"High-velocity creative production, digital asset management, responsive UI/UX design, motion graphics, and multi-channel content localization.",
		image:
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
		link: "/services/digital-creative",
		contactHref: "/contact?service=digital-creative",
		metricLabel: "Turnaround",
		metricValue: "24–48h",
		slaSummary: "Dedicated Studio",
		deliverables: [
			"UI/UX Design Systems & Prototyping",
			"Campaign & Performance Ad Production",
			"Digital Asset & Brand Governance",
			"Multilingual Content Localization",
		],
		detailHeadline:
			"Dedicated design and content production at predictable sprint velocity.",
		longDescription:
			"Enterprise marketing and product teams often stall waiting on agency turnarounds for campaign assets, UI variants, and regional content localization. Aura builds embedded creative studio pods trained exclusively on your brand guidelines.",
		deploymentWindow: "14 Days",
		coverageWindow: "24–48h Sprint SLA",
		workflows: [
			{
				number: "01",
				title: "Performance Campaign & Ad Production",
				description:
					"Rapid multi-format ad variants, social carousels, email templates, and presentation decks built under strict brand rules.",
				slaTarget: "24h asset turnaround",
			},
			{
				number: "02",
				title: "UI/UX Components & Web Updates",
				description:
					"Design-system compliant landing layouts, interactive prototypes, icon libraries, and responsive component polish.",
				slaTarget: "Consistent pixel QA",
			},
			{
				number: "03",
				title: "Motion Graphics & Explainer Assets",
				description:
					"Clean product walkthrough clips, UI micro-animations, and onboarding video edits for help centers and launches.",
				slaTarget: "48h motion sprints",
			},
			{
				number: "04",
				title: "Regional Content Localization",
				description:
					"Adapting visual collateral, typography, and copy seamlessly across regional markets while keeping brand consistency.",
				slaTarget: "Multi-market parity",
			},
		],
		podRoles: [
			{
				code: "01 // DESIGN",
				role: "UI/UX & Brand Designers",
				focus:
					"Executes production layouts, campaign creatives, and design system maintenance strictly within your style guide.",
			},
			{
				code: "02 // MOTION",
				role: "Multimedia & Motion Specialists",
				focus:
					"Delivers product explainers, social motion snippets, and polished presentation assets on rapid cadence.",
			},
			{
				code: "03 // DIRECTION",
				role: "Creative Traffic & QA Lead",
				focus:
					"Manages sprint intake queues, typography/brand checks, and consistent 24–48 hour delivery windows.",
			},
		],
		impactMetrics: [
			{ label: "Standard Creative Turnaround", baseline: "5–10 agency days", withAura: "24–48 hours SLA" },
			{ label: "Design Output Capacity", baseline: "Fixed freelancer caps", withAura: "Unlimited queued sprints" },
			{ label: "Brand Guideline Consistency", baseline: "Fragmented vendors", withAura: "100% locked pod" },
		],
		faqs: [
			{
				question: "Do we retain full IP ownership of every design and source file created?",
				answer:
					"100%. Every source file, vector asset, layout, and motion export belongs exclusively to your organization under our MSA.",
			},
			{
				question: "Can an embedded creative team follow our existing design system tokens?",
				answer:
					"Yes. During Days 4–10, our creative leads study your typography, grid rules, spacing, and visual tone thoroughly.",
			},
			{
				question: "How are revision cycles and feedback managed?",
				answer:
					"Revisions run on crisp same-day turnaround cycles managed directly by your dedicated Creative QA Lead.",
			},
		],
	},
];

export function getServiceById(id: string): BpoService | undefined {
	return BPO_SERVICES_CATALOG.find((service) => service.id === id);
}
