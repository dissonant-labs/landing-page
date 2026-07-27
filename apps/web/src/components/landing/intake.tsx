"use client";

import {
	HEADCOUNTS,
	type Headcount,
	type IntakeInput,
} from "@landing-page/api/intake-schema";
import { useMutation } from "@tanstack/react-query";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";

import { trpc } from "@/utils/trpc";

import { SectionMarker } from "./section-marker";

function readForm(form: HTMLFormElement): IntakeInput {
	const data = new FormData(form);
	const text = (field: string) => String(data.get(field) ?? "").trim();

	return {
		name: text("name"),
		company: text("company"),
		email: text("email"),
		headcount: text("headcount") as Headcount,
		sector: text("sector"),
		pain: text("pain"),
		fax: text("fax"),
	};
}

export function Intake() {
	const [submitted, setSubmitted] = useState(false);

	const submit = useMutation(
		trpc.intake.submit.mutationOptions({
			onSuccess: () => setSubmitted(true),
			onError: (error) => toast.error(error.message),
		}),
	);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (submitted) return;
		submit.mutate(readForm(event.currentTarget));
	}

	const pending = submit.isPending;

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
					<form
						className="form"
						id="intakeForm"
						onSubmit={handleSubmit}
						aria-busy={pending}
					>
						<div className="frow frow-2">
							<div className="fi">
								<label htmlFor="f-name">Name</label>
								<input
									id="f-name"
									name="name"
									type="text"
									placeholder="Full name"
									autoComplete="name"
									maxLength={120}
									required
									disabled={pending || submitted}
								/>
							</div>
							<div className="fi">
								<label htmlFor="f-co">Company</label>
								<input
									id="f-co"
									name="company"
									type="text"
									placeholder="Legal or trading name"
									autoComplete="organization"
									maxLength={160}
									required
									disabled={pending || submitted}
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
									autoComplete="email"
									maxLength={200}
									required
									disabled={pending || submitted}
								/>
							</div>
							<div className="fi">
								<label htmlFor="f-size">Headcount</label>
								<select
									id="f-size"
									name="headcount"
									defaultValue={HEADCOUNTS[0]}
									disabled={pending || submitted}
								>
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
									maxLength={300}
									required
									disabled={pending || submitted}
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
									maxLength={5000}
									required
									disabled={pending || submitted}
								/>
							</div>
						</div>
						<div className="hp" aria-hidden="true">
							<label htmlFor="f-fax">Fax</label>
							<input
								id="f-fax"
								name="fax"
								type="text"
								tabIndex={-1}
								autoComplete="off"
							/>
						</div>
						<div className="fsubmit">
							<p
								className={submitted ? "fnote fnote-ok" : "fnote"}
								aria-live="polite"
							>
								{submitted ? (
									<>
										Sent to team@dissonant.co.
										<br />
										We'll come back within two business days.
									</>
								) : (
									<>
										No pitch deck. No discovery call sequence.
										<br />A written response from Samy or Ceyhun.
									</>
								)}
							</p>
							<button
								type="submit"
								className="btn btn-solid"
								disabled={pending || submitted}
							>
								{submitted ? "Received" : pending ? "Sending…" : "Send"}
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
