import Link from "next/link";
import { BackgroundShader } from "@/components/ui/background-shader";

export function CtaSection() {
	return (
		<section
			id="cta"
			className="w-full py-16 sm:py-20 lg:py-24 overflow-hidden"
			aria-labelledby="cta-heading"
		>
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				{/* ── Full Max-Width, Clean CTA Card with Animated Theme Mesh Shader ── */}
				<div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-forest px-8 py-14 sm:px-14 sm:py-16 md:py-20 text-center border border-white/15 shadow-xl">
					{/* Animated Paper Shaders MeshGradient in the Background */}
					<div
						aria-hidden="true"
						className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
					>
						<BackgroundShader
							colors={[
								"#0E2316", // Deep Forest Black
								"#112B1B", // Deep Forest Pine
								"#1C4229", // Rich Hunter Green
								"#9ECB4A", // Soft Luminous Parrot Hue
							]}
							distortion={0.8}
							swirl={0.1}
							speed={1}
						/>
						{/* Subtle dark overlay for pristine contrast */}
						<div className="absolute inset-0 bg-forest/30 pointer-events-none" />
					</div>

					<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
						{/* Clean, Bold, Larger Heading */}
						<h2
							id="cta-heading"
							className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold font-heading tracking-tight text-white leading-[1.18]"
						>
							Operations built for your success
						</h2>

						{/* Clean, Readable Subtitle */}
						<p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl font-normal">
							Get faster resolutions, happier customers, and a dedicated team that does more with less at a scale that grows with you.
						</p>

						{/* 2 Clean Action Buttons */}
						<div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
							{/* Primary Button: Parrot Green Accent */}
							<Link
								href="/contact"
								className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-hover active:translate-y-px shadow-xs cursor-pointer"
							>
								Schedule consultation
							</Link>

							{/* Secondary Button: Subtle Surface Border */}
							<Link
								href="/contact?intent=roi"
								className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/15 backdrop-blur-xs px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30 active:translate-y-px cursor-pointer"
							>
								Calculate your ROI
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaSection;
