import { PlannedPageShell } from "@/components/marketing/layout/planned-page-shell";

export const metadata = {
	title: "Industries We Serve | Aura BPO",
	description:
		"Specialized BPO practices tailored for Fintech, Healthcare, E-Commerce, and Enterprise SaaS operations.",
};

export default function IndustriesPage() {
	return (
		<PlannedPageShell
			eyebrow="Specialized Sectors"
			title="Precision operations built for regulated and high-growth industries."
			description="Explore domain-trained teams calibrated for Fintech, Healthcare, Global E-Commerce, and SaaS customer support and back-office compliance."
			statusNote="Dedicated interactive industry blueprints are scheduled next — explore sector overviews on our Home page or request a sector brief."
			highlights={[
				{
					label: "Fintech & Banking",
					detail: "PCI-DSS compliant dispute arbitration, KYC audits, and VIP account care.",
				},
				{
					label: "Healthcare & MedTech",
					detail: "HIPAA-governed patient scheduling, prior authorizations, and claims review.",
				},
				{
					label: "SaaS & E-Commerce",
					detail: "Tier 1–3 API troubleshooting and peak holiday omnichannel surge coverage.",
				},
			]}
		/>
	);
}
