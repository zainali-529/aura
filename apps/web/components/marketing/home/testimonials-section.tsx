"use client";

import * as React from "react";

// ── Testimonial Item Interface ─────────────────────────────────────
export interface Testimonial {
	id: string;
	quote: string;
	author: string;
	role: string;
	company: string;
	avatar: string;
}

// ── 12 Enterprise Customer Testimonials ────────────────────────────
// Row 1: High-Growth Fintech, SaaS & Global Brand Operators
export const TESTIMONIALS_ROW_1: Testimonial[] = [
	{
		id: "t-1",
		quote:
			"Aura scaled 45 dedicated fraud prevention specialists in under 12 days. Our first-contact resolution jumped to 98.2%, and our weekend ticket backlog was completely eliminated.",
		author: "Elena Rostova",
		role: "VP of Customer Operations",
		company: "PayPulse Global",
		avatar:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-2",
		quote:
			"Their ITIL Tier-2 engineering pod integrated natively into our Jira and Datadog streams. Critical infrastructure incident triage dropped from 22 minutes to 45 seconds flat.",
		author: "Marcus Vance",
		role: "Chief Technology Officer",
		company: "AeroCloud Systems",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-3",
		quote:
			"Handling peak holiday surges used to be our biggest vulnerability. With Aura's elastic omnichannel care pods, we absorbed a 340% volume surge without a single SLA breach.",
		author: "Sarah Jenkins",
		role: "Head of Global Care",
		company: "Nordic Brands Collective",
		avatar:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-4",
		quote:
			"In healthcare operations, compassionate care and strict HIPAA compliance are non-negotiable. Aura's specialists maintain a 99.4% QA score across 80,000+ monthly inquiries.",
		author: "Dr. Julian Becker",
		role: "VP of Patient Experience",
		company: "TeleHealth Direct",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-5",
		quote:
			"Aura's training pod mastered our entire 400-page SOP library in under 10 days. Their dedicated tier-1 specialists achieved a 96% first-contact resolution rate from their very first week live.",
		author: "David Chen",
		role: "Head of Revenue Operations",
		company: "HyperScale SaaS",
		avatar:
			"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-6",
		quote:
			"Managing 24/7 shipment exceptions across 14 time zones required true global delivery. Aura cut our dispatch communication delays by 55% while reducing operational overhead by 40%.",
		author: "Camila Morales",
		role: "Director of CX & Logistics",
		company: "FreightLink 3PL",
		avatar:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
	},
];

// Row 2: Banking, AI Platforms, RegTech & Enterprise Travel Operators
export const TESTIMONIALS_ROW_2: Testimonial[] = [
	{
		id: "t-7",
		quote:
			"Audit-readiness and strict PCI-DSS compliance were our top procurement hurdles. Aura passed our external SOC-2 Type II audit on day one and operates with flawless compliance governance.",
		author: "Alexander Wright",
		role: "Chief Operating Officer",
		company: "Vanguard Digital Bank",
		avatar:
			"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-8",
		quote:
			"Our user-generated content and seller queues run 24/7. Aura's moderation team keeps our fraudulent listing rate under 0.02% across 3 million active marketplace products.",
		author: "Sophia Al-Mansoor",
		role: "VP of Trust & Safety",
		company: "Bazaar Global Markets",
		avatar:
			"https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-9",
		quote:
			"Developer support demands deep domain fluency. Aura's engineers don't just answer tickets—they debug API webhooks and reproduce SDK edge cases directly with our core team.",
		author: "Liam O'Connor",
		role: "Head of Customer Engineering",
		company: "CloudScale Software",
		avatar:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-10",
		quote:
			"Aura's HR operations and talent pods reduced our back-office onboarding cycle from 3 weeks to 4 business days. The transparency of their real-time telemetry dashboards is unrivaled.",
		author: "Rachel Zhang",
		role: "VP of People & Operations",
		company: "OmniCare Health",
		avatar:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-11",
		quote:
			"When flights get grounded, every second counts. Aura's emergency rebooking pod handled 12,000 passenger re-routes during recent winter storms with an average hold time under 30 seconds.",
		author: "Henrik Lindqvist",
		role: "Global CX Director",
		company: "Krono Mobility & Travel",
		avatar:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
	},
	{
		id: "t-12",
		quote:
			"From live chat conversion to VIP customer retention, Aura operates as a seamless extension of our executive team. Our customer lifetime value has surged 28% year-over-year.",
		author: "Maya Patel",
		role: "Chief Marketing Officer",
		company: "Direct Brands Collective",
		avatar:
			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200&q=80",
	},
];

