"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	BankIcon,
	CreditCardIcon,
	Coins01Icon,
	ShieldCheckIcon,
	ShoppingBag01Icon,
	DeliveryBox01Icon,
	Store01Icon,
	ContainerTruck01Icon,
	LaptopProgrammingIcon,
	CloudIcon,
	CodeIcon,
	CpuIcon,
	Hospital01Icon,
	Airplane01Icon,
	Building01Icon,
	Mortarboard01Icon,
	UserGroupIcon,
	CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";

// ── Industry Item Definition ───────────────────────────────────────
interface IndustryCardData {
	id: string;
	title: string;
	subtitle: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	bgClass: string;
	dotColor: string;
}

interface IndustryStackData {
	category: string;
	layer2Bg: string;
	layer3Bg: string;
	items: IndustryCardData[];
}

// ── 16 Specialized BPO Industries Structured in 4 Interactive Stacks ──
const INDUSTRY_STACKS: IndustryStackData[] = [
	// Stack 1: Finance, Banking & Legal / Compliance
	{
		category: "Financial Services",
		layer2Bg: "bg-[#DEEFE3] dark:bg-[#122F1D]",
		layer3Bg: "bg-[#D2E7D8] dark:bg-[#0E2617]",
		items: [
			{
				id: "fintech-1",
				title: "Fintech & Digital Banking",
				subtitle:
					"Fraud prevention, KYC/AML review, card dispute triage & strict PCI-DSS customer workflows.",
				icon: BankIcon,
				bgClass: "bg-[#EAF6ED] dark:bg-[#153822]",
				dotColor: "#10B981",
			},
			{
				id: "fintech-2",
				title: "Global Payments & Billing",
				subtitle:
					"Chargeback mitigation, merchant onboarding, reconciliation audits & gateway error escalation.",
				icon: CreditCardIcon,
				bgClass: "bg-[#E6F4EA] dark:bg-[#133520]",
				dotColor: "#059669",
			},
			{
				id: "fintech-3",
				title: "WealthTech & Brokerage",
				subtitle:
					"Institutional verification, margin alert triage & 24/7 dedicated trading desk operational support.",
				icon: Coins01Icon,
				bgClass: "bg-[#EDF7F1] dark:bg-[#163B24]",
				dotColor: "#10B981",
			},
			{
				id: "fintech-4",
				title: "RegTech & Compliance Audit",
				subtitle:
					"Continuous audit logging, regulatory filings support, SAR reporting review & sanctions screening.",
				icon: ShieldCheckIcon,
				bgClass: "bg-[#EAF6F0] dark:bg-[#143621]",
				dotColor: "#047857",
			},
		],
	},

	// Stack 2: Commerce, Retail & Marketplaces
	{
		category: "Commerce & Logistics",
		layer2Bg: "bg-[#E0EEFB] dark:bg-[#102235]",
		layer3Bg: "bg-[#D3E6F8] dark:bg-[#0C1B2B]",
		items: [
			{
				id: "commerce-1",
				title: "E-Commerce & Brands",
				subtitle:
					"High-velocity peak volume scaling, order tracking, returns processing & 24/7 omnichannel care.",
				icon: ShoppingBag01Icon,
				bgClass: "bg-[#EDF5FD] dark:bg-[#142A42]",
				dotColor: "#0284C7",
			},
			{
				id: "commerce-2",
				title: "Global Logistics & 3PL",
				subtitle:
					"Shipment exception triage, freight dispatch coordination, warehouse triage & customs documentation.",
				icon: DeliveryBox01Icon,
				bgClass: "bg-[#EBF3FB] dark:bg-[#112439]",
				dotColor: "#0369A1",
			},
			{
				id: "commerce-3",
				title: "Multi-Sided Marketplaces",
				subtitle:
					"Merchant onboarding audits, listing content moderation, buyer-seller mediation & escrow care.",
				icon: Store01Icon,
				bgClass: "bg-[#EFF6FD] dark:bg-[#162D47]",
				dotColor: "#0284C7",
			},
			{
				id: "commerce-4",
				title: "Freight & Fleet Operations",
				subtitle:
					"Real-time route exception handling, bill of lading validation & 24/7 critical carrier communication.",
				icon: ContainerTruck01Icon,
				bgClass: "bg-[#E8F2FA] dark:bg-[#102338]",
				dotColor: "#075985",
			},
		],
	},

	// Stack 3: SaaS, Cloud & High-Tech
	{
		category: "SaaS & Cloud Platforms",
		layer2Bg: "bg-[#ECE2FA] dark:bg-[#1F1934]",
		layer3Bg: "bg-[#E3D6F7] dark:bg-[#1A142B]",
		items: [
			{
				id: "saas-1",
				title: "SaaS & Cloud Platforms",
				subtitle:
					"Tier-1/2 technical helpdesk, API diagnostic triage, incident escalation & ITIL bug logging.",
				icon: LaptopProgrammingIcon,
				bgClass: "bg-[#F4EFFD] dark:bg-[#251E3E]",
				dotColor: "#6366F1",
			},
			{
				id: "saas-2",
				title: "Cloud Infrastructure & DevOps",
				subtitle:
					"Server uptime monitoring alerts, provisioning support, cluster telemetry & SLA incident dispatch.",
				icon: CloudIcon,
				bgClass: "bg-[#F2ECFB] dark:bg-[#221A39]",
				dotColor: "#4F46E5",
			},
			{
				id: "saas-3",
				title: "DevTools & API Platforms",
				subtitle:
					"Developer community triage, API documentation guidance, SDK issue replication & rate limit reviews.",
				icon: CodeIcon,
				bgClass: "bg-[#F5F0FE] dark:bg-[#271E42]",
				dotColor: "#6366F1",
			},
			{
				id: "saas-4",
				title: "Enterprise IT & Infrastructure",
				subtitle:
					"24/7 technical helpdesk, user access provisioning, network monitoring & ITIL incident escalation.",
				icon: CpuIcon,
				bgClass: "bg-[#F1EBFA] dark:bg-[#201837]",
				dotColor: "#4338CA",
			},
		],
	},

	// Stack 4: HealthTech, Travel & Regulated Services
	{
		category: "Regulated & High-Care",
		layer2Bg: "bg-[#FCE3EB] dark:bg-[#2B131E]",
		layer3Bg: "bg-[#FAD6E2] dark:bg-[#220E18]",
		items: [
			{
				id: "health-1",
				title: "HealthTech & Telehealth",
				subtitle:
					"Patient intake, HIPAA-compliant triage, electronic health records (EHR) sync & provider support.",
				icon: Hospital01Icon,
				bgClass: "bg-[#FDF0F4] dark:bg-[#341824]",
				dotColor: "#E11D48",
			},
			{
				id: "health-2",
				title: "Travel & Hospitality",
				subtitle:
					"Real-time flight rebooking, emergency rerouting, hotel concierge care & multilingual 24/7 desk.",
				icon: Airplane01Icon,
				bgClass: "bg-[#FDEEF2] dark:bg-[#301622]",
				dotColor: "#BE123C",
			},
			{
				id: "health-3",
				title: "PropTech & Real Estate",
				subtitle:
					"Emergency maintenance dispatch, tenant onboarding, lease application audits & vendor coordination.",
				icon: Building01Icon,
				bgClass: "bg-[#FEF1F5] dark:bg-[#361926]",
				dotColor: "#E11D48",
			},
			{
				id: "health-4",
				title: "EdTech & Learning Platforms",
				subtitle:
					"Global student onboarding, LMS platform diagnostics, proctoring support & academic subscription care.",
				icon: Mortarboard01Icon,
				bgClass: "bg-[#FCEEF2] dark:bg-[#2E1420]",
				dotColor: "#9F1239",
			},
		],
	},
];

