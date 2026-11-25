"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
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
	ArrowDown01Icon,
	Sun01Icon,
	Moon02Icon,
} from "@hugeicons/core-free-icons";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "@workspace/ui/components/sheet";
import { cn } from "@workspace/ui/lib/utils";
import {
	HEADER_SERVICES_ITEMS,
	HEADER_ENGAGEMENT_MODELS,
	HEADER_INDUSTRIES_ITEMS,
	HEADER_SOLUTIONS_EXTRA,
	HEADER_ABOUT_ITEMS,
	MOBILE_DIRECT_LINKS,
	type MegaMenuLink,
} from "./navigation-data";

type DropdownKey = "services" | "solutions" | "about" | null;

function MegaMenuRow({
	item,
	onSelect,
}: {
	item: MegaMenuLink;
	onSelect: () => void;
}) {
	return (
		<Link
			href={item.href}
			onClick={onSelect}
			className="group/item flex items-start gap-3.5 rounded-lg p-2.5 transition-colors hover:bg-muted/80"
		>
			<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
				<HugeiconsIcon icon={item.icon} strokeWidth={1.85} className="size-5" />
			</div>
			<div className="min-w-0 flex-1">
				<div className="flex items-center gap-2">
					{item.number && (
						<span className="font-mono text-[11px] font-bold text-forest-surface dark:text-primary">
							{item.number}
						</span>
					)}
					<span className="text-sm font-semibold font-heading text-foreground leading-tight">
						{item.title}
					</span>
				</div>
				<p className="mt-0.5 text-xs text-muted-foreground leading-snug line-clamp-1">
					{item.description}
				</p>
			</div>
		</Link>
	);
}

