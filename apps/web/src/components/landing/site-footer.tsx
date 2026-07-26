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
						Phase delta <span id="footDelta">—</span> · dissonant.co
					</div>
				</div>
				<div className="foot-links">
					<a href="tel:+33000000000">+33 0 00 00 00 00</a>
					<a href="mailto:hello@dissonant.co">hello@dissonant.co</a>
				</div>
			</div>
		</footer>
	);
}
