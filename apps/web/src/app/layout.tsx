import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";

import "../index.css";
import Providers from "@/components/providers";
import { ReactGrab } from "@/components/react-grab";
import { SmoothScroll } from "@/components/smooth-scroll";

const archivo = Archivo({
	variable: "--font-archivo",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

const plexMono = IBM_Plex_Mono({
	variable: "--font-plex-mono",
	subsets: ["latin"],
	weight: ["400", "500"],
	display: "swap",
});

const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument-serif",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Dissonant — AI transformation task force",
	description:
		"Dissonant rebuilds the internal operations of established companies around AI. Fixed fee. Full ownership. We build it, we hand it over, we leave.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${archivo.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
		>
			<body>
				{process.env.NODE_ENV === "development" && <ReactGrab />}
				<SmoothScroll />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
