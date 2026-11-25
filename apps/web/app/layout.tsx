import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_FEATURES } from "@/lib/site-config";
import { cn } from "@workspace/ui/lib/utils";

// ── Typography Setup for Aura BPO ──────────────────────────────────
// Primary UI & Body: Plus Jakarta Sans — razor-sharp enterprise clarity
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Headings & Display: Outfit — sleek, luxury modern tech geometry
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Monospace: Geist Mono — for numbers, telemetry & badges
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Aura | Next-Gen BPO & Customer Experience Solutions",
  description:
    "Omnichannel customer care, 24/7 technical support, and back-office operations for high-growth enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={SITE_FEATURES.enableDarkMode ? undefined : { colorScheme: "light" }}
      className={cn(
        "antialiased",
        !SITE_FEATURES.enableDarkMode && "light",
        plusJakartaSans.variable,
        outfit.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
