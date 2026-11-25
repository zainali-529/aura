"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@workspace/ui/lib/utils";
import {
	BPO_SERVICES_CATALOG,
	type BpoService,
	type ServiceCategory,
} from "./services-data";

type FilterValue = "all" | ServiceCategory;

const FILTER_TABS: { value: FilterValue; label: string }[] = [
	{ value: "all", label: "All Practices (07)" },
	{ value: "front-office", label: "Front-Office & Growth" },
	{ value: "technical-data", label: "Technical & Data" },
	{ value: "corporate-creative", label: "Corporate & Creative" },
];

function FlagshipServiceCard({ service }: { service: BpoService }) {
	return (
		<article
			id={service.id}
			className="group scroll-mt-24 lg:col-span-3 grid grid-cols-1 lg:grid-cols-12 rounded-xl border border-border/75 bg-card overflow-hidden transition-colors hover:border-foreground/25"
		>
			{/* Left Photo Pane */}
			<div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-muted">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={service.image}
					alt={service.title}
					className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
				/>
			</div>

			{/* Right Specification & Scope Pane */}
			<div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
				<div>
					<div className="flex flex-wrap items-center justify-between gap-2 mb-3">
						<span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-forest-surface dark:text-primary">
							{service.number} / {service.categoryLabel}
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							{service.tag}
						</span>
					</div>

					<h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-foreground mb-3">
						{service.title}
					</h3>

					<p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
						{service.description}
					</p>

					{/* Structured 2x2 Deliverables Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 my-6 py-5 border-y border-border/60">
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
				</div>

				{/* Footer Spec Row */}
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div className="flex flex-wrap items-center gap-6 text-xs font-mono">
						<div>
							<span className="text-muted-foreground block uppercase tracking-wider text-[10px]">
								{service.metricLabel}
							</span>
							<span className="text-sm font-bold text-foreground">
								{service.metricValue}
							</span>
						</div>
						<div className="h-7 w-px bg-border/70 hidden sm:block" />
						<div>
							<span className="text-muted-foreground block uppercase tracking-wider text-[10px]">
								Coverage Standard
							</span>
							<span className="text-sm font-bold text-foreground">
								{service.slaSummary}
							</span>
						</div>
					</div>

					<Link
						href={service.link}
						className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px"
					>
						<span>Explore practice</span>
						<HugeiconsIcon
							icon={ArrowRight01Icon}
							strokeWidth={2}
							className="size-4"
						/>
					</Link>
				</div>
			</div>
		</article>
	);
}

function StandardServiceCard({ service }: { service: BpoService }) {
	return (
		<article
			id={service.id}
			className="group scroll-mt-24 flex flex-col rounded-xl border border-border/75 bg-card overflow-hidden transition-colors hover:border-foreground/25"
		>
			{/* Clean Cropped Image */}
			<div className="relative aspect-[16/10] w-full overflow-hidden bg-muted border-b border-border/50">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={service.image}
					alt={service.title}
					loading="lazy"
					className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
				/>
			</div>

			{/* Structured Body */}
			<div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
				<div>
					<span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-forest-surface dark:text-primary block mb-2">
						{service.number} / {service.categoryLabel}
					</span>

					<h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-foreground mb-2.5 leading-snug">
						{service.title}
					</h3>

					<p className="text-sm text-muted-foreground leading-relaxed mb-5">
						{service.description}
					</p>

					{/* Clean Deliverables List */}
					<ul className="space-y-2 border-t border-border/50 pt-4 mb-6 text-xs sm:text-[13px]">
						{service.deliverables.map((item) => (
							<li key={item} className="flex items-start gap-2.5">
								<HugeiconsIcon
									icon={Tick01Icon}
									strokeWidth={2.2}
									className="size-3.5 text-forest-surface dark:text-primary shrink-0 mt-0.5"
								/>
								<span className="text-foreground/85 leading-snug">{item}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Card Footer: Benchmark + Link */}
				<div className="pt-4 border-t border-border/60 mt-auto flex items-center justify-between gap-4">
					<div>
						<span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
							{service.metricLabel}
						</span>
						<span className="font-mono text-sm font-bold text-foreground">
							{service.metricValue}
						</span>
					</div>

					<Link
						href={service.link}
						className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary transition-colors"
					>
						<span>Explore scope</span>
						<HugeiconsIcon
							icon={ArrowRight01Icon}
							strokeWidth={2}
							className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
						/>
					</Link>
				</div>
			</div>
		</article>
	);
}

export function ServicesCatalogSection() {
	const [activeFilter, setActiveFilter] = React.useState<FilterValue>("all");

	const filteredServices = React.useMemo(() => {
		if (activeFilter === "all") return BPO_SERVICES_CATALOG;
		return BPO_SERVICES_CATALOG.filter((s) => s.category === activeFilter);
	}, [activeFilter]);

	const isShowingAll = activeFilter === "all";
	const flagshipService = isShowingAll ? filteredServices[0] : undefined;
	const gridServices = isShowingAll ? filteredServices.slice(1) : filteredServices;

	return (
		<section
			id="capabilities"
			className="w-full py-20 sm:py-28 bg-background scroll-mt-20"
		>
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				{/* ── Header + Architectural Underline Filter Bar ── */}
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-border/60 mb-10 sm:mb-12">
					<div className="max-w-2xl">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
							Core BPO Catalog
						</span>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-foreground leading-[1.15]">
							Seven practices. One unified standard.
						</h2>
					</div>

					{/* Architectural Underline Tabs */}
					<div
						role="tablist"
						aria-label="Filter BPO practices by category"
						className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border/40 lg:border-none"
					>
						{FILTER_TABS.map((tab) => {
							const isActive = activeFilter === tab.value;
							return (
								<button
									key={tab.value}
									role="tab"
									type="button"
									aria-selected={isActive}
									onClick={() => setActiveFilter(tab.value)}
									className={cn(
										"pb-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap",
										isActive
											? "border-foreground text-foreground font-semibold dark:border-primary dark:text-primary"
											: "border-transparent text-muted-foreground hover:text-foreground"
									)}
								>
									{tab.label}
								</button>
							);
						})}
					</div>
				</div>

				{/* ── Symmetrical Service Cards Grid ── */}
				<div
					className={cn(
						"grid gap-6 lg:gap-7",
						!isShowingAll && gridServices.length === 2
							? "grid-cols-1 md:grid-cols-2"
							: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
					)}
				>
					{flagshipService && <FlagshipServiceCard service={flagshipService} />}
					{gridServices.map((service) => (
						<StandardServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}

export default ServicesCatalogSection;
