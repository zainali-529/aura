import { HeroSection } from "@/components/marketing/home/hero-section";
import { LogoCloudSection } from "@/components/marketing/home/logo-cloud-section";
import { AboutSection } from "@/components/marketing/home/about-section";
import { ServicesCarouselSection } from "@/components/marketing/home/services-carousel-section";
import { HowItWorksSection } from "@/components/marketing/home/how-it-works-section";
import { IndustriesSection } from "@/components/marketing/home/industries-section";
import { EngagementModelsSection } from "@/components/marketing/home/engagement-models-section";
import { TeamSection } from "@/components/marketing/home/team-section";
import { TestimonialsSection } from "@/components/marketing/home/testimonials-section";
import { CtaSection } from "@/components/marketing/home/cta-section";
// import { ServicesSection } from "@/components/marketing/home/services-section";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			{/* Section 1: Hero */}
			<HeroSection />

			{/* Section 2: Logo Cloud (Trusted by teams & companies) */}
			<LogoCloudSection />

			{/* Section 3: About Us (Company Narrative, Value Pillars & Global Talent) */}
			<AboutSection />

			{/* Section 4: Services Carousel Slider (Active) */}
			<ServicesCarouselSection />

			{/* Section 5: How It Works (Dark On-Scroll Expanding Section) */}
			<HowItWorksSection />

			{/* Section 6: Industries Node Tree Architecture */}
			<IndustriesSection />

			{/* Section 7: Engagement Models (Edge-to-Edge Dark Hairline Grid) */}
			<EngagementModelsSection />

			{/* Section 8: Operations Leadership & Talent */}
			<TeamSection />

			{/* Section 9: Words of Praise - Infinite Dual-Row Marquee */}
			<TestimonialsSection />

			{/* Section 10: Final Enterprise Action Card */}
			<CtaSection />

			{/* Section (Hidden / Preserved for future reference): Previous Grid Bevel Cards */}
			{/* <ServicesSection /> */}
		</div>
	);
}
