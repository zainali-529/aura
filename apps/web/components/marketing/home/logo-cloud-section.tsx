import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import {
	Logo01,
	Logo02,
	Logo03,
	Logo04,
	Logo05,
	Logo06,
	Logo07,
	Logo08,
	Logo09,
} from "./logo-cloud-logos";

const logos = [
	Logo01,
	Logo02,
	Logo03,
	Logo04,
	Logo05,
	Logo06,
	Logo07,
	Logo08,
	Logo09,
];

export function LogoCloudSection() {
	return (
		<section id="clients" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-20">
			<div className="mx-auto grid max-w-7xl xl:max-w-[1480px] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
				{/* ── Highlight CTA Card (spans 3 rows on sm+, Zendesk Surface bg-forest-surface) ── */}
				<div className="flex flex-col justify-between rounded-2xl bg-forest-surface p-6 sm:p-7 lg:p-8 max-sm:col-span-full sm:row-span-3 text-white shadow-md">
					<div>
						<h2 className="font-bold text-2xl sm:text-[1.75rem] lg:text-[1.95rem] tracking-tight text-white font-heading leading-[1.2] mb-3">
							Trusted by leading teams &amp; enterprise brands worldwide
						</h2>
						<p className="text-xs sm:text-sm leading-relaxed text-forest-muted font-normal mb-8">
							Delivering 24/7 mission-critical customer operations, technical helpdesk, and verified enterprise compliance.
						</p>
					</div>

					<Link
						href="/contact"
						className="mt-auto inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 sm:px-6 text-sm sm:text-base font-semibold text-primary-foreground whitespace-nowrap shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px w-fit max-sm:w-full cursor-pointer"
					>
						<span className="whitespace-nowrap">View companies</span>
						<HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2.2} className="size-4 sm:size-4.5 shrink-0" />
					</Link>
				</div>

				{/* ── 9 Vibrant Logo Grid Tiles ── */}
				{logos.map((Logo, index) => (
					<div
						className="group flex h-28 sm:h-32 lg:h-34 w-full items-center justify-center rounded-2xl bg-muted/70 dark:bg-muted/40 p-5 sm:p-6 text-foreground transition-all duration-300 hover:bg-muted"
						key={index}
					>
						<Logo className="h-8.5 sm:h-10 lg:h-11 w-auto max-w-[85%] transition-transform duration-300 group-hover:scale-105" />
					</div>
				))}
			</div>
		</section>
	);
}

export default LogoCloudSection;
