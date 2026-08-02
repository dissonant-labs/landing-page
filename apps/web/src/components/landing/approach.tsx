import { SectionMarker } from "./section-marker";

const CREDENTIALS = [
	{
		label: "01 · We have built the products",
		copy: "Twenty years across SaaS, growth and AI/ML. We have founded, funded and shipped products ourselves, so we know what separates a demo from software you can depend on.",
	},
	{
		label: "02 · We deploy in real companies",
		copy: "We have delivered AI systems through security reviews, legacy databases and complex internal operations. Not in a lab. Not as a proof of concept. Working software used by real teams.",
	},
	{
		label: "03 · We know when not to use AI",
		copy: "AI is a tool, not the strategy. We use it where it creates real leverage and build conventional software where that is the better answer. The goal is not novelty. It is a faster, stronger operation.",
	},
];

type CaseStudy = {
	wide: boolean;
	sector: string;
	title: string;
	copy: string;
	result: string;
};

const CASE_STUDIES: CaseStudy[] = [
	{
		wide: true,
		sector: "Industrial distribution · 240 staff",
		title: "Quoting engine over a 1990s parts catalogue",
		copy: "Inbound RFQs arrive as PDFs, faxes and email threads. The system reads them, matches parts against their legacy catalogue, applies their pricing rules and returns a formatted quote for a human to approve.",
		result: "Three days → nineteen minutes",
	},
	{
		wide: false,
		sector: "Logistics · 90 staff",
		title: "Document intake into a legacy TMS",
		copy: "Bills of lading and customs paperwork read, validated and posted automatically.",
		result: "Four FTE of re-keying removed",
	},
	{
		wide: false,
		sector: "Precision manufacturing",
		title: "Forty years of drawings, searchable",
		copy: "Every job file, tolerance sheet and revision queryable in plain language before the last engineer retired.",
		result: "Knowledge retained",
	},
	{
		wide: true,
		sector: "Valve manufacturing · 4 sites",
		title: "Scheduling off the spreadsheet nobody understood",
		copy: "The planning sheet that ran four sites was rebuilt as a real system with the original logic intact, then extended to forecast load across all of them. No rip-and-replace, no retraining the floor.",
		result: "On-time delivery 71% → 94%",
	},
];

export function Approach() {
	return (
		<section id="approach">
			<div className="wrap">
				<SectionMarker label="Approach" />
				<div className="pad">
					<h2>Your operation, at AI speed.</h2>
					<p className="lede">
						Most firms can build a good demo. Very few can make it survive your
						business. We start with the operation, find the real bottleneck, and
						build the right solution: AI when it creates leverage, conventional
						software when it does not. Then we integrate it with the systems you
						already use, get it into production, and stay accountable after
						launch.
					</p>
					<div className="pill-row">
						{CREDENTIALS.map((credential) => (
							<div className="pill" key={credential.label}>
								<span className="n">{credential.label}</span>
								<p>{credential.copy}</p>
							</div>
						))}
					</div>
					<div className="bento">
						{CASE_STUDIES.map((study) => (
							<div className={study.wide ? "b b-wide" : "b"} key={study.title}>
								<div className="b-img">
									<pre className="b-art" aria-hidden="true" />
								</div>
								<div className="b-body">
									<div className="sec">{study.sector}</div>
									<h3>{study.title}</h3>
									<p>{study.copy}</p>
									<div className="res">{study.result}</div>
									<a className="cs" href="#intake">
										Read the case study
									</a>
								</div>
							</div>
						))}
					</div>

					<div className="callout">
						<h3>Two operators, and a network behind them.</h3>
						<p>
							We work with a standing network of vetted engineers, designers and
							specialists we have shipped with before. When a project needs more
							scale, or you need it faster than two people can move, we bring
							them in. Vetted already, no search, no ramp-up. They are managed
							by us and carried by us, and the cost sits inside the fixed price
							we quoted before the work started. You never receive a second
							invoice and you never manage a contractor you didn't choose.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
