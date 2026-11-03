"use client";

import * as React from "react";
import Link from "next/link";
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowLeft01Icon,
	ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@workspace/ui/lib/utils";

// ── Carousel Service Data Interface ────────────────────────────────
export interface CarouselService {
	number: string;
	title: string;
	tag: string;
	description: string;
	image: string;
	link: string;
}

// ── Services Data (Enterprise BPO & Intelligent Operations) ────────
export const BPO_CAROUSEL_SERVICES: CarouselService[] = [
	{
		number: "01",
		title: "Customer Experience",
		tag: "24/7 Omnichannel Care • Voice, Chat & Email",
		description:
			"Tier 1–3 multilingual care specialists delivering personalized, empathetic interactions and consistent 98.4% CSAT across every touchpoint.",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
		link: "/contact",
	},
	{
		number: "02",
		title: "Lead Generation",
		tag: "Pipeline Acceleration • Dedicated SDR Pods",
		description:
			"High-impact outbound prospecting, qualified sales appointment booking, and multi-channel account mapping that scale executive revenue pipelines.",
		image:
			"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
		link: "/contact",
	},
	{
		number: "03",
		title: "Technical Support",
		tag: "ITIL Certified • Strict 45s SLA",
		description:
			"Certified tier-1 to tier-3 technical engineers resolving complex SaaS, cloud infrastructure, API diagnostics, and developer incident triage.",
		image:
			"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
		link: "/contact",
	},
	{
		number: "04",
		title: "Back-Office Operations",
		tag: "High Throughput • 99.9% Data Accuracy",
		description:
			"Scalable document verification, catalog governance, transaction auditing, and rapid structured data extraction at massive enterprise volumes.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
		link: "/contact",
	},
	{
		number: "05",
		title: "Finance & Specialized Operations",
		tag: "FinOps & Billing • PCI-DSS Compliance",
		description:
			"Accounts receivable reconciliation, invoice auditing, chargeback dispute arbitration, and claims management under rigorous enterprise compliance.",
		image:
			"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
		link: "/contact",
	},
	{
		number: "06",
		title: "HR & Business Support",
		tag: "Talent Ops • Executive Concierge & Payroll",
		description:
			"End-to-end recruitment screening, global talent onboarding coordination, payroll administration, and dedicated executive administrative support.",
		image:
			"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
		link: "/contact",
	},
	{
		number: "07",
		title: "Digital & Creative Services",
		tag: "Brand Production • UI/UX & Content Ops",
		description:
			"High-velocity creative production, digital asset management, responsive UI/UX design, motion graphics, and multi-channel content localization.",
		image:
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
		link: "/contact",
	},
];

type CarouselApi = UseEmblaCarouselType[1];

