import {
	CustomerSupportIcon,
	Target02Icon,
	ComputerSettingsIcon,
	Database01Icon,
	Invoice01Icon,
	UserGroupIcon,
	PaintBoardIcon,
	BankIcon,
	Hospital01Icon,
	ShoppingBag01Icon,
	CloudIcon,
	AnalyticsUpIcon,
	ShieldCheckIcon,
	Coins01Icon,
	Globe02Icon,
	Building01Icon,
	Briefcase01Icon,
	Home01Icon,
	Mail01Icon,
	News01Icon,
} from "@hugeicons/core-free-icons";

export type HeaderIconType = typeof CustomerSupportIcon;

export interface MegaMenuLink {
	title: string;
	description: string;
	href: string;
	icon: HeaderIconType;
	number?: string;
}

export const HEADER_SERVICES_ITEMS: MegaMenuLink[] = [
	{
		number: "01",
		title: "Customer Experience",
		description: "24/7 omnichannel voice, live chat & email pods",
		href: "/services/customer-experience",
		icon: CustomerSupportIcon,
	},
	{
		number: "02",
		title: "Lead Generation",
		description: "Outbound SDR prospecting & pipeline growth",
		href: "/services/lead-generation",
		icon: Target02Icon,
	},
	{
		number: "03",
		title: "Technical Support",
		description: "Tier 1–3 ITIL helpdesk & engineering triage",
		href: "/services/technical-support",
		icon: ComputerSettingsIcon,
	},
	{
		number: "04",
		title: "Back-Office Operations",
		description: "KYC auditing, data & catalog workflows",
		href: "/services/back-office-operations",
		icon: Database01Icon,
	},
	{
		number: "05",
		title: "Finance & Specialized Ops",
		description: "Reconciliation, claims & dispute arbitration",
		href: "/services/finance-operations",
		icon: Invoice01Icon,
	},
	{
		number: "06",
		title: "HR & Business Support",
		description: "Talent screening, onboarding & payroll ops",
		href: "/services/hr-business-support",
		icon: UserGroupIcon,
	},
	{
		number: "07",
		title: "Digital & Creative Services",
		description: "UI/UX design systems & brand production",
		href: "/services/digital-creative",
		icon: PaintBoardIcon,
	},
];

export const HEADER_ENGAGEMENT_MODELS = [
	{
		title: "Dedicated Pods",
		detail: "100% exclusive FTE specialists",
		href: "/#engagement-models",
	},
	{
		title: "Elastic Multi-Tenant",
		detail: "24/7 seasonal surge coverage",
		href: "/#engagement-models",
	},
	{
		title: "Hybrid Co-Managed",
		detail: "Tiered escalation & overnight care",
		href: "/#engagement-models",
	},
];

export const HEADER_INDUSTRIES_ITEMS: MegaMenuLink[] = [
	{
		title: "Fintech & Banking",
		description: "PCI-DSS compliance, fraud screening & disputes",
		href: "/industries#fintech",
		icon: BankIcon,
	},
	{
		title: "Healthcare & MedTech",
		description: "HIPAA-aligned patient care & claims audits",
		href: "/industries#healthcare",
		icon: Hospital01Icon,
	},
	{
		title: "E-Commerce & Logistics",
		description: "Peak holiday coverage & shipment triage",
		href: "/industries#ecommerce",
		icon: ShoppingBag01Icon,
	},
	{
		title: "SaaS & Cloud Platforms",
		description: "API technical support & onboarding desks",
		href: "/industries#saas",
		icon: CloudIcon,
	},
];

export const HEADER_SOLUTIONS_EXTRA: MegaMenuLink[] = [
	{
		title: "Case Studies",
		description: "Verified CSAT, AHT & cost-saving outcomes",
		href: "/case-studies",
		icon: AnalyticsUpIcon,
	},
	{
		title: "Security & Compliance",
		description: "SOC-2 Type II, ISO 27001 & HIPAA controls",
		href: "/security",
		icon: ShieldCheckIcon,
	},
	{
		title: "Engagement & SLA Estimator",
		description: "Dedicated vs. elastic capacity structures",
		href: "/#engagement-models",
		icon: Coins01Icon,
	},
	{
		title: "Global Delivery Hubs",
		description: "Follow-the-sun operations across 4 timezones",
		href: "/about#pillars",
		icon: Globe02Icon,
	},
];

export const HEADER_ABOUT_ITEMS: MegaMenuLink[] = [
	{
		title: "About Aura",
		description: "Mission, governance metrics & story",
		href: "/about",
		icon: Building01Icon,
	},
	{
		title: "Operations Leadership",
		description: "Meet the directors running delivery pods",
		href: "/#team",
		icon: UserGroupIcon,
	},
	{
		title: "Careers at Aura",
		description: "Open specialist & QA leadership roles",
		href: "/careers",
		icon: Briefcase01Icon,
	},
];

export const MOBILE_DIRECT_LINKS = [
	{ label: "Home", href: "/", icon: Home01Icon },
	{ label: "Insights & Blog", href: "/blog", icon: News01Icon },
	{ label: "Contact Operations", href: "/contact", icon: Mail01Icon },
];
