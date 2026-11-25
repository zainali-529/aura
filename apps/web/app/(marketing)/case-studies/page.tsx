import { PlannedPageShell } from "@/components/marketing/layout/planned-page-shell";

export const metadata = {
	title: "Case Studies & Benchmarks | Aura BPO",
	description:
		"Measured SLA compliance, first-contact resolution gains, and cost efficiency outcomes across Aura enterprise deployments.",
};

export default function CaseStudiesPage() {
	return (
		<PlannedPageShell
			eyebrow="Verified Outcomes"
			title="Real operational impact measured by CSAT, SLA adherence, and cost efficiency."
			description="Detailed client deployment studies documenting 98.4% CSAT scores, 45-second technical triage targets, and rapid multi-region pod launches."
			statusNote="Full interactive case study breakdowns will be published here — contact our team for redacted enterprise references."
		/>
	);
}
