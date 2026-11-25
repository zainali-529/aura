import {
	ServicesHeroSection,
	ServicesCatalogSection,
	ServiceDeliverySection,
	ServiceDeploymentSection,
	ServiceFaqSection,
} from "@/components/marketing/services";
import { CtaSection } from "@/components/marketing/home/cta-section";

export const metadata = {
	title: "Services & Capabilities | Aura BPO",
	description:
		"Explore Aura's seven dedicated BPO practices: Customer Experience, Lead Generation, Technical Support, Back-Office Operations, Finance, HR Support, and Digital Creative.",
};

export default function ServicesPage() {
	return (
		<div className="flex flex-col w-full overflow-hidden">
			{/* Section 1: Architectural Editorial Hero & Operations Mosaic */}
			<ServicesHeroSection />

			{/* Section 2: Filterable 7-Practice Catalog (Featured Card + Symmetrical Grid) */}
			<ServicesCatalogSection />

			{/* Section 3: Dark Forest Enterprise Operational Governance */}
			<ServiceDeliverySection />

			{/* Section 4: 14-Day Launch Cadence */}
			<ServiceDeploymentSection />

			{/* Section 5: Procurement & Operations FAQ */}
			<ServiceFaqSection />

			{/* Section 6: Closing Enterprise Action Card */}
			<CtaSection />
		</div>
	);
}
