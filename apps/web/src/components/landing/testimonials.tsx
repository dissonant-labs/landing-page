"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SectionMarker } from "./section-marker";

type Testimonial = {
	quote: string;
	role: string;
	org: string;
};

/* PLACEHOLDER COPY — not real client statements. Attribution is deliberately
   role-and-sector only, matching the anonymised case studies, so nothing here
   reads as a quote from a named person until real ones replace it. */
const TESTIMONIALS: Testimonial[] = [
	{
		quote:
			"Our integrator quoted eleven months and $1.4M. Dissonant had my estimators quoting live in four weeks, on the pricing rules we already trusted. The eleven-month proposal is still in a drawer.",
		role: "Operations Director",
		org: "Industrial distribution · 240 staff",
	},
	{
		quote:
			"I had budgeted three months of my team's time. They used nine hours of it. That was the moment I stopped treating this as an IT project and started treating it as the business.",
		role: "Managing Director",
		org: "Logistics · 90 staff",
	},
	{
		quote:
			"Forty years of drawings lived in one man's head. He retired in March. The knowledge did not leave with him, and that alone paid for the build twice over.",
		role: "Head of Engineering",
		org: "Precision manufacturing",
	},
	{
		quote:
			"They handed over the source, the documentation and the training, and then they actually left. A file format changed in October. I emailed, got an answer the same day, and no invoice. That still surprises me.",
		role: "Chief Operating Officer",
		org: "Valve manufacturing · 4 sites",
	},
];

const COUNT = TESTIMONIALS.length;
const AUTOPLAY_MS = 7000;
const SWIPE_PX = 40;

export function Testimonials() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const touchX = useRef<number | null>(null);

	const go = useCallback(
		(delta: number) => setIndex((prev) => (prev + delta + COUNT) % COUNT),
		[],
	);

	/* Advances on its own until the reader engages: hovering, focusing or
	   dragging pins it, and a reduced-motion preference stops it outright. */
	useEffect(() => {
		if (paused) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = setInterval(
			() => setIndex((prev) => (prev + 1) % COUNT),
			AUTOPLAY_MS,
		);
		return () => clearInterval(timer);
	}, [paused]);

	return (
		<section id="testimonials">
			<div className="wrap">
				<SectionMarker label="Testimonials" />
				<div className="pad">
					<h2>They own it now.</h2>
					<p className="lede">
						Four engagements, four systems still in production, none of them
						paying us a subscription. Said by the people who signed the invoice.
					</p>

					<section
						className="tst"
						aria-roledescription="carousel"
						aria-label="Client testimonials"
						onMouseEnter={() => setPaused(true)}
						onMouseLeave={() => setPaused(false)}
						onFocus={() => setPaused(true)}
						onBlur={() => setPaused(false)}
						onKeyDown={(event) => {
							if (event.key === "ArrowLeft") {
								event.preventDefault();
								go(-1);
							}
							if (event.key === "ArrowRight") {
								event.preventDefault();
								go(1);
							}
						}}
						onTouchStart={(event) => {
							touchX.current = event.touches[0].clientX;
						}}
						onTouchEnd={(event) => {
							if (touchX.current === null) return;
							const dx = event.changedTouches[0].clientX - touchX.current;
							if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1);
							touchX.current = null;
						}}
					>
						<div className="tst-head">
							<span className="mono">Testimonial</span>
							<span className="tst-idx mono">
								{String(index + 1).padStart(2, "0")}
								<i>/</i>
								{String(COUNT).padStart(2, "0")}
							</span>
						</div>

						{/* Every slide is rendered into the same grid cell, so the box
						    always stands at the height of the longest quote and never
						    jumps as it advances. No per-breakpoint min-height to keep in
						    sync with the copy. */}
						<div className="tst-body" aria-live="polite">
							{TESTIMONIALS.map((item, slide) => (
								<figure
									key={item.org}
									className={slide === index ? "tst-slide on" : "tst-slide"}
									aria-hidden={slide !== index}
								>
									<blockquote className="tst-quote">{item.quote}</blockquote>
									<figcaption className="tst-who">
										<span className="tst-role">{item.role}</span>
										<span className="tst-org mono">{item.org}</span>
									</figcaption>
								</figure>
							))}
						</div>

						<div className="tst-foot">
							<div className="tst-dots">
								{TESTIMONIALS.map((item, dot) => (
									<button
										type="button"
										key={item.org}
										className={dot === index ? "on" : undefined}
										aria-label={`Testimonial ${dot + 1}`}
										aria-current={dot === index}
										onClick={() => setIndex(dot)}
									/>
								))}
							</div>
							<div className="tst-nav">
								<button
									type="button"
									aria-label="Previous testimonial"
									onClick={() => go(-1)}
								>
									&lsaquo;
								</button>
								<button
									type="button"
									aria-label="Next testimonial"
									onClick={() => go(1)}
								>
									&rsaquo;
								</button>
							</div>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}