function MobileNavGroup({
	label,
	items,
	isOpen,
	onToggle,
	onCloseDrawer,
}: {
	label: string;
	items: MegaMenuLink[];
	isOpen: boolean;
	onToggle: () => void;
	onCloseDrawer: () => void;
}) {
	return (
		<div className="border-b border-border/50">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={isOpen}
				className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold font-heading text-foreground cursor-pointer"
			>
				<span>{label}</span>
				<HugeiconsIcon
					icon={ArrowDown01Icon}
					strokeWidth={2}
					className={cn(
						"size-4 text-muted-foreground transition-transform duration-200",
						isOpen && "rotate-180 text-foreground"
					)}
				/>
			</button>
			{isOpen && (
				<div className="pb-3 space-y-1">
					{items.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							onClick={onCloseDrawer}
							className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground/90 hover:bg-muted transition-colors"
						>
							<div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
								<HugeiconsIcon icon={item.icon} strokeWidth={1.85} className="size-4" />
							</div>
							<div className="min-w-0 flex-1">
								<span className="block text-xs font-semibold text-foreground leading-tight">
									{item.title}
								</span>
								<span className="block text-[11px] text-muted-foreground truncate">
									{item.description}
								</span>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}

export function MarketingHeader() {
	const pathname = usePathname();
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [openMenu, setOpenMenu] = React.useState<DropdownKey>(null);
	const [mobileGroup, setMobileGroup] = React.useState<DropdownKey>("services");

	const navRef = React.useRef<HTMLDivElement>(null);
	const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	// Close open dropdown on outside click or Escape key
	React.useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(e.target as Node)) {
				setOpenMenu(null);
			}
		};
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpenMenu(null);
		};
		document.addEventListener("mousedown", handleOutsideClick);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const clearCloseTimer = () => {
		if (closeTimerRef.current) {
			clearTimeout(closeTimerRef.current);
			closeTimerRef.current = null;
		}
	};

	const openWithIntent = (key: Exclude<DropdownKey, null>) => {
		clearCloseTimer();
		setOpenMenu(key);
	};

	const closeWithIntent = () => {
		clearCloseTimer();
		closeTimerRef.current = setTimeout(() => {
			setOpenMenu(null);
		}, 130);
	};

	const closeAll = () => {
		clearCloseTimer();
		setOpenMenu(null);
	};

	const isDark = mounted && resolvedTheme === "dark";

	const isSolutionsActive =
		pathname.startsWith("/industries") ||
		pathname.startsWith("/case-studies") ||
		pathname.startsWith("/security");

	const isAboutActive =
		pathname.startsWith("/about") || pathname.startsWith("/careers");

	return (
		<header
			ref={navRef}
			className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/50 transition-colors duration-200"
		>
			<div className="relative mx-auto flex h-18 sm:h-20 w-full max-w-7xl xl:max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* ── Left: Wordmark Brand Logo ── */}
				<Link
					href="/"
					onClick={closeAll}
					className="flex items-center select-none group shrink-0"
				>
					<span className="text-2xl sm:text-[1.75rem] font-bold tracking-tight text-foreground font-heading lowercase transition-opacity group-hover:opacity-80">
						aura
					</span>
				</Link>

				{/* ── Center: Desktop Enterprise BPO Navigation & Mega-Menus ── */}
				<nav
					aria-label="Primary Navigation"
					className="hidden lg:flex items-center gap-1"
				>
					{/* 1. Home */}
					<Link
						href="/"
						onMouseEnter={closeAll}
						onClick={closeAll}
						className={cn(
							"relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
							pathname === "/"
								? "text-foreground font-semibold"
								: "text-muted-foreground hover:text-foreground hover:bg-muted/60"
						)}
					>
						Home
					</Link>

					{/* 2. Services Mega-Dropdown */}
					<div
						onMouseEnter={() => openWithIntent("services")}
						onMouseLeave={closeWithIntent}
					>
						<button
							type="button"
							aria-expanded={openMenu === "services"}
							onClick={() =>
								setOpenMenu((prev) => (prev === "services" ? null : "services"))
							}
							className={cn(
								"inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
								pathname.startsWith("/services") || openMenu === "services"
									? "text-foreground font-semibold bg-muted/60"
									: "text-muted-foreground hover:text-foreground hover:bg-muted/60"
							)}
						>
							<span>Services</span>
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								strokeWidth={2}
								className={cn(
									"size-3.5 transition-transform duration-200",
									openMenu === "services" && "rotate-180"
								)}
							/>
						</button>
					</div>

					{/* 3. Solutions & Industries Mega-Dropdown */}
					<div
						onMouseEnter={() => openWithIntent("solutions")}
						onMouseLeave={closeWithIntent}
					>
						<button
							type="button"
							aria-expanded={openMenu === "solutions"}
							onClick={() =>
								setOpenMenu((prev) => (prev === "solutions" ? null : "solutions"))
							}
							className={cn(
								"inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
								isSolutionsActive || openMenu === "solutions"
									? "text-foreground font-semibold bg-muted/60"
									: "text-muted-foreground hover:text-foreground hover:bg-muted/60"
							)}
						>
							<span>Solutions</span>
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								strokeWidth={2}
								className={cn(
									"size-3.5 transition-transform duration-200",
									openMenu === "solutions" && "rotate-180"
								)}
							/>
						</button>
					</div>

					{/* 4. About Dropdown */}
					<div
						onMouseEnter={() => openWithIntent("about")}
						onMouseLeave={closeWithIntent}
					>
						<button
							type="button"
							aria-expanded={openMenu === "about"}
							onClick={() =>
								setOpenMenu((prev) => (prev === "about" ? null : "about"))
							}
							className={cn(
								"inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
								isAboutActive || openMenu === "about"
									? "text-foreground font-semibold bg-muted/60"
									: "text-muted-foreground hover:text-foreground hover:bg-muted/60"
							)}
						>
							<span>About</span>
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								strokeWidth={2}
								className={cn(
									"size-3.5 transition-transform duration-200",
									openMenu === "about" && "rotate-180"
								)}
							/>
						</button>
					</div>

					{/* 5. Blog */}
					<Link
						href="/blog"
						onMouseEnter={closeAll}
						onClick={closeAll}
						className={cn(
							"px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
							pathname.startsWith("/blog")
								? "text-foreground font-semibold"
								: "text-muted-foreground hover:text-foreground hover:bg-muted/60"
						)}
					>
						Blog
					</Link>

					{/* 6. Contact */}
					<Link
						href="/contact"
						onMouseEnter={closeAll}
						onClick={closeAll}
						className={cn(
							"px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
							pathname.startsWith("/contact")
								? "text-foreground font-semibold"
								: "text-muted-foreground hover:text-foreground hover:bg-muted/60"
						)}
					>
						Contact
					</Link>
				</nav>

				{/* ── Right: Theme Toggle, Primary Contact Us CTA & Operations Sheet ── */}
				<div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
					{/* Theme Mode Switch */}
					<button
						type="button"
						onClick={() => setTheme(isDark ? "light" : "dark")}
						aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
						className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg bg-muted/80 text-foreground transition-colors hover:bg-muted active:translate-y-px cursor-pointer"
					>
						{isDark ? (
							<HugeiconsIcon
								icon={Sun01Icon}
								strokeWidth={2}
								className="size-4.5 text-primary"
							/>
						) : (
							<HugeiconsIcon
								icon={Moon02Icon}
								strokeWidth={2}
								className="size-4.5"
							/>
						)}
					</button>

					{/* Primary Contact Us CTA */}
					<Link
						href="/contact"
						onClick={closeAll}
						className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors hover:bg-primary-hover shadow-xs active:translate-y-px"
					>
						<span>Contact Us</span>
					</Link>

					{/* Operations Info & Mobile Navigation Sheet */}
					<Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
						<SheetTrigger
							render={
								<button
									type="button"
									aria-label="Open navigation and contact details drawer"
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
							className="w-full sm:max-w-md p-0 flex flex-col justify-between overflow-y-auto bg-background border-l border-border/60 shadow-2xl"
						>
							<div className="flex flex-col h-full justify-between p-6 sm:p-8">
								<div>
									<SheetHeader className="p-0 mb-6 text-left">
										<SheetTitle className="text-2xl font-bold font-heading lowercase tracking-tight text-foreground">
											aura
										</SheetTitle>
										<SheetDescription className="text-xs text-muted-foreground font-mono">
											Strategic Customer Operations &amp; Enterprise BPO
										</SheetDescription>
									</SheetHeader>

									{/* ── Mobile & Tablet Full Accordion Navigation ── */}
									<div className="lg:hidden mb-8">
										<span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground block mb-2">
											Navigation
										</span>

										<MobileNavGroup
											label="Services (07)"
											items={HEADER_SERVICES_ITEMS}
											isOpen={mobileGroup === "services"}
											onToggle={() =>
												setMobileGroup((prev) =>
													prev === "services" ? null : "services"
												)
											}
											onCloseDrawer={() => setDrawerOpen(false)}
										/>

										<MobileNavGroup
											label="Solutions &amp; Industries"
											items={[
												...HEADER_INDUSTRIES_ITEMS,
												...HEADER_SOLUTIONS_EXTRA,
											]}
											isOpen={mobileGroup === "solutions"}
											onToggle={() =>
												setMobileGroup((prev) =>
													prev === "solutions" ? null : "solutions"
												)
											}
											onCloseDrawer={() => setDrawerOpen(false)}
										/>

										<MobileNavGroup
											label="About &amp; Careers"
											items={HEADER_ABOUT_ITEMS}
											isOpen={mobileGroup === "about"}
											onToggle={() =>
												setMobileGroup((prev) =>
													prev === "about" ? null : "about"
												)
											}
											onCloseDrawer={() => setDrawerOpen(false)}
										/>

										<div className="pt-3 grid grid-cols-1 gap-1">
											{MOBILE_DIRECT_LINKS.map((link) => (
												<Link
													key={link.label}
													href={link.href}
													onClick={() => setDrawerOpen(false)}
													className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm font-semibold font-heading text-foreground hover:bg-muted transition-colors"
												>
													<div className="flex items-center gap-2.5">
														<HugeiconsIcon
															icon={link.icon}
															strokeWidth={1.85}
															className="size-4 text-muted-foreground"
														/>
														<span>{link.label}</span>
													</div>
													<HugeiconsIcon
														icon={ArrowRight01Icon}
														strokeWidth={2}
														className="size-3.5 text-muted-foreground"
													/>
												</Link>
											))}
										</div>
									</div>

									{/* ── Direct Dispatch & Global Hubs Info ── */}
									<div className="space-y-5">
										<span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground block border-b border-border/50 pb-2">
											Direct Dispatch &amp; Hubs
										</span>

										<div className="flex items-start gap-3.5">
											<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
												<HugeiconsIcon icon={Call02Icon} strokeWidth={2} className="size-4" />
											</div>
											<div>
												<span className="text-xs text-muted-foreground block font-medium">
													Enterprise Desk
												</span>
												<a
													href="tel:+18004822872"
													className="text-sm font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary transition-colors block mt-0.5"
												>
													+1 (800) 482-AURA
												</a>
												<span className="text-[11px] text-muted-foreground block">
													Direct routing to solutions directors
												</span>
											</div>
										</div>

										<div className="flex items-start gap-3.5">
											<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
												<HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
											</div>
											<div>
												<span className="text-xs text-muted-foreground block font-medium">
													Client Scoping &amp; Inquiries
												</span>
												<a
													href="mailto:enterprise@aura.com"
													className="text-sm font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary transition-colors block mt-0.5"
												>
													enterprise@aura.com
												</a>
												<span className="text-[11px] text-muted-foreground block">
													First-response SLA under 15 mins
												</span>
											</div>
										</div>

										<div className="flex items-start gap-3.5">
											<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
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

										<div className="flex items-start gap-3.5">
											<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
												<HugeiconsIcon icon={Clock01Icon} strokeWidth={2} className="size-4" />
											</div>
											<div>
												<span className="text-xs text-muted-foreground block font-medium">
													Follow-the-Sun Hubs
												</span>
												<p className="text-xs font-mono text-foreground mt-0.5">
													London • Singapore • Manila • Dubai
												</p>
												<span className="text-[11px] text-muted-foreground block">
													24/7 continuous shift coverage
												</span>
											</div>
										</div>
									</div>
								</div>

								{/* ── Drawer Bottom Socials & Briefing CTA ── */}
								<div className="pt-8 mt-8 border-t border-border/50">
									<div className="flex items-center justify-between mb-5">
										<span className="text-xs font-mono text-muted-foreground">
											Follow Aura
										</span>
										<div className="flex items-center gap-1.5">
											{[
												{ label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin01Icon },
												{ label: "X", href: "https://x.com", icon: NewTwitterIcon },
												{ label: "GitHub", href: "https://github.com", icon: GithubIcon },
												{ label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
											].map((soc) => (
												<a
													key={soc.label}
													href={soc.href}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={soc.label}
													className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
												>
													<HugeiconsIcon icon={soc.icon} strokeWidth={2} className="size-3.5" />
												</a>
											))}
										</div>
									</div>

									<Link
										href="/contact"
										onClick={() => setDrawerOpen(false)}
										className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-3 text-sm font-semibold transition-colors hover:bg-primary-hover active:translate-y-px shadow-xs"
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

			{/* ── Desktop Mega-Dropdown Backdrop Container ── */}
			{openMenu && (
				<div
					onMouseEnter={() => openWithIntent(openMenu)}
					onMouseLeave={closeWithIntent}
					className="hidden lg:block absolute left-0 right-0 top-full z-40 border-b border-border/70 bg-popover text-popover-foreground shadow-xl"
				>
					<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8 py-6">
						{/* Services Mega-Menu: 7 Practices + Forest Engagement Panel */}
						{openMenu === "services" && (
							<div className="grid grid-cols-12 gap-8 items-stretch">
								<div className="col-span-8">
									<div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
										<span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
											Core BPO Practices (07)
										</span>
										<Link
											href="/services"
											onClick={closeAll}
											className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary transition-colors"
										>
											<span>View all services</span>
											<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3.5" />
										</Link>
									</div>

									<div className="grid grid-cols-2 gap-x-3 gap-y-1">
										{HEADER_SERVICES_ITEMS.map((item) => (
											<MegaMenuRow
												key={item.title}
												item={item}
												onSelect={closeAll}
											/>
										))}
									</div>
								</div>

								{/* Right Forest Engagement Panel */}
								<div className="col-span-4 rounded-xl bg-forest dark:bg-forest-surface/65 border border-forest-surface dark:border-white/12 p-5 text-white flex flex-col justify-between">
									<div>
										<span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary block mb-2">
											Engagement Models
										</span>
										<h3 className="text-lg font-bold font-heading leading-snug mb-3">
											Capacity structured for your exact SLAs.
										</h3>
										<div className="divide-y divide-white/10 border-t border-white/10">
											{HEADER_ENGAGEMENT_MODELS.map((model) => (
												<Link
													key={model.title}
													href={model.href}
													onClick={closeAll}
													className="flex items-center justify-between py-2.5 text-xs hover:text-primary transition-colors"
												>
													<span className="font-semibold text-white">{model.title}</span>
													<span className="font-mono text-[11px] text-forest-muted">
														{model.detail}
													</span>
												</Link>
											))}
										</div>
									</div>

									<Link
										href="/contact"
										onClick={closeAll}
										className="mt-4 inline-flex items-center justify-between rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
									>
										<span>Scope a Custom Pod</span>
										<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3.5" />
									</Link>
								</div>
							</div>
						)}

						{/* Solutions Mega-Menu: Industries + Proof / Compliance */}
						{openMenu === "solutions" && (
							<div className="grid grid-cols-12 gap-8">
								<div className="col-span-6">
									<div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
										<span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
											Specialized Industries
										</span>
										<Link
											href="/industries"
											onClick={closeAll}
											className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary transition-colors"
										>
											<span>All sectors</span>
											<HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3.5" />
										</Link>
									</div>
									<div className="grid grid-cols-1 gap-1">
										{HEADER_INDUSTRIES_ITEMS.map((item) => (
											<MegaMenuRow
												key={item.title}
												item={item}
												onSelect={closeAll}
											/>
										))}
									</div>
								</div>

								<div className="col-span-6 border-l border-border/60 pl-8">
									<div className="pb-3 mb-3 border-b border-border/60">
										<span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
											Enterprise Proof &amp; Infrastructure
										</span>
									</div>
									<div className="grid grid-cols-1 gap-1">
										{HEADER_SOLUTIONS_EXTRA.map((item) => (
											<MegaMenuRow
												key={item.title}
												item={item}
												onSelect={closeAll}
											/>
										))}
									</div>
								</div>
							</div>
						)}

						{/* About Mega-Menu: Company, Leadership & Careers */}
						{openMenu === "about" && (
							<div className="grid grid-cols-12 gap-8 items-center">
								<div className="col-span-8">
									<div className="pb-3 mb-3 border-b border-border/60">
										<span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
											Company &amp; Talent
										</span>
									</div>
									<div className="grid grid-cols-3 gap-3">
										{HEADER_ABOUT_ITEMS.map((item) => (
											<MegaMenuRow
												key={item.title}
												item={item}
												onSelect={closeAll}
											/>
										))}
									</div>
								</div>

								<div className="col-span-4 rounded-xl border border-border/70 bg-muted/40 p-5">
									<span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-forest-surface dark:text-primary block mb-1.5">
										Global Reach
									</span>
									<p className="text-sm font-semibold font-heading text-foreground mb-1">
										99.4% Audited SLA Compliance
									</p>
									<p className="text-xs text-muted-foreground leading-relaxed">
										Continuous follow-the-sun operations staffed by dedicated multilingual specialists across four strategic hubs.
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</header>
	);
}

export default MarketingHeader;
