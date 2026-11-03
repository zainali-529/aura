"use client";

import * as React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Menu01Icon,
	Call02Icon,
	Mail01Icon,
	Location01Icon,
	Clock01Icon,
	Linkedin01Icon,
	NewTwitterIcon,
	InstagramIcon,
	GithubIcon,
	ArrowRight01Icon,
	ArrowUpRight01Icon,
	CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetClose,
} from "@workspace/ui/components/sheet";

const NAV_LINKS = [
	{ label: "Home", href: "/" },
	{ label: "About Us", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Blog", href: "/blog" },
	{ label: "Contact", href: "/contact" },
];

export function MarketingHeader() {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md transition-all duration-200 border-b border-border/30">
			<div className="mx-auto flex h-18 sm:h-20 w-full max-w-7xl xl:max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* ── Left: Modern Minimal Text Logo ── */}
				<Link
					href="/"
					className="flex items-center select-none group"
				>
					<span className="text-2xl sm:text-[1.75rem] font-bold tracking-tight text-foreground font-heading lowercase transition-opacity group-hover:opacity-80">
						aura
					</span>
				</Link>

				{/* ── Right: Contact Us Button & 3-Line Hamburger Drawer Trigger ── */}
				<div className="flex items-center gap-2.5 sm:gap-3">
					{/* Contact Us Button (Electric Parrot Accent - Boxy Zendesk Radius) */}
					<Link
						href="/contact"
						className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-hover shadow-xs active:translate-y-px cursor-pointer"
					>
						<span>Contact Us</span>
					</Link>

					{/* 3-Line Hamburger Button opening the Contact & Info Sheet */}
					<Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
						<SheetTrigger
							render={
								<button
									type="button"
									aria-label="Open contact and office information drawer"
									className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg bg-muted/80 text-foreground transition-colors hover:bg-muted active:translate-y-px cursor-pointer border-none"
								/>
							}
						>
							<HugeiconsIcon
								icon={Menu01Icon}
								strokeWidth={2}
								className="size-4.5 sm:size-5"
							/>
						</SheetTrigger>

						<SheetContent
							side="right"
							className="w-full sm:max-w-md p-0 flex flex-col justify-between overflow-y-auto bg-background/98 backdrop-blur-2xl border-l border-border/60 shadow-2xl"
						>
							{/* Drawer Content Wrapper */}
							<div className="flex flex-col h-full justify-between p-6 sm:p-8">
								{/* ── Top Header / Brand ── */}
								<div>
									<SheetHeader className="p-0 mb-6 text-left">
										<SheetTitle className="text-2xl font-bold font-heading lowercase tracking-tight text-foreground">
											aura
										</SheetTitle>
										<SheetDescription className="text-xs text-muted-foreground font-mono">
											Strategic Customer Operations &amp; Enterprise BPO
										</SheetDescription>
									</SheetHeader>

									{/* 24/7 Operations Status Capsule */}
									<div className="inline-flex items-center gap-2 rounded-full bg-muted/70 px-3 py-1 text-xs font-mono text-muted-foreground mb-8">
										<span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
										<span>24/7 Global Incident &amp; Care Active</span>
									</div>

									{/* ── Mobile Navigation (Visible on Mobile / Tablet) ── */}
									<div className="md:hidden mb-8 pb-6 border-b border-border/40">
										<span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/80 block mb-3">
											Navigation
										</span>
										<nav className="flex flex-col gap-1">
											{NAV_LINKS.map((link, idx) => (
												<Link
													key={link.label}
													href={link.href}
													onClick={() => setDrawerOpen(false)}
													className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
												>
													<span>{link.label}</span>
													<span className="text-xs font-mono text-muted-foreground">
														0{idx + 1}
													</span>
												</Link>
											))}
										</nav>
									</div>

									{/* ── Direct Contact & Dispatch Info ── */}
									<div className="space-y-6">
										<span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/80 block">
											Direct Dispatch &amp; Operations
										</span>

										{/* Phone */}
										<div className="flex items-start gap-3.5">
											<div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
												<HugeiconsIcon icon={Call02Icon} strokeWidth={2} className="size-4" />
											</div>
											<div>
												<span className="text-xs text-muted-foreground block font-medium">
													Toll-Free &amp; Enterprise Line
												</span>
												<a
													href="tel:+18004822872"
													className="text-sm font-semibold text-foreground hover:text-primary transition-colors block mt-0.5"
												>
													+1 (800) 482-AURA
												</a>
												<span className="text-[11px] text-muted-foreground block">
													Direct routing to senior solutions pod
												</span>
											</div>
										</div>

										{/* Email */}
										<div className="flex items-start gap-3.5">
											<div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
												<HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
											</div>
											<div>
												<span className="text-xs text-muted-foreground block font-medium">
													Operations &amp; Client Inquiries
												</span>
												<a
													href="mailto:enterprise@aura.com"
													className="text-sm font-semibold text-foreground hover:text-primary transition-colors block mt-0.5"
												>
													enterprise@aura.com
												</a>
												<span className="text-[11px] text-muted-foreground block">
													Average first-response SLA: &lt; 15 mins
												</span>
											</div>
										</div>

										{/* Global Headquarters */}
										<div className="flex items-start gap-3.5">
											<div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
												<HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-4" />
											</div>
											<div>
												<span className="text-xs text-muted-foreground block font-medium">
													Global Headquarters
												</span>
												<p className="text-sm font-semibold text-foreground leading-snug mt-0.5">
													One World Trade Center, Suite 8500
												</p>
												<span className="text-[11px] text-muted-foreground block">
													New York, NY 10007, United States
												</span>
											</div>
										</div>

										{/* Global Delivery Hubs */}
										<div className="flex items-start gap-3.5">
											<div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
												<HugeiconsIcon icon={Clock01Icon} strokeWidth={2} className="size-4" />
											</div>
											<div>
												<span className="text-xs text-muted-foreground block font-medium">
													Active Delivery Hubs
												</span>
												<p className="text-xs font-mono text-foreground mt-0.5">
													London • Singapore • Manila • Dubai
												</p>
												<span className="text-[11px] text-muted-foreground block">
													Follow-the-sun continuous operational coverage
												</span>
											</div>
										</div>
									</div>
								</div>

								{/* ── Bottom Section: Socials & Direct Action CTA ── */}
								<div className="pt-8 mt-8 border-t border-border/40">
									{/* Social Media Links */}
									<div className="flex items-center justify-between mb-5">
										<span className="text-xs font-mono text-muted-foreground">
											Follow Aura:
										</span>
										<div className="flex items-center gap-2">
											<a
												href="https://linkedin.com"
												target="_blank"
												rel="noopener noreferrer"
												aria-label="LinkedIn"
												className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
											>
												<HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} className="size-3.5" />
											</a>
											<a
												href="https://x.com"
												target="_blank"
												rel="noopener noreferrer"
												aria-label="X (Twitter)"
												className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
											>
												<HugeiconsIcon icon={NewTwitterIcon} strokeWidth={2} className="size-3.5" />
											</a>
											<a
												href="https://github.com"
												target="_blank"
												rel="noopener noreferrer"
												aria-label="GitHub"
												className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
											>
												<HugeiconsIcon icon={GithubIcon} strokeWidth={2} className="size-3.5" />
											</a>
											<a
												href="https://instagram.com"
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Instagram"
												className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
											>
												<HugeiconsIcon icon={InstagramIcon} strokeWidth={2} className="size-3.5" />
											</a>
										</div>
									</div>

									{/* Primary Consultation Button */}
									<Link
										href="/contact"
										onClick={() => setDrawerOpen(false)}
										className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-3 text-sm font-semibold transition-all duration-200 hover:bg-primary-hover active:translate-y-px shadow-xs"
									>
										<span>Book an Executive Briefing</span>
										<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

export default MarketingHeader;
