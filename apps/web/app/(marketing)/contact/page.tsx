import { Suspense } from "react";
import {
	ContactFormSection,
	ContactHubsSection,
} from "@/components/marketing/contact";

export const metadata = {
	title: "Contact Aura Operations | Scope a Dedicated BPO Pod",
	description:
		"Book an executive briefing, scope dedicated customer care or technical pods, or apply to join Aura's global delivery teams.",
};

export default function ContactPage() {
	return (
		<div className="flex flex-col w-full overflow-hidden">
			{/* Section 1: Multi-Intent Scoping Form & SLA Process */}
			<Suspense
				fallback={
					<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8 py-20 text-sm font-mono text-muted-foreground">
						Loading contact workspace...
					</div>
				}
			>
				<ContactFormSection />
			</Suspense>

			{/* Section 2: 4-Hub Follow-the-Sun Delivery Footprint */}
			<ContactHubsSection />
		</div>
	);
}
