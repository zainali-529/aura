"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	CustomerSupportIcon,
	ComputerSettingsIcon,
	Database01Icon,
	ShieldCheckIcon,
	Target02Icon,
	Invoice01Icon,
	ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

type ServiceItem = {
	title: string;
	tag: string;
	metric: string;
	icon: typeof CustomerSupportIcon;
	description: string;
	highlights: string[];
	href: string;
};

const BPO_SERVICES: ServiceItem[] = [
	{
		title: "Omnichannel Customer Support",
		tag: "24/7 Global Delivery",
		metric: "98.4% CSAT",
		icon: CustomerSupportIcon,
		description:
			"Seamless, multilingual customer care across phone, live chat, email, and social messaging with industry-leading first-contact resolution rates.",
		highlights: [
			"Inbound & Outbound Voice",
			"Live Chat & Messaging",
			"Tiered Helpdesk & CRM",
			"Multilingual Agents (12+)",
		],
		href: "/services#customer-support",
	},
	{
		title: "Technical Support & IT Helpdesk",
		tag: "Tier 1 to Tier 3 ITIL",
		metric: "< 45s SLA",
		icon: ComputerSettingsIcon,
		description:
			"Certified technical specialists resolving software, hardware, infrastructure, and SaaS platform issues under strict enterprise resolution SLAs.",
		highlights: [
			"SaaS & Product Troubleshooting",
			"IT Service Desk & Escalations",
			"Bug Reproduction & Triage",
			"API & Network Inquiries",
		],
		href: "/services#technical-support",
	},
	{
		title: "Back-Office & Data Operations",
		tag: "99.9% Precision",
		metric: "100k+ Ops / Day",
		icon: Database01Icon,
		description:
			"High-volume transaction management, catalog curation, document indexing, and data enrichment to streamline your core business workflows.",
		highlights: [
			"Document & Order Processing",
			"Data Extraction & Cleansing",
			"Inventory & Catalog Updates",
			"OCR & Digital Transcription",
		],
		href: "/services#back-office",
	},
	{
		title: "Trust, Safety & Moderation",
		tag: "Compliance Guarded",
		metric: "24/7 Real-Time",
		icon: ShieldCheckIcon,
		description:
			"Protect brand integrity and community trust with continuous real-time moderation of user-generated content, KYC verification, and fraud screening.",
		highlights: [
			"UGC & Video Moderation",
			"KYC & Identity Verification",
			"Anti-Fraud & Risk Screening",
			"Policy Compliance Audits",
		],
		href: "/services#trust-safety",
	},
	{
		title: "Outbound Sales & Telemarketing",
		tag: "Revenue Acceleration",
		metric: "3.2x Pipeline",
		icon: Target02Icon,
		description:
			"High-performing SDR teams executing targeted outbound outreach, executive appointment booking, lead qualification, and customer re-engagement.",
		highlights: [
			"B2B / B2C Outbound Dialing",
			"Lead Scoring & Qualification",
			"Executive Meeting Booking",
			"Win-Back & Retention Calls",
		],
		href: "/services#outbound-sales",
	},
	{
		title: "Billing, Claims & Finance Ops",
		tag: "Audited Financial Flows",
		metric: "99.8% Accuracy",
		icon: Invoice01Icon,
		description:
			"Accurate end-to-end finance back-office support including invoice generation, accounts receivable, insurance claims auditing, and dispute handling.",
		highlights: [
			"Invoicing & Accounts Receivable",
			"Insurance & Healthcare Claims",
			"Chargeback & Dispute Handling",
			"Payment Reconciliation",
		],
		href: "/services#financial-operations",
	},
];

export function ServicesSection() {
	return (
		<section className="w-full px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{/* ── Section Header ── */}
				<div className="flex flex-col items-center text-center mb-14 lg:mb-18">
					<h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
						Engineered for scale. Delivered with{" "}
						<span className="text-primary">uncompromising precision.</span>
					</h2>

					<p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
						From 24/7 omnichannel customer care to mission-critical back-office workflows,
						Aura deploys dedicated, fully managed teams customized to your exact operational standards.
					</p>
				</div>

				{/* ── 6 Service Cards Grid ── */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{BPO_SERVICES.map((service, index) => (
						<div
							key={index}
							className="group relative flex flex-col justify-between rounded-2xl bg-card hover:bg-gradient-card bevel-card p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5"
						>
							<div>
								{/* Card Header: Icon + Category Tag */}
								<div className="flex items-center justify-between gap-3 mb-6">
									<div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
										<HugeiconsIcon icon={service.icon} strokeWidth={2} className="size-6" />
									</div>
									<span className="rounded-full bg-muted/60 px-3 py-1 text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
										{service.tag}
									</span>
								</div>

								{/* Title & Description */}
								<h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary mb-3">
									{service.title}
								</h3>
								<p className="text-sm leading-relaxed text-muted-foreground mb-6">
									{service.description}
								</p>

								{/* Feature Highlight Pills */}
								<div className="flex flex-wrap gap-1.5 mb-8">
									{service.highlights.map((highlight, hIdx) => (
										<span
											key={hIdx}
											className="inline-flex items-center rounded-md bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
										>
											{highlight}
										</span>
									))}
								</div>
							</div>

							{/* Card Footer: Metric & Explore Action */}
							<div className="flex items-center justify-between border-t border-border/40 pt-4 mt-auto">
								<div className="flex flex-col">
									<span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
										Benchmark
									</span>
									<span className="font-mono text-xs font-bold text-primary">
										{service.metric}
									</span>
								</div>

								<Link
									href={service.href}
									className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors group-hover:text-primary"
								>
									Explore Service
									<HugeiconsIcon
										icon={ArrowRight01Icon}
										strokeWidth={2}
										className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
