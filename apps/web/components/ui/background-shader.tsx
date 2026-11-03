"use client";

import * as React from "react";
import dynamic from "next/dynamic";

// Dynamically import MeshGradient with SSR disabled to guarantee clean WebGL canvas mount
const MeshGradient = dynamic(
	() => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
	{ ssr: false }
);

export interface BackgroundShaderProps {
	className?: string;
	style?: React.CSSProperties;
	colors?: string[];
	distortion?: number;
	swirl?: number;
	speed?: number;
	scale?: number;
	rotation?: number;
	offsetX?: number;
	offsetY?: number;
}

export function BackgroundShader({
	className = "w-full h-full",
	style,
	colors = [
		"#112B1B", // Deep Forest Pine
		"#1C4229", // Rich Hunter Green Surface
		"#23633B", // Vivid Emerald Midtone
		"#C7E96B", // Electric Parrot Accent
	],
	distortion = 0.8,
	swirl = 0.1,
	speed = 1,
	scale = 1,
	rotation = 0,
	offsetX = 0,
	offsetY = 0,
}: BackgroundShaderProps) {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<MeshGradient
			className={className}
			style={{ width: "100%", height: "100%", ...style }}
			distortion={distortion}
			swirl={swirl}
			offsetX={offsetX}
			offsetY={offsetY}
			scale={scale}
			rotation={rotation}
			speed={speed}
			colors={colors}
		/>
	);
}

export default BackgroundShader;
