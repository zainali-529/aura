import * as React from "react";

const CLIENTS = [
	{
		name: "Entergy",
		svg: (
			<svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 120 28">
				<path d="M12 4 C6.5 4 2 8.5 2 14 C2 19.5 6.5 24 12 24 C17.5 24 22 19.5 22 14 C22 8.5 17.5 4 12 4 Z M12 7 C15.9 7 19 10.1 19 14 C19 17.9 15.9 21 12 21 C8.1 21 5 17.9 5 14 C5 10.1 8.1 7 12 7 Z" />
				<path d="M7 14 L17 14 M12 9 L17 14 L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
				<text x="32" y="20" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" letterSpacing="-0.5px">entergy</text>
			</svg>
		),
	},
	{
		name: "Bunge",
		svg: (
			<svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 120 28">
				<text x="4" y="20" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="800" letterSpacing="3px">BUNGE</text>
				<circle cx="94" cy="14" r="3.5" fill="currentColor" opacity="0.8" />
			</svg>
		),
	},
	{
		name: "C.H. Robinson",
		svg: (
			<svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 150 28">
				<rect x="2" y="4" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
				<path d="M6 14 L18 14 M12 8 L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				<text x="30" y="19" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.5px">C.H. ROBINSON</text>
			</svg>
		),
	},
	{
		name: "Axon",
		svg: (
			<svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 110 28">
				<polygon points="12,4 2,24 22,24" fill="none" stroke="currentColor" strokeWidth="2.5" />
				<polygon points="12,11 6,22 18,22" fill="currentColor" opacity="0.4" />
				<text x="30" y="21" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="800" letterSpacing="2px">AXON</text>
			</svg>
		),
	},
	{
		name: "Celanese",
		svg: (
			<svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 130 28">
				<circle cx="12" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
				<path d="M12 6 C16 6 19 9 19 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
				<text x="28" y="20" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700" letterSpacing="0.2px">Celanese</text>
			</svg>
		),
	},
];

export function AboutClientsSection() {
	return (
		<section className="w-full border-y border-border/40 bg-muted/20 py-12 sm:py-16">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-sm sm:text-base font-semibold tracking-wide text-foreground/80 font-heading mb-8 sm:mb-10">
					Building Trust With Global Clients
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 text-muted-foreground/70">
					{CLIENTS.map((client) => (
						<div
							key={client.name}
							className="transition-all duration-300 hover:text-foreground hover:scale-105 select-none"
							title={client.name}
						>
							{client.svg}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default AboutClientsSection;