// ── Interactive Layered Card Stack Component ───────────────────────
// Features:
// - True simultaneous card deck swipe: Top card slides up/out while bottom card smoothly rises up
// - ZERO blank card delay, zero layout shift (parallel simultaneous transition)
// - Visible paper layers peeking out underneath (Layer 2 & Layer 3)
// - NO borders, NO drop shadows on hover (pure flat luxury aesthetic)
// - NO badges (clean HugeIcon + pagination micro-dots + status dot)
function LayeredIndustryCardStack({ stack }: { stack: IndustryStackData }) {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const activeItem = stack.items[activeIndex] ?? stack.items[0]!;

	const handleSwap = () => {
		setActiveIndex((prev) => (prev + 1) % stack.items.length);
	};

	return (
		<div
			onClick={handleSwap}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					handleSwap();
				}
			}}
			className="relative group cursor-pointer select-none focus:outline-none h-[168px]"
			aria-label={`${activeItem.title} - Click to cycle industry (${activeIndex + 1} of ${stack.items.length})`}
		>
			{/* ── Background Layer 3 (Deepest peeking layer) ── */}
			<div
				className={`absolute inset-0 rounded-2xl ${stack.layer3Bg} transition-all duration-300 pointer-events-none translate-y-3 scale-x-[0.91] opacity-65 group-hover:translate-y-3.5`}
			/>

			{/* ── Background Layer 2 (Middle peeking layer) ── */}
			<div
				className={`absolute inset-0 rounded-2xl ${stack.layer2Bg} transition-all duration-300 pointer-events-none translate-y-1.5 scale-x-[0.96] opacity-85 group-hover:translate-y-2`}
			/>

			{/* ── Foreground Cards Container (Simultaneous Parallel Swap) ── */}
			<div className="relative z-10 w-full h-full">
				<AnimatePresence initial={false}>
					<motion.div
						key={activeItem.id}
						initial={{ opacity: 0.85, y: 8, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1, zIndex: 10 }}
						exit={{ opacity: 0, y: -32, scale: 0.94, zIndex: 20 }}
						transition={{
							type: "spring",
							stiffness: 380,
							damping: 28,
							mass: 0.6,
						}}
						className={`absolute inset-0 w-full h-full rounded-2xl ${activeItem.bgClass} p-5 sm:p-5.5 flex flex-col justify-between text-left transition-transform duration-200 group-hover:-translate-y-0.5`}
					>
						{/* Top Row: Clean Frosted Icon + 4 Pagination Micro-Dots + Status Dot */}
						<div className="flex items-center justify-between gap-2 mb-3">
							<div
								className="size-8 rounded-lg flex items-center justify-center bg-white/80 dark:bg-black/35 backdrop-blur-xs shadow-2xs shrink-0 transition-transform duration-300 group-hover:scale-105"
								style={{ color: activeItem.dotColor }}
							>
								<HugeiconsIcon
									icon={activeItem.icon}
									strokeWidth={2}
									className="size-4"
								/>
							</div>

							<div className="flex items-center gap-2">
								{/* 4 Pagination Micro-Dots (Indicates Card 1 of 4, expands on active) */}
								<div className="flex items-center gap-1 bg-white/70 dark:bg-black/40 px-2 py-1 rounded-full backdrop-blur-xs">
									{stack.items.map((_, i) => (
										<span
											key={i}
											className={`h-1.5 rounded-full transition-all duration-300 ${
												i === activeIndex
													? "w-3"
													: "w-1.5 opacity-35"
											}`}
											style={{ backgroundColor: activeItem.dotColor }}
										/>
									))}
								</div>

								{/* Micro Status Dot with Soft Outer Halo */}
								<span
									className="size-2 rounded-full ring-4 ring-black/5 dark:ring-white/10 shrink-0"
									style={{ backgroundColor: activeItem.dotColor }}
								/>
							</div>
						</div>

						{/* Bottom Row: Crisp Headline & Realistic BPO Copy (Zero Badges) */}
						<div>
							<h3 className="text-sm sm:text-base font-bold text-foreground font-heading tracking-tight leading-snug">
								{activeItem.title}
							</h3>
							<p className="text-xs sm:text-[12.5px] text-muted-foreground font-normal mt-1.5 leading-relaxed line-clamp-2">
								{activeItem.subtitle}
							</p>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

