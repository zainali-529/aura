import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface PlannedPageShellProps {
	eyebrow: string;
	title: string;
	description: string;
	statusNote: string;
	highlights?: { label: string; detail: string }[];
}

/**
 * Shared architectural shell for upcoming dedicated BPO sections accessible
 * via the header navigation while keeping routing free of 404 errors.
 */
export function PlannedPageShell({
	eyebrow,
	title,
	description,
	statusNote,
	highlights,
}: PlannedPageShellProps) {
	return (
		<section className="w-full py-20 sm:py-28 bg-background border-b border-border/50">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					<span className="font-mono text-xs uppercase tracking-[0.2em] text-forest-surface dark:text-primary font-bold block mb-3">
						{eyebrow}
					</span>

					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-foreground leading-[1.1] mb-6">
						{title}
					</h1>

					<p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 font-normal">
						{description}
					</p>

					<p className="font-mono text-xs text-muted-foreground border-l-2 border-primary pl-3.5 py-1 mb-8">
						{statusNote}
					</p>

					<div className="flex flex-wrap items-center gap-3.5">
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px"
						>
							<span>Request Briefing</span>
							<HugeiconsIcon
								icon={ArrowRight01Icon}
								strokeWidth={2}
								className="size-4"
							/>
						</Link>
						<Link
							href="/services"
							className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted active:translate-y-px"
						>
							<HugeiconsIcon
								icon={ArrowLeft01Icon}
								strokeWidth={2}
								className="size-4"
							/>
							<span>Explore Services</span>
						</Link>
					</div>
				</div>

				{highlights && highlights.length > 0 && (
					<div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-border/60 divide-y md:divide-y-0 md:divide-x divide-border/60">
						{highlights.map((item) => (
							<div key={item.label} className="pt-6 md:pt-8 md:px-6 first:pl-0">
								<h2 className="text-base font-bold font-heading text-foreground mb-1.5">
									{item.label}
								</h2>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.detail}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
