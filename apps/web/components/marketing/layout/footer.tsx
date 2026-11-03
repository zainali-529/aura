import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Linkedin01Icon,
	NewTwitterIcon,
	InstagramIcon,
	GithubIcon,
	ArrowUpRight01Icon,
	CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";

// ── Footer Navigation Links ────────────────────────────────────────
const FOOTER_NAV = {
	services: [
		{ label: "Customer Experience", href: "/#services" },
		{ label: "Lead Generation", href: "/#services" },
		{ label: "Technical Support", href: "/#services" },
		{ label: "Back-Office Operations", href: "/#services" },
		{ label: "Finance & Specialized Ops", href: "/#services" },
		{ label: "HR & Business Support", href: "/#services" },
		{ label: "Digital & Creative Services", href: "/#services" },
	],
	industries: [
		{ label: "Fintech & Banking", href: "/#industries" },
		{ label: "HealthTech & MedTech", href: "/#industries" },
		{ label: "E-Commerce & Retail", href: "/#industries" },
		{ label: "SaaS & Enterprise Tech", href: "/#industries" },
		{ label: "Logistics & Supply Chain", href: "/#industries" },
		{ label: "Travel & Hospitality", href: "/#industries" },
	],
	company: [
		{ label: "About Us", href: "/#about" },
		{ label: "Engagement Models", href: "/#engagement-models" },
		{ label: "How It Works", href: "/#how-it-works" },
		{ label: "Client Testimonials", href: "/#testimonials" },
		{ label: "Blog & Insights", href: "/blog" },
		{ label: "Careers", href: "/contact?intent=careers" },
		{ label: "Contact Operations", href: "/contact" },
	],
	compliance: [
		"SOC-2 Type II Certified",
		"HIPAA Compliant",
		"PCI-DSS Level 1 Ready",
		"ISO 27001 Security",
	],
};

const SOCIAL_LINKS = [
	{ label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin01Icon },
	{ label: "X (Twitter)", href: "https://x.com", icon: NewTwitterIcon },
	{ label: "GitHub", href: "https://github.com", icon: GithubIcon },
	{ label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
];

export function MarketingFooter() {
	return (
		<footer
			className="w-full bg-[#11110D] text-white pt-20 sm:pt-24 pb-24 sm:pb-28 overflow-hidden border-t border-white/10"
			aria-labelledby="footer-heading"
		>
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>

			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				{/* ── Top Grid: Brand & Structured Navigation Columns ── */}
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
					{/* Brand Column (Span 4 on LG) */}
					<div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col justify-between">
						<div>
							<Link
								href="/"
								className="inline-flex items-center select-none group mb-4"
							>
								<span className="text-3xl font-bold font-heading lowercase tracking-tight text-white transition-opacity group-hover:opacity-80">
									aura
								</span>
							</Link>

							<p className="text-sm font-medium text-white/90 leading-snug mb-3">
								Strategic Customer Operations &amp; Enterprise BPO
							</p>

							<p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm mb-6">
								Dedicated multilingual specialists, ITIL-certified technical helpdesks, and high-volume back-office workflows engineered for 99.8% SLA enterprise reliability across 24/7 global timezones.
							</p>
						</div>

						{/* Certifications & Trust Pills */}
						<div className="pt-2">
							<span className="text-[11px] font-mono uppercase tracking-widest text-white/50 block mb-2.5">
								Enterprise Security &amp; Compliance
							</span>
							<div className="flex flex-wrap gap-2">
								{FOOTER_NAV.compliance.map((badge, idx) => (
									<span
										key={idx}
										className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-white/75"
									>
										<HugeiconsIcon
											icon={CheckmarkBadge01Icon}
											strokeWidth={2}
											className="size-3 text-[#C7E96B]"
										/>
										<span>{badge}</span>
									</span>
								))}
							</div>
						</div>
					</div>

					{/* Column 2: Services (Span 3 on LG) */}
					<div className="col-span-1 md:col-span-2 lg:col-span-3">
						<span className="text-xs font-mono uppercase tracking-widest text-[#C7E96B] font-semibold block mb-4">
							Services
						</span>
						<ul className="space-y-2.5">
							{FOOTER_NAV.services.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors duration-150 inline-block py-0.5"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3: Industries (Span 3 on LG) */}
					<div className="col-span-1 md:col-span-2 lg:col-span-3">
						<span className="text-xs font-mono uppercase tracking-widest text-[#C7E96B] font-semibold block mb-4">
							Industries
						</span>
						<ul className="space-y-2.5">
							{FOOTER_NAV.industries.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors duration-150 inline-block py-0.5"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4: Company & Links (Span 2 on LG) */}
					<div className="col-span-2 md:col-span-4 lg:col-span-2">
						<span className="text-xs font-mono uppercase tracking-widest text-[#C7E96B] font-semibold block mb-4">
							Company
						</span>
						<ul className="space-y-2.5">
							{FOOTER_NAV.company.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors duration-150 inline-block py-0.5"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* ── Interactive Halftone Wordmark: "Connect" (Inside Max-Width Container) ── */}
				<div className="w-full my-6 sm:my-8 border-b border-white/10 relative overflow-hidden rounded-2xl">
					<HalftoneWordmarkFooter
						as="div"
						showNav={false}
						wordmark="Connect"
						palette={{
							background: "#11110D",
							ink: "#E9E4DA",
							warm: "#C7E96B",
						}}
						height="280px"
						crop={0}
						dotGap={6}
						radius={85}
						grain={0.35}
						interactive={true}
						fontFamily='Outfit, "Plus Jakarta Sans", sans-serif'
						fontWeight={800}
					/>
				</div>

				{/* ── Social Media Channels Row ── */}
				<div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10">
					<div className="flex items-center gap-3">
						<span className="text-xs font-mono uppercase tracking-widest text-white/50">
							Follow Aura:
						</span>
						<span className="text-xs text-white/80 font-medium">
							Strategic Customer Operations &amp; Enterprise BPO
						</span>
					</div>

					<div className="flex items-center gap-2.5">
						{SOCIAL_LINKS.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={social.label}
								className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:translate-y-px"
							>
								<HugeiconsIcon icon={social.icon} strokeWidth={2} className="size-4" />
							</a>
						))}
					</div>
				</div>

				{/* ── Bottom Legal & Copyright Bar ── */}
				<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
					<p>
						&copy; {new Date().getFullYear()} Aura Operations Inc. All rights reserved.
					</p>

					<div className="flex flex-wrap items-center gap-6">
						<Link
							href="/contact?intent=privacy"
							className="hover:text-white transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/contact?intent=terms"
							className="hover:text-white transition-colors"
						>
							Terms of Service
						</Link>
						<Link
							href="/contact?intent=security"
							className="hover:text-white transition-colors"
						>
							Security &amp; Trust
						</Link>
						<Link
							href="/contact?intent=cookies"
							className="hover:text-white transition-colors"
						>
							Cookie Preferences
						</Link>
						<div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
							<span className="size-1.5 rounded-full bg-emerald-400" />
							<span className="text-white/75 font-mono text-[11px]">
								System Status: 99.98% SLA
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default MarketingFooter;