// ── Standard Flat Node Card (Used for Lower Rows to guarantee IDENTICAL dimensions) ──
// Requirements:
// - Exact same height & padding as stacked cards
// - NO borders, NO drop shadows on hover
// - NO badges
interface FlatNodeCardProps {
	title: string;
	subtitle: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	bgClass: string;
	dotColor: string;
}

function FlatNodeCard({
	title,
	subtitle,
	icon: IconComponent,
	bgClass,
	dotColor,
}: FlatNodeCardProps) {
	return (
		<div
			className={`w-full h-[168px] rounded-2xl ${bgClass} p-5 sm:p-5.5 flex flex-col justify-between text-left transition-transform duration-200 hover:-translate-y-0.5 group`}
		>
			{/* Top Row: Clean Frosted Icon + Status Dot */}
			<div className="flex items-center justify-between gap-2 mb-3">
				<div
					className="size-8 rounded-lg flex items-center justify-center bg-white/80 dark:bg-black/35 backdrop-blur-xs shadow-2xs shrink-0 transition-transform duration-300 group-hover:scale-105"
					style={{ color: dotColor }}
				>
					<HugeiconsIcon icon={IconComponent} strokeWidth={2} className="size-4" />
				</div>

				{/* Micro Status Dot */}
				<span
					className="size-2 rounded-full ring-4 ring-black/5 dark:ring-white/10 shrink-0"
					style={{ backgroundColor: dotColor }}
				/>
			</div>

			{/* Bottom Row: Crisp Headline & Copy (Zero Badges) */}
			<div>
				<h3 className="text-sm sm:text-base font-bold text-foreground font-heading tracking-tight leading-snug">
					{title}
				</h3>
				<p className="text-xs sm:text-[12.5px] text-muted-foreground font-normal mt-1.5 leading-relaxed line-clamp-2">
					{subtitle}
				</p>
			</div>
		</div>
	);
}

