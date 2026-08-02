import { Wordmark } from "./logo";

export function SiteFooter() {
	return (
		<footer>
			<div className="foot-in">
				<div>
					<div className="logo foot-logo" style={{ marginBottom: "14px" }}>
						<Wordmark />
					</div>
					<div
						className="mono"
						style={{ letterSpacing: ".06em", textTransform: "none" }}
					>
						Dissonance <span id="footDelta">…</span> · dissonant.co
					</div>
				</div>
				<div className="foot-links">
					<a href="tel:+821057921611">+82 10 5792 1611</a>
					<a href="mailto:team@dissonant.co">team@dissonant.co</a>
				</div>
			</div>
		</footer>
	);
}
