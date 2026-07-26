"use client";

import { type FormEvent, useState } from "react";

import { SectionMarker } from "./section-marker";

const HEADCOUNTS = ["Under 50", "50 – 200", "200 – 1,000", "Over 1,000"];

export function Intake() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitted(true);
	}

	return (
		<section id="intake">
			<div className="wrap">
				<SectionMarker label="Intake" />
				<div className="pad">
					<h2>Tell us what's broken.</h2>
					<p className="lede">
						A few lines is enough. We take on a small number of engagements per
						quarter, and we'll come back within two business days with an honest
						read on whether it's worth scoping — or a straight no.
					</p>
					<form className="form" id="intakeForm" onSubmit={handleSubmit}>
						<div className="frow frow-2">
							<div className="fi">
								<label htmlFor="f-name">Name</label>
								<input
									id="f-name"
									name="name"
									type="text"
									placeholder="Full name"
									required
								/>
							</div>
							<div className="fi">
								<label htmlFor="f-co">Company</label>
								<input
									id="f-co"
									name="company"
									type="text"
									placeholder="Legal or trading name"
									required
								/>
							</div>
						</div>
						<div className="frow frow-2">
							<div className="fi">
								<label htmlFor="f-email">Work email</label>
								<input
									id="f-email"
									name="email"
									type="email"
									placeholder="name@company.com"
									required
								/>
							</div>
							<div className="fi">
								<label htmlFor="f-size">Headcount</label>
								<select id="f-size" name="headcount">
									{HEADCOUNTS.map((headcount) => (
										<option key={headcount}>{headcount}</option>
									))}
								</select>
							</div>
						</div>
						<div className="frow">
							<div className="fi">
								<label htmlFor="f-sector">Sector — what you make or move</label>
								<input
									id="f-sector"
									name="sector"
									type="text"
									placeholder="e.g. industrial distribution, 40 years, six depots"
									required
								/>
							</div>
						</div>
						<div className="frow">
							<div className="fi">
								<label htmlFor="f-pain">
									What's going wrong — in a few lines
								</label>
								<textarea
									id="f-pain"
									name="pain"
									placeholder="Describe it the way you'd describe it to your operations director. Two or three sentences is plenty. If you don't know what's wrong yet, say that instead — that's what the analysis is for."
									required
								/>
							</div>
						</div>
						<div className="fsubmit">
							<p className="fnote">
								No pitch deck. No discovery call sequence.
								<br />A written response from Samy or Ceyhun.
							</p>
							<button
								type="submit"
								className="btn btn-solid"
								disabled={submitted}
							>
								{submitted ? "Received" : "Send"}
							</button>
						</div>
					</form>
					<div className="alt">
						<div className="alt-i">
							<span className="mono">Rather just talk</span>
							<a href="tel:+821057921611">+82 10 5792 1611</a>
						</div>
						<div className="alt-i">
							<span className="mono">Rather book a slot</span>
							<a
								href="https://cal.com/dissonant"
								target="_blank"
								rel="noopener"
							>
								Twenty minutes with Samy
							</a>
						</div>
						<div className="alt-i">
							<span className="mono">Rather email</span>
							<a href="mailto:team@dissonant.co">team@dissonant.co</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