// ── Industries & Operational Node Tree Architecture ─────────────────
export function IndustriesSection() {
	return (
		<section
			id="industries"
			className="w-full border-t border-border/40 py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden scroll-mt-20"
		>
			<div className="mx-auto max-w-6xl xl:max-w-[1360px]">
				{/* ── Section Header ── */}
				<div className="text-center mb-12 sm:mb-16">
					<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
						Specialized Sectors
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-heading max-w-3xl mx-auto leading-tight mb-4">
						Precision operations built for high-stakes industries
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						With Aura, specialized domain workflows, enterprise compliance, and dedicated team governance are unified across every operational hub.
					</p>
				</div>

				{/* ── Root Node: Central Platform Command Core (Surface Green & Golden Pulse) ── */}
				<div className="flex flex-col items-center">
					<div className="group relative inline-flex items-center gap-3 rounded-xl bg-forest-surface text-white px-7 py-3 text-sm sm:text-base font-semibold shadow-sm select-none z-10 cursor-default border border-forest/40 hover:bg-forest transition-colors">
						<span className="size-2 rounded-full bg-primary animate-pulse" />
						<span className="font-heading">Aura Global Delivery Hub</span>
					</div>

					{/* ── Desktop SVG Tree: Root to Row 1 (Center 2 branches only) ── */}
					<div className="hidden lg:block w-full h-22 sm:h-24 relative -mt-0.5">
						<svg
							viewBox="0 0 1000 88"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-full stroke-border/80 overflow-visible"
							preserveAspectRatio="none"
						>
							{/* Center vertical stem from root node */}
							<path
								d="M 500 0 L 500 24"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>

							{/* Smooth curved bracket forking ONLY to center 2 cards (Col 2: X=375, Col 3: X=625) */}
							<path
								d="M 500 24 C 500 58, 375 52, 375 88"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							<path
								d="M 500 24 C 500 58, 625 52, 625 88"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						</svg>
					</div>

					{/* Mobile connector stem */}
					<div className="lg:hidden h-10 w-px bg-border/70 my-1.5" />
				</div>

				{/* ── Desktop View (Exact 4 -> 2 -> 1 Tree with Layered Stacks & Identical Card Sizing) ── */}
				<div className="hidden lg:flex flex-col">
					{/* ── Row 1: Exactly 4 Interactive Layered Card Stacks (16 Industries) ── */}
					<div className="relative pb-4">
						{/* Subtle horizontal connecting line passing behind cards */}
						<div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-border/50 -translate-y-1/2 pointer-events-none" />

						<div className="grid grid-cols-4 gap-5 relative z-10">
							{INDUSTRY_STACKS.map((stack, idx) => (
								<LayeredIndustryCardStack key={idx} stack={stack} />
							))}
						</div>
					</div>

					{/* ── Connector: Row 1 to Row 2 (Stems dropping under Col 2 and Col 3) ── */}
					<div className="grid grid-cols-4 gap-5 h-10 items-center">
						<div />
						{/* Vertical stem under Card 2 */}
						<div className="flex justify-center h-full">
							<div className="w-px h-full bg-border/80" />
						</div>
						{/* Vertical stem under Card 3 */}
						<div className="flex justify-center h-full">
							<div className="w-px h-full bg-border/80" />
						</div>
						<div />
					</div>

					{/* ── Row 2: Exactly 2 Execution Engine Cards (IDENTICAL size to Row 1) ── */}
					<div className="grid grid-cols-4 gap-5">
						<div />
						{/* Card 5: Dedicated Specialist Pods */}
						<FlatNodeCard
							title="Dedicated Specialist Pods"
							subtitle="Top 1% multilingual talent trained exclusively on your workflows and brand voice."
							icon={UserGroupIcon}
							bgClass="bg-[#FDF6E9] dark:bg-[#332512]"
							dotColor="#D97706"
						/>
						{/* Card 6: Calibrated QA & Governance */}
						<FlatNodeCard
							title="Calibrated QA & Governance"
							subtitle="100% scorecard auditing, weekly calibration sessions & real-time shift supervision."
							icon={CheckmarkBadge01Icon}
							bgClass="bg-[#EAF8F8] dark:bg-[#133033]"
							dotColor="#0891B2"
						/>
						<div />
					</div>

					{/* ── Connector: Row 2 to Row 3 (Two lines converging to center) ── */}
					<div className="w-full h-12 relative">
						<svg
							viewBox="0 0 1000 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-full stroke-border/80 overflow-visible"
							preserveAspectRatio="none"
						>
							{/* Curve from Col 2 (X=375) to Center (X=500) */}
							<path
								d="M 375 0 C 375 24, 500 24, 500 48"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							{/* Curve from Col 3 (X=625) to Center (X=500) */}
							<path
								d="M 625 0 C 625 24, 500 24, 500 48"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						</svg>
					</div>

					{/* ── Row 3: Exactly 1 Centered Terminal Card (EXACT SAME WIDTH as Row 1 and Row 2 cards!) ── */}
					<div className="flex justify-center">
						<div
							className="w-full"
							style={{ width: "calc((100% - 3.75rem) / 4)" }}
						>
							<FlatNodeCard
								title="99.8% SLA & 40% Cost Reduction"
								subtitle="Guaranteed enterprise performance backed by strict financial SLAs and measurable ROI."
								icon={ShieldCheckIcon}
								bgClass="bg-[#E6F7F0] dark:bg-[#153822]"
								dotColor="#059669"
							/>
						</div>
					</div>
				</div>

				{/* ── Mobile/Tablet Responsive Flow (< lg) ── */}
				<div className="lg:hidden flex flex-col items-center gap-3 pt-2">
					<p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-1">
						Specialized Sectors (Tap to cycle)
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md pb-2">
						{INDUSTRY_STACKS.map((stack, idx) => (
							<LayeredIndustryCardStack key={idx} stack={stack} />
						))}
					</div>

					{/* Connector */}
					<div className="h-6 w-px bg-border/70 my-1" />

					<p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-1">
						Execution Engine
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-md">
						<FlatNodeCard
							title="Dedicated Specialist Pods"
							subtitle="Top 1% multilingual talent trained exclusively on your brand."
							icon={UserGroupIcon}
							bgClass="bg-[#FDF6E9] dark:bg-[#332512]"
							dotColor="#D97706"
						/>
						<FlatNodeCard
							title="Calibrated QA & Governance"
							subtitle="100% scorecard auditing & calibrated shift supervision."
							icon={CheckmarkBadge01Icon}
							bgClass="bg-[#EAF8F8] dark:bg-[#133033]"
							dotColor="#0891B2"
						/>
					</div>

					{/* Connector */}
					<div className="h-6 w-px bg-border/70 my-1" />

					<p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-1">
						Enterprise Result
					</p>
					<div className="w-full max-w-md">
						<FlatNodeCard
							title="99.8% SLA & 40% Cost Reduction"
							subtitle="Guaranteed enterprise performance backed by strict financial SLAs."
							icon={ShieldCheckIcon}
							bgClass="bg-[#E6F7F0] dark:bg-[#153822]"
							dotColor="#059669"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default IndustriesSection;
