import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

export const metadata = {
	title: "Services & Capabilities | Aura BPO",
	description:
		"Explore Aura's core customer experience, technical support, and back-office operations services.",
};

export default function ServicesPage() {
	return (
		<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
			<div className="max-w-3xl">
				<div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3.5 py-1 text-xs font-mono text-muted-foreground mb-6">
					<span className="size-2 rounded-full bg-primary" />
					<span>Dedicated Page Coming Soon</span>
				</div>

				<span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-mono mb-3 block">
					Our Capabilities
				</span>

				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-foreground leading-[1.12] mb-6">
					Enterprise BPO Services
				</h1>

				<p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
					From 24/7 omnichannel customer care and Tier-1/2 technical helpdesk to high-volume data verification and trust &amp; safety moderation.
				</p>

				<Link
					href="/"
					className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px"
				>
					<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} className="size-4" />
					<span>Back to Home</span>
				</Link>
			</div>
		</div>
	);
}
