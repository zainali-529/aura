"use client";

import Link from "next/link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const SERVICE_FAQS = [
	{
		value: "faq-1",
		question: "How quickly can a dedicated BPO pod go live?",
		answer:
			"Our standard launch window is 14 business days from scope sign-off. Days 1–3 cover workflow and backlog audits, days 4–8 handle candidate selection and SSO security setup, days 9–12 focus on SOP immersion and shadowed calibration, and day 14 marks full SLA production launch.",
	},
	{
		value: "faq-2",
		question: "How do your teams align with our internal operational workflows?",
		answer:
			"Our specialists seamlessly follow your documented standard operating procedures, custom escalation hierarchies, and quality scorecards within strictly controlled, audit-logged delivery environments — no disruptive process re-engineering required.",
	},
	{
		value: "faq-3",
		question: "What are your minimum seat commitments and contract flexibility?",
		answer:
			"Dedicated pods typically start at 3 FTE seats with transparent monthly retainers, while elastic multi-shift coverage can scale smoothly in increments of 5 to 50+ specialists for seasonal peaks, product launches, or incident surges.",
	},
	{
		value: "faq-4",
		question: "How are Quality Assurance (QA) and SLA compliance audited?",
		answer:
			"Every pod includes a dedicated Team Lead and QA Coach who audit sample tickets and call recordings weekly using your exact scorecard rubric. We hold weekly calibration sessions alongside your internal leads to guarantee 98%+ CSAT and strict response adherence.",
	},
	{
		value: "faq-5",
		question: "Can we combine multiple practices, such as Technical Support and Back-Office Ops?",
		answer:
			"Yes. Many enterprise partners run unified cross-functional hubs — for example, combining Tier-1/2 Technical Support with Back-Office KYC verification or Billing Operations under a single operational governance lead and consolidated SLA scorecard.",
	},
	{
		value: "faq-6",
		question: "What security certifications cover your workstations and staff?",
		answer:
			"Aura operates under audited SOC-2 Type II, ISO 27001, HIPAA, and PCI-DSS Level 1 security frameworks. All delivery centers enforce clean-desk policies, zero local storage restrictions, MFA/SSO enforcement, and full background screening.",
	},
];

export function ServiceFaqSection() {
	return (
		<section className="w-full py-20 sm:py-28 bg-muted/20 border-t border-border/40">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
					{/* Left Column: Title & Consultation Link */}
					<div className="lg:col-span-4">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
							Procurement &amp; Operations FAQ
						</span>
						<h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-foreground leading-[1.15] mb-4">
							Common questions from ops leaders.
						</h2>
						<p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
							Need custom seat pricing, compliance documentation, or a tailored workflow audit? Speak directly with our solutions leads.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary underline underline-offset-4 transition-colors"
						>
							<span>Schedule a technical scoping call</span>
							<HugeiconsIcon
								icon={ArrowRight01Icon}
								strokeWidth={2}
								className="size-4"
							/>
						</Link>
					</div>

					{/* Right Column: Clean Editorial Accordion */}
					<div className="lg:col-span-8">
						<Accordion className="border-t border-border/70">
							{SERVICE_FAQS.map((faq) => (
								<AccordionItem
									key={faq.value}
									value={faq.value}
									className="border-b border-border/70 py-2"
								>
									<AccordionTrigger className="py-4 text-left text-base sm:text-lg font-semibold font-heading text-foreground hover:no-underline hover:text-forest-surface dark:hover:text-primary transition-colors cursor-pointer">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 pr-6">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServiceFaqSection;
