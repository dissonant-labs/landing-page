"use client";

import { useEffect } from "react";

/**
 * Drives every generated-ASCII surface on the page: the dual-trace phase
 * monitor, the flanking columns beside the hero and the case-study plates.
 * All of them are measured against the live monospace metrics, so the engine
 * waits for the webfont before the first paint and re-fits on resize.
 */

const RAMP = " ..::--==++**##$$";
const TRACE_ROWS = 7;
const FLANK_HEIGHT = 840;

/**
 * Phase units per second. The engine used to advance a flat 0.05 per animation
 * frame, so the whole page ran at the refresh rate: 60Hz displays got the
 * intended speed while 120Hz ones (ProMotion, and any browser that does not cap
 * rAF at 60) ran it at double. 0.05 * 60 keeps the original 60Hz pacing.
 */
const PHASE_PER_SEC = 3;
/** Ignore gaps longer than this (backgrounded tab) instead of jumping ahead. */
const MAX_STEP = 0.1;

const WAVES = [
	{ amp: 0.16, freq: 0.052, spd: 0.42, sig: 2.4, ph: 0 },
	{ amp: 0.11, freq: 0.079, spd: -0.31, sig: 1.8, ph: 2.1 },
	{ amp: 0.21, freq: 0.034, spd: 0.22, sig: 3.2, ph: 4.4 },
];

/** Width of a single monospace cell, measured from the element's own font. */
function cellSize(el: Element) {
	const cs = getComputedStyle(el);
	const probe = document.createElement("span");
	probe.style.cssText = `position:absolute;visibility:hidden;white-space:pre;font-family:${cs.fontFamily};font-size:${cs.fontSize};line-height:${cs.lineHeight}`;
	probe.textContent = "0000000000";
	document.body.appendChild(probe);
	const rect = probe.getBoundingClientRect();
	document.body.removeChild(probe);
	return { width: rect.width / 10, height: rect.height };
}

function trace(
	w: number,
	h: number,
	freq: number,
	phase: number,
	glyph: string,
) {
	const g: string[][] = [];
	for (let i = 0; i < h; i++) {
		g.push(new Array(w).fill(" "));
	}
	let prev: number | null = null;
	for (let x = 0; x < w; x++) {
		const v = Math.sin((x / w) * Math.PI * 2 * freq + phase);
		const y = Math.round((1 - (v * 0.5 + 0.5)) * (h - 1));
		if (prev !== null) {
			const lo = Math.min(prev, y);
			const hi = Math.max(prev, y);
			for (let i = lo; i <= hi; i++) {
				g[i][x] = glyph;
			}
		} else {
			g[y][x] = glyph;
		}
		prev = y;
	}
	return g.map((row) => row.join("")).join("\n");
}

function artField(cols: number, rows: number, mode: number) {
	const out: string[] = [];
	for (let y = 0; y < rows; y++) {
		let line = "";
		for (let x = 0; x < cols; x++) {
			const nx = x / cols;
			const ny = y / rows;
			let v = 0;
			let h: number;
			if (mode === 0) {
				v = 0.5 + 0.5 * Math.sin(ny * Math.PI * 9);
				v *= x % 9 < 6 ? 1 : 0.3;
				v *= 0.3 + 0.7 * Math.sin(nx * Math.PI);
			} else if (mode === 1) {
				const bx = Math.floor(x / 6);
				const by = Math.floor(y / 3);
				h = Math.abs((Math.sin(bx * 12.9898 + by * 78.233) * 43758.5453) % 1);
				v = h * 0.95 * (0.35 + 0.65 * Math.sin(nx * Math.PI));
			} else if (mode === 2) {
				h = Math.abs((Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1);
				const dx = (nx - 0.5) * 1.7;
				const dy = (ny - 0.5) * 1.7;
				v = h * Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy)) * 2.0;
			} else {
				const a = 0.5 + 0.34 * Math.sin(nx * Math.PI * 4);
				const b = 0.5 + 0.34 * Math.sin(nx * Math.PI * 4 + 2.3);
				const d1 = ny - a;
				const d2 = ny - b;
				v =
					(Math.exp(-(d1 * d1) / 0.004) + Math.exp(-(d2 * d2) / 0.004)) * 0.85;
				v *= 0.35 + 0.65 * Math.sin(nx * Math.PI);
			}
			line += RAMP.charAt(
				Math.max(0, Math.min(RAMP.length - 1, Math.floor(v * RAMP.length))),
			);
		}
		out.push(line);
	}
	return out.join("\n");
}

function blob(time: number, cols: number, rows: number, mirror: boolean) {
	const out: string[] = [];
	for (let y = 0; y < rows; y++) {
		const cx: number[] = [];
		for (const wave of WAVES) {
			const base = mirror ? cols * 0.34 : cols * 0.66;
			cx.push(
				base +
					Math.sin(y * wave.freq + time * wave.spd + wave.ph) * cols * wave.amp,
			);
		}
		let line = "";
		for (let x = 0; x < cols; x++) {
			let v = 0;
			for (let i = 0; i < WAVES.length; i++) {
				const d = x - cx[i];
				const sg = WAVES[i].sig;
				v += Math.exp(-(d * d) / (2 * sg * sg));
			}
			const edge = mirror ? x / cols : 1 - x / cols;
			v *= 0.3 + 0.95 * edge;
			line += RAMP.charAt(
				Math.min(RAMP.length - 1, Math.floor(v * RAMP.length)),
			);
		}
		out.push(line);
	}
	return out.join("\n");
}

