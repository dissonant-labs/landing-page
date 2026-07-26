"use client";

import { useEffect } from "react";

/**
 * Dev-only overlay: alt-click any element on the page to copy its source
 * context for a coding agent. Mounted from the root layout behind a
 * NODE_ENV check, so the import never reaches a production bundle.
 */
export function ReactGrab() {
	useEffect(() => {
		// Checked inside the effect, not just at the call site: NODE_ENV is
		// inlined at build time, so this makes the import statically
		// unreachable and keeps it out of the production chunk graph.
		if (process.env.NODE_ENV !== "development") return;
		if (window.__reactGrabStarted) return;
		window.__reactGrabStarted = true;
		import("react-grab").then(({ init }) => init());
	}, []);

	return null;
}

declare global {
	interface Window {
		__reactGrabStarted?: boolean;
	}
}
