import { Clients } from "./clients";

export function Hero() {
	return (
		<div className="hero-zone">
			<pre className="flank flank-l" id="flankL" aria-hidden="true" />
			<pre className="flank flank-r" id="flankR" aria-hidden="true" />
			<header className="hero">
				<div className="eyebrow">AI transformation task force</div>
				<h1>
					We build once.
					<br className="brk" /> You own it <span className="red">forever</span>
					.
				</h1>
				<p className="sub">
					<b>
						Custom AI systems for established companies ready to modernize how
						they run.
					</b>{" "}
					Four weeks to a working pilot, then the keys are yours. One fixed fee.
					No subscriptions to renew.
				</p>
				<div className="cta-row">
					<a href="#deployment" className="btn">
						See how we work
					</a>
					<a href="#intake" className="btn btn-solid">
						Request a scoped proposal
					</a>
				</div>
			</header>

			<Clients />
		</div>
	);
}
