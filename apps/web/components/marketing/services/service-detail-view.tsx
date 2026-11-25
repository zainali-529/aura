"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowLeft01Icon,
	ArrowRight01Icon,
	Tick01Icon,
} from "@hugeicons/core-free-icons";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { CtaSection } from "@/components/marketing/home/cta-section";
import type { BpoService } from "./services-data";

interface ServiceDetailViewProps {
	service: BpoService;
	prevService: BpoService;
	nextService: BpoService;
}

export function ServiceDetailView({
	service,
	prevService,
	nextService,
}: ServiceDetailViewProps) {
	return (
		<div className="flex flex-col w-full overflow-hidden">
			{/* ── 1. Breadcrumb + Architectural Editorial Service Hero ── */}
			<section className="w-full bg-background pt-10 sm:pt-14 pb-16 sm:pb-22 border-b border-border/60">
				<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
					{/* Clean Typographic Breadcrumb */}
					<nav
						aria-label="Breadcrumb"
						className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-8 sm:mb-10"
					>
						<Link
							href="/services"
							className="hover:text-foreground transition-colors"
						>
							Services
						</Link>
						<span aria-hidden="true">/</span>
						<span className="text-foreground font-semibold">
							{service.number} {service.title}
						</span>
					</nav>

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
						{/* Left Column: Title, Narrative, Deliverables & Actions */}
						<div className="lg:col-span-7 flex flex-col items-start">
							<span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary mb-3 block">
								{service.number} / {service.categoryLabel}
							</span>

							<h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold font-heading tracking-tight text-foreground leading-[1.08] mb-5">
								{service.detailHeadline}
							</h1>

							<p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-7 font-normal">
								{service.longDescription}
							</p>

							{/* Core Scope Checklist */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 w-full max-w-xl mb-8 py-5 border-y border-border/60">
								{service.deliverables.map((item) => (
									<div key={item} className="flex items-start gap-2.5 text-sm">
										<HugeiconsIcon
											icon={Tick01Icon}
											strokeWidth={2.2}
											className="size-4 text-forest-surface dark:text-primary shrink-0 mt-0.5"
										/>
										<span className="text-foreground/90 font-medium leading-snug">
											{item}
										</span>
									</div>
								))}
							</div>

							<div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
								<Link
									href={service.contactHref}
									className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px"
								>
									<span>Scope {service.title} Pod</span>
									<HugeiconsIcon
										icon={ArrowRight01Icon}
										strokeWidth={2}
										className="size-4"
									/>
								</Link>
								<Link
									href="/services"
									className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm sm:text-base font-medium text-foreground transition-colors hover:bg-muted active:translate-y-px"
								>
									View All Services
								</Link>
							</div>
						</div>

						{/* Right Column: Clean Photography + Integrated Spec Ledger */}
						<div className="lg:col-span-5 w-full">
							<div className="rounded-xl overflow-hidden border border-border/75 bg-card">
								<div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={service.image}
										alt={service.title}
										className="h-full w-full object-cover object-center"
									/>
								</div>

								{/* Integrated Dark Forest Spec Strip */}
								<div className="grid grid-cols-3 bg-forest dark:bg-forest-surface/75 text-white divide-x divide-white/12 border-t border-white/10">
									<div className="p-4 sm:p-5">
										<span className="block font-mono text-[10px] uppercase tracking-wider text-forest-muted mb-1">
											{service.metricLabel}
										</span>
										<span className="block font-heading text-lg sm:text-xl font-bold text-primary">
											{service.metricValue}
										</span>
									</div>
									<div className="p-4 sm:p-5">
										<span className="block font-mono text-[10px] uppercase tracking-wider text-forest-muted mb-1">
											Go-Live
										</span>
										<span className="block font-heading text-lg sm:text-xl font-bold text-white">
											{service.deploymentWindow}
										</span>
									</div>
									<div className="p-4 sm:p-5">
										<span className="block font-mono text-[10px] uppercase tracking-wider text-forest-muted mb-1">
											Coverage
										</span>
										<span className="block font-heading text-sm sm:text-base font-bold text-white leading-tight pt-0.5">
											{service.coverageWindow}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── 2. Channel & Workflow Execution Matrix ── */}
			<section className="w-full py-20 sm:py-24 bg-background">
				<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
					<div className="max-w-2xl mb-12 sm:mb-14">
						<span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary mb-3 block">
							Execution Scope
						</span>
						<h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-foreground leading-[1.15]">
							How your {service.title.toLowerCase()} team operates daily.
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 border border-border/75 rounded-xl overflow-hidden bg-card">
						{service.workflows.map((wf, idx) => (
							<div
								key={wf.number}
								className={`p-7 sm:p-9 flex flex-col justify-between ${
									idx % 2 === 0 ? "md:border-r border-border/75" : ""
								} ${idx < 2 ? "border-b border-border/75" : ""} ${
									idx === 2 ? "border-b md:border-b-0 border-border/75" : ""
								}`}
							>
								<div>
									<div className="flex items-center justify-between gap-4 mb-5">
										<span className="font-mono text-xs font-bold tracking-widest text-forest-surface dark:text-primary">
											{wf.number} // WORKFLOW
										</span>
										<span className="font-mono text-xs font-semibold text-foreground/80">
											{wf.slaTarget}
										</span>
									</div>

									<h3 className="text-xl font-bold font-heading text-foreground tracking-tight mb-2.5">
										{wf.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{wf.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── 3. Dark Forest Pod Blueprint & Measurable Impact Comparison ── */}
			<section className="w-full py-20 sm:py-26 bg-forest dark:bg-[#0D2115] text-white border-t border-white/10">
				<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
					{/* Dedicated Pod Team Roles */}
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
						<div className="max-w-2xl">
							<span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
								Dedicated Pod Architecture
							</span>
							<h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-white leading-[1.15]">
								Structured accountability inside every seat.
							</h2>
						</div>
						<p className="text-sm sm:text-base text-forest-muted max-w-md leading-relaxed">
							You don&apos;t just receive individual agents — every deployment carries embedded QA and floor leadership.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 border border-white/12 rounded-xl divide-y lg:divide-y-0 lg:divide-x divide-white/12 bg-white/[0.015] mb-16 sm:mb-20">
						{service.podRoles.map((role) => (
							<div key={role.code} className="p-7 sm:p-8 flex flex-col justify-between">
								<div>
									<span className="font-mono text-xs font-bold tracking-widest text-primary block mb-4">
										{role.code}
									</span>
									<h3 className="text-xl font-bold font-heading text-white mb-2.5">
										{role.role}
									</h3>
									<p className="text-sm text-forest-muted leading-relaxed">
										{role.focus}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Operational Benchmark Comparison Ledger */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4 border-t border-white/10">
						<div className="lg:col-span-4 pt-4">
							<span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-2.5">
								Operational Delta
							</span>
							<h3 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-snug">
								Measured baseline vs. Aura deployment.
							</h3>
						</div>

						<div className="lg:col-span-8 divide-y divide-white/12 border-t lg:border-t-0 border-white/12">
							{service.impactMetrics.map((metric) => (
								<div
									key={metric.label}
									className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-baseline"
								>
									<span className="text-sm font-medium text-white">
										{metric.label}
									</span>
									<span className="font-mono text-xs sm:text-sm text-forest-muted">
										Baseline: {metric.baseline}
									</span>
									<span className="font-mono text-sm font-bold text-primary sm:text-right">
										{metric.withAura}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── 4. Practice-Specific FAQ & Prev/Next Practice Navigator ── */}
			<section className="w-full py-20 sm:py-24 bg-background border-t border-border/50">
				<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
						<div className="lg:col-span-4">
							<span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary mb-3 block">
								Practice FAQ
							</span>
							<h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-foreground leading-[1.15] mb-4">
								{service.title} questions answered.
							</h2>
							<Link
								href={service.contactHref}
								className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary underline underline-offset-4 transition-colors"
							>
								<span>Request custom pod pricing</span>
								<HugeiconsIcon
									icon={ArrowRight01Icon}
									strokeWidth={2}
									className="size-4"
								/>
							</Link>
						</div>

						<div className="lg:col-span-8">
							<Accordion className="border-t border-border/70">
								{service.faqs.map((faq, idx) => (
									<AccordionItem
										key={idx}
										value={`service-faq-${idx}`}
										className="border-b border-border/70 py-1.5"
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

					{/* Previous / Next Practice Switcher Strip */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border/60">
						<Link
							href={prevService.link}
							className="group flex items-center justify-between rounded-xl border border-border/70 bg-card p-5 sm:p-6 transition-colors hover:border-foreground/30"
						>
							<div>
								<span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1">
									&larr; Previous Practice
								</span>
								<span className="text-base sm:text-lg font-bold font-heading text-foreground">
									{prevService.number} {prevService.title}
								</span>
							</div>
							<HugeiconsIcon
								icon={ArrowLeft01Icon}
								strokeWidth={2}
								className="size-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-x-1 transition-all"
							/>
						</Link>

						<Link
							href={nextService.link}
							className="group flex items-center justify-between rounded-xl border border-border/70 bg-card p-5 sm:p-6 text-left transition-colors hover:border-foreground/30"
						>
							<div>
								<span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block mb-1">
									Next Practice &rarr;
								</span>
								<span className="text-base sm:text-lg font-bold font-heading text-foreground">
									{nextService.number} {nextService.title}
								</span>
							</div>
							<HugeiconsIcon
								icon={ArrowRight01Icon}
								strokeWidth={2}
								className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
							/>
						</Link>
					</div>
				</div>
			</section>

			{/* ── 5. Closing Enterprise Action Banner ── */}
			<CtaSection />
		</div>
	);
}

export default ServiceDetailView;