export function ServicesCarouselSection({
	services = BPO_CAROUSEL_SERVICES,
}: {
	services?: CarouselService[];
}) {
	const headerContainerRef = React.useRef<HTMLDivElement>(null);
	const [containerOffset, setContainerOffset] = React.useState<number>(0);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		containScroll: "trimSnaps",
		dragFree: false,
	});

	const [canScrollPrev, setCanScrollPrev] = React.useState(false);
	const [canScrollNext, setCanScrollNext] = React.useState(false);

	// Dynamically calculate the left container margin to perfectly align slide 0 with the grid
	React.useEffect(() => {
		const updateOffset = () => {
			if (headerContainerRef.current) {
				const rect = headerContainerRef.current.getBoundingClientRect();
				const style = window.getComputedStyle(headerContainerRef.current);
				const paddingLeft = parseFloat(style.paddingLeft) || 16;
				setContainerOffset(rect.left + paddingLeft);
			}
		};

		updateOffset();
		window.addEventListener("resize", updateOffset);
		return () => window.removeEventListener("resize", updateOffset);
	}, []);

	// Track scroll navigation availability
	const onSelect = React.useCallback((api: CarouselApi) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);

	React.useEffect(() => {
		if (!emblaApi) return;
		onSelect(emblaApi);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);

		if (containerOffset > 0) {
			emblaApi.reInit();
		}

		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi, onSelect, containerOffset]);

	const scrollPrev = React.useCallback(() => {
		emblaApi?.scrollPrev();
	}, [emblaApi]);

	const scrollNext = React.useCallback(() => {
		emblaApi?.scrollNext();
	}, [emblaApi]);

	return (
		<section
			id="services"
			className="w-full border-t border-border/40 py-20 sm:py-24 overflow-hidden scroll-mt-20"
		>
			{/* ── Top Header Section (Aligned to Site Container) ── */}
			<div
				ref={headerContainerRef}
				className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12"
			>
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
					<div className="max-w-2xl">
						{/* Category Kicker in Surface Green */}
						<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
							Our Services
						</span>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-heading leading-[1.15]">
							Services.
						</h2>
						<p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
							Comprehensive customer care, dedicated technical helpdesks, and high-precision back-office execution engineered for enterprise reliability.
						</p>
					</div>

					{/* Right Side Pill Button (matches Antigravity 'View blog' pill) */}
					<div className="hidden sm:block">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background px-5 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:border-foreground/30 active:translate-y-px"
						>
							View all services
						</Link>
					</div>
				</div>
			</div>

			{/* ── Full-Width Edge-to-Edge Carousel Viewport ── */}
			<div
				ref={emblaRef}
				className="w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
			>
				<div
					className="flex pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc(max(2rem,(100vw-1480px)/2+2rem))] pr-6 sm:pr-8 lg:pr-12"
					style={{
						paddingLeft: containerOffset > 0 ? `${containerOffset}px` : undefined,
						paddingRight: containerOffset > 0 ? `${containerOffset}px` : undefined,
					}}
				>
					{services.map((service, index) => {
						const isLast = index === services.length - 1;
						return (
							<div
								key={index}
								className="shrink-0 grow-0 basis-[84vw] sm:basis-[370px] md:basis-[400px] lg:basis-[420px] xl:basis-[440px] flex items-stretch pr-8 sm:pr-12 lg:pr-16 relative"
							>
								{/* ── Service Card: Completely Borderless, 100% Uniform Width & Height Across All Cards ── */}
								<div className="group flex flex-col justify-between flex-1 py-1 select-none">
									<div>
										{/* Uniform Aspect Service Image */}
										<div className="relative overflow-hidden rounded-2xl bg-muted aspect-square w-full mb-5 shadow-xs">
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img
												src={service.image}
												alt={service.title}
												loading={index < 3 ? "eager" : "lazy"}
												className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
											/>
										</div>

										{/* Large, Prominent Card Title */}
										<h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-heading leading-snug mb-2.5">
											{service.title}
										</h3>

										{/* Compact, Light Description */}
										<p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 mb-4">
											{service.description}
										</p>
									</div>

									{/* Bottom Tag & Minimal Link with Hover Underline */}
									<div className="pt-2">
										<div className="text-[11px] font-mono font-medium uppercase tracking-wider text-muted-foreground/80 mb-3">
											{service.tag}
										</div>

										<Link
											href={service.link}
											className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:underline underline-offset-4 decoration-foreground/60 transition-all duration-200"
										>
											<span>Explore service</span>
											<HugeiconsIcon
												icon={ArrowRight01Icon}
												strokeWidth={2}
												className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
											/>
										</Link>
									</div>
								</div>

								{/* ── Single Visible Separator between cards (Precisely Centered in Slide Gap) ── */}
								{!isLast && (
									<div
										aria-hidden="true"
										className="absolute right-4 sm:right-6 lg:right-8 top-1 bottom-1 w-px bg-border/60"
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>

			{/* ── Bottom Navigation Controls Pill (Aligned with Left Container Edge, matches reference) ── */}
			<div
				className="mt-8 sm:mt-10 flex items-center justify-between pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc(max(2rem,(100vw-1480px)/2+2rem))] pr-4 sm:px-6 lg:px-8"
				style={{
					paddingLeft: containerOffset > 0 ? `${containerOffset}px` : undefined,
				}}
			>
				{/* Compact [< >] Pill Button Container */}
				<div className="inline-flex items-center rounded-full border border-border/80 bg-background p-1 shadow-xs">
					<button
						type="button"
						onClick={scrollPrev}
						disabled={!canScrollPrev}
						aria-label="Previous service"
						className="flex size-8 sm:size-9 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-muted disabled:pointer-events-none disabled:opacity-25 cursor-pointer"
					>
						<HugeiconsIcon
							icon={ArrowLeft01Icon}
							strokeWidth={2}
							className="size-4"
						/>
					</button>
					<div className="h-4 w-px bg-border/60 mx-0.5" />
					<button
						type="button"
						onClick={scrollNext}
						disabled={!canScrollNext}
						aria-label="Next service"
						className="flex size-8 sm:size-9 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-muted disabled:pointer-events-none disabled:opacity-25 cursor-pointer"
					>
						<HugeiconsIcon
							icon={ArrowRight01Icon}
							strokeWidth={2}
							className="size-4"
						/>
					</button>
				</div>

				{/* Mobile-Only View All Services Link */}
				<div className="sm:hidden pr-4">
					<Link
						href="/contact"
						className="text-xs font-semibold text-foreground underline underline-offset-4"
					>
						View all
					</Link>
				</div>
			</div>
		</section>
	);
}

export default ServicesCarouselSection;
