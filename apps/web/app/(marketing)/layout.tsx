import { MarketingHeader } from "@/components/marketing/layout/header";
import { MarketingFooter } from "@/components/marketing/layout/footer";
// Preserved standalone for future CMS navigation-mode toggle (Header vs. Floating Dock)
// import { SiteDock } from "@/components/navigation/site-dock";

export default function MarketingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<MarketingHeader />
			<main id="page-content" className="flex-1 w-full">
				{children}
			</main>
			<MarketingFooter />

			{/* Floating Navigation Dock — preserved separately in @/components/navigation/site-dock */}
			{/* <SiteDock /> */}
		</div>
	);
}
