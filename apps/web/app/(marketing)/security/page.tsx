import { PlannedPageShell } from "@/components/marketing/layout/planned-page-shell";

export const metadata = {
	title: "Security & Compliance | Aura BPO",
	description:
		"SOC-2 Type II, ISO 27001, HIPAA, and PCI-DSS Level 1 security governance across Aura's global delivery hubs.",
};

export default function SecurityPage() {
	return (
		<PlannedPageShell
			eyebrow="Trust & Governance"
			title="Enterprise security architecture across every facility and endpoint."
			description="Audited SOC-2 Type II, HIPAA, ISO 27001, and PCI-DSS Level 1 protections engineered to satisfy strict enterprise procurement requirements."
			statusNote="Request our full compliance packet and penetration audit summary via the briefing form."
		/>
	);
}
