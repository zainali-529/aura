import {
	AboutHeroSection,
	AboutClientsSection,
	AboutMissionSection,
	AboutMetricsSection,
	AboutScanningSection,
	AboutPrinciplesSection,
	AboutHeroLegacy,
} from "@/components/marketing/about";
import { TeamSection } from "@/components/marketing/home/team-section";
import { TestimonialsSection } from "@/components/marketing/home/testimonials-section";
import { CtaSection } from "@/components/marketing/home/cta-section";

export const metadata = {
	title: "About Us | Aura Operations & Finance",
	description:
		"Discover how Aura redefines customer care, financial operations, and enterprise scale through human expertise and modern technology.",
};

export default function AboutPage() {
	return (
		<div className="flex flex-col w-full overflow-hidden">
			{/* Section 1: Modern Dribbble Hero Section */}
			<AboutHeroSection />

			{/* Section 2: Building Trust With Global Clients */}
			<AboutClientsSection />

			{/* Section 3: Core Mission & App Transaction Showcase */}
			<AboutMissionSection />

			{/* Section 4: Powering Growth Metrics Grid (150k+, $2B+, 98%, 100+) */}
			<AboutMetricsSection />

			{/* Section 5: Intelligent Transaction Scanning Radar */}
			<AboutScanningSection />

			{/* Section 6: Guided by Principles, Driven by Innovation */}
			<AboutPrinciplesSection />

			{/* Section 7: Operations Leadership & Talent (Reused Component) */}
			<TeamSection />

			{/* Section 8: Words of Praise - Infinite Dual-Row Testimonials Marquee (Reused Component) */}
			<TestimonialsSection />

			{/* Section 9: Closing Enterprise Action Card (Reused Component) */}
			<CtaSection />

			{/* 
				Legacy Hero & Proof Strip Section is preserved in @/components/marketing/about/about-hero-legacy.tsx
				Uncomment below if you ever wish to inspect or switch back to the previous version:
				<AboutHeroLegacy />
			*/}
		</div>
	);
}
