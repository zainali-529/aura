import { PlannedPageShell } from "@/components/marketing/layout/planned-page-shell";

export const metadata = {
	title: "Careers | Aura BPO",
	description:
		"Join Aura's global operations teams across customer experience, technical support, QA governance, and delivery management.",
};

export default function CareersPage() {
	return (
		<PlannedPageShell
			eyebrow="Global Talent"
			title="Build your career at the forefront of customer operations."
			description="Aura invests in long-term operational specialists, QA coaches, and multilingual pod leads across our New York, London, Singapore, and Manila hubs."
			statusNote="Our dedicated Talent & Careers portal is coming soon — submit your inquiry directly to connect with our hiring leads."
		/>
	);
}