export function AsciiEngine() {
	useEffect(() => {
		const nodes = {
			traceA: document.getElementById("traceA"),
			traceB: document.getElementById("traceB"),
			readoutDelta: document.getElementById("ro-delta"),
			readoutState: document.getElementById("ro-state"),
			readoutMode: document.getElementById("ro-mode"),
			flankL: document.getElementById("flankL"),
			flankR: document.getElementById("flankR"),
		};
		const footDelta = document.getElementById("footDelta");

		if (Object.values(nodes).some((node) => node === null)) return;

		const traceA = nodes.traceA as HTMLElement;
		const traceB = nodes.traceB as HTMLElement;
		const readoutDelta = nodes.readoutDelta as HTMLElement;
		const readoutState = nodes.readoutState as HTMLElement;
		const readoutMode = nodes.readoutMode as HTMLElement;
		const flankL = nodes.flankL as HTMLElement;
		const flankR = nodes.flankR as HTMLElement;

		const plates = Array.from(document.querySelectorAll<HTMLElement>(".b-art"));
		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		let cancelled = false;
		let raf = 0;
		let resizeTimer: ReturnType<typeof setTimeout> | undefined;
		let cols = 100;
		let flankCols = 26;
		let flankRows = 70;
		let t = 0;
		let lastFlankFrame = 0;
		let lastFrame = 0;

		function fitTraces() {
			const parent = traceA.parentElement;
			if (!parent) return;
			const cell = cellSize(traceA);
			cols = Math.max(
				30,
				Math.floor(parent.getBoundingClientRect().width / cell.width),
			);
		}

		function fitFlanks() {
			const cell = cellSize(flankL);
			flankCols = Math.max(
				10,
				Math.floor(flankL.getBoundingClientRect().width / cell.width),
			);
			flankRows = Math.ceil(FLANK_HEIGHT / cell.height) + 1;
		}

		function drawFlanks(time: number) {
			flankL.textContent = blob(time, flankCols, flankRows, true);
			flankR.textContent = blob(time + 3.1, flankCols, flankRows, false);
		}

		function drawPlates() {
			plates.forEach((plate, i) => {
				const box = plate.parentElement?.getBoundingClientRect();
				if (!box?.width) return;
				const cell = cellSize(plate);
				const plateCols = Math.max(12, Math.ceil(box.width / cell.width));
				const plateRows = Math.max(6, Math.ceil(box.height / cell.height));
				plate.textContent = artField(plateCols, plateRows, i % 4);
			});
		}

		function frame(ts: number) {
			const dt = lastFrame
				? Math.min((ts - lastFrame) / 1000, MAX_STEP)
				: 1 / 60;
			lastFrame = ts;
			const cycle = (Math.sin(t * 0.16) + 1) / 2;
			const phase = Math.PI * cycle;
			traceA.textContent = trace(cols, TRACE_ROWS, 3, t * 0.5, ".");
			traceB.textContent = trace(cols, TRACE_ROWS, 3, t * 0.5 + phase, ".");
			const deg = Math.round((phase * 180) / Math.PI);
			readoutDelta.textContent = `${deg}°`;
			const locked = deg < 14;
			readoutState.textContent = locked ? "Aligned" : "Dissonant";
			readoutState.style.color = locked ? "var(--ink)" : "var(--red)";
			readoutMode.textContent = locked ? "· in phase" : "· out of phase";
			if (footDelta) footDelta.textContent = `${deg}°`;
			if (ts - lastFlankFrame > 110 && flankL.offsetParent !== null) {
				drawFlanks(t * 1.6);
				lastFlankFrame = ts;
			}
			t += dt * PHASE_PER_SEC;
			raf = requestAnimationFrame(frame);
		}

		function init() {
			if (cancelled) return;
			fitTraces();
			traceA.textContent = trace(cols, TRACE_ROWS, 3, 0, ".");
			traceB.textContent = trace(cols, TRACE_ROWS, 3, Math.PI, ".");
			if (flankL.offsetParent !== null) fitFlanks();
			drawFlanks(0);
			drawPlates();
			if (reduce) {
				readoutDelta.textContent = "180°";
				readoutState.textContent = "Dissonant";
				readoutState.style.color = "var(--red)";
				readoutMode.textContent = "· out of phase";
				if (footDelta) footDelta.textContent = "180°";
				return;
			}
			raf = requestAnimationFrame(frame);
		}

		function onResize() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				if (cancelled) return;
				fitTraces();
				if (flankL.offsetParent !== null) {
					fitFlanks();
					drawFlanks(t * 1.6);
				}
				drawPlates();
			}, 200);
		}

		if (document.fonts?.ready) {
			document.fonts.ready.then(init);
		} else {
			window.addEventListener("load", init);
		}
		window.addEventListener("resize", onResize);

		return () => {
			cancelled = true;
			cancelAnimationFrame(raf);
			clearTimeout(resizeTimer);
			window.removeEventListener("resize", onResize);
			window.removeEventListener("load", init);
		};
	}, []);

	return null;
}
