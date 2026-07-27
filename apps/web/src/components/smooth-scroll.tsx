"use client";

import "lenis/dist/lenis.css";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/**
 * The command bar is sticky at the top of the viewport, so an anchor target scrolled
 * flush to y=0 lands underneath it. Stop one bar-height short instead — matches the
 * `scroll-margin-top` that covers the no-JS and reduced-motion paths.
 */
const COMMAND_BAR_HEIGHT = 67;

/**
 * Renders no markup: with `root`, Lenis takes over the document scroller, so this
 * sits as a sibling of the page rather than wrapping it. Mounting it as a wrapper
 * would remount the whole tree once the reduced-motion check resolves, restarting
 * every canvas animation on the page.
 */
export function SmoothScroll() {
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setEnabled(!query.matches);

		sync();
		query.addEventListener("change", sync);
		return () => query.removeEventListener("change", sync);
	}, []);

	// Reduced motion: never instantiate Lenis, leave the native scroller alone.
	// `scroll-behavior` is already forced back to `auto` for those users in CSS.
	if (!enabled) return null;

	return (
		<ReactLenis
			root
			options={{
				anchors: { offset: -COMMAND_BAR_HEIGHT },
				lerp: 0.09,
				// The page is long and mostly text; a touch under 1:1 keeps the wheel
				// from outrunning the interpolation on a trackpad flick.
				wheelMultiplier: 0.9,
			}}
		/>
	);
}