// ── Single Testimonial Card Component ──────────────────────────────
// Requirements:
// - Background: matches Logo Cloud tiles (`bg-muted`)
// - Zero border, zero box shadow
// - Rounded corners, clean typography, double quotation mark in Champagne Gold (`text-primary`)
function TestimonialCard({ item }: { item: Testimonial }) {
	return (
		<div className="w-[360px] sm:w-[410px] shrink-0 rounded-2xl sm:rounded-3xl bg-muted p-6 sm:p-7 flex flex-col justify-between text-left select-none transition-colors duration-300 hover:bg-muted/80">
			<div>
				{/* Stylized Double Quotation Mark (Champagne Gold --primary) */}
				<svg
					className="size-7 text-primary shrink-0 mb-4"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
				</svg>

				{/* Testimonial Quote */}
				<p className="text-sm sm:text-[14.5px] leading-relaxed text-foreground/90 font-normal mb-6">
					&ldquo;{item.quote}&rdquo;
				</p>
			</div>

			{/* Author Row: Avatar + Name + Role/Company */}
			<div className="flex items-center gap-3.5 pt-2">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={item.avatar}
					alt={item.author}
					className="size-10 sm:size-11 rounded-full object-cover shrink-0 ring-2 ring-white/80 dark:ring-white/10"
					loading="lazy"
				/>
				<div className="min-w-0 flex-1">
					<h4 className="text-sm sm:text-base font-bold text-foreground font-heading tracking-tight leading-snug truncate">
						{item.author}
					</h4>
					<p className="text-xs text-muted-foreground truncate">
						{item.role} · <span className="text-foreground/80 font-medium">{item.company}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

// ── Main Testimonials Section with Alternate Smooth Marquee ────────
export function TestimonialsSection() {
	// 4x repeating array guarantees seamless 100% gapless loop even on 30-inch 4K/5K displays (5,000px+ half-track)
	const row1Repeated = React.useMemo(
		() => [
			...TESTIMONIALS_ROW_1,
			...TESTIMONIALS_ROW_1,
			...TESTIMONIALS_ROW_1,
			...TESTIMONIALS_ROW_1,
		],
		[]
	);
	const row2Repeated = React.useMemo(
		() => [
			...TESTIMONIALS_ROW_2,
			...TESTIMONIALS_ROW_2,
			...TESTIMONIALS_ROW_2,
			...TESTIMONIALS_ROW_2,
		],
		[]
	);

	return (
		<section
			id="testimonials"
			className="w-full py-24 sm:py-28 bg-background relative overflow-hidden scroll-mt-20 border-t border-border/40"
		>
			{/* ── Seamless Marquee Keyframes & Hover Pause CSS ── */}
			<style>{`
				@keyframes marquee-left {
					0% { transform: translateX(0%); }
					100% { transform: translateX(-50%); }
				}
				@keyframes marquee-right {
					0% { transform: translateX(-50%); }
					100% { transform: translateX(0%); }
				}
				.animate-track-left {
					display: flex;
					width: max-content;
					animation: marquee-left 68s linear infinite;
					will-change: transform;
				}
				.animate-track-right {
					display: flex;
					width: max-content;
					animation: marquee-right 68s linear infinite;
					will-change: transform;
				}
				.animate-track-left:hover,
				.animate-track-right:hover {
					animation-play-state: paused;
				}
			`}</style>

			{/* ── Section Header (Dribbble clean luxury typography) ── */}
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center mb-14 sm:mb-18">
				<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
					Client Proof &amp; Reviews
				</span>
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-heading max-w-3xl mx-auto leading-tight mb-4">
					Words of praise from others about our presence.
				</h2>
				<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
					Discover how high-growth tech platforms and global brands scale operations, eliminate SLA breaches, and elevate customer satisfaction with Aura.
				</p>
			</div>

			{/* ── Full-Width Edge-to-Edge Marquee Container ── */}
			<div className="relative w-full overflow-hidden">
				{/* Left Edge Soft Gradient Fade Mask */}
				<div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-background to-transparent z-20" />

				{/* Right Edge Soft Gradient Fade Mask */}
				<div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-background to-transparent z-20" />

				<div className="flex flex-col gap-5 sm:gap-6">
					{/* ── Row 1: Sliding Left (Smooth Infinite Head-to-Tail Loop) ── */}
					<div className="overflow-hidden w-full">
						<div className="animate-track-left gap-5 sm:gap-6">
							{/* Track Part 1 */}
							<div className="flex gap-5 sm:gap-6 shrink-0">
								{row1Repeated.map((item, idx) => (
									<TestimonialCard key={`r1-p1-${item.id}-${idx}`} item={item} />
								))}
							</div>
							{/* Track Part 2 (Identical clone for seamless 0% to -50% loop) */}
							<div className="flex gap-5 sm:gap-6 shrink-0" aria-hidden="true">
								{row1Repeated.map((item, idx) => (
									<TestimonialCard key={`r1-p2-${item.id}-${idx}`} item={item} />
								))}
							</div>
						</div>
					</div>

					{/* ── Row 2: Sliding Right (Alternate Direction Smooth Infinite Loop) ── */}
					<div className="overflow-hidden w-full">
						<div className="animate-track-right gap-5 sm:gap-6">
							{/* Track Part 1 */}
							<div className="flex gap-5 sm:gap-6 shrink-0">
								{row2Repeated.map((item, idx) => (
									<TestimonialCard key={`r2-p1-${item.id}-${idx}`} item={item} />
								))}
							</div>
							{/* Track Part 2 (Identical clone for seamless -50% to 0% loop) */}
							<div className="flex gap-5 sm:gap-6 shrink-0" aria-hidden="true">
								{row2Repeated.map((item, idx) => (
									<TestimonialCard key={`r2-p2-${item.id}-${idx}`} item={item} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TestimonialsSection;
