import { Fragment } from "react";
import { LinkedInGlyph } from "./logo";
import { SectionMarker } from "./section-marker";

type Operator = {
	name: string;
	role: string;
	photo: string;
	linkedin: string;
	/* Framing for the portrait: zoom, then the point held at the centre of the
	   crop. Measured per photo; see .op-sig img. */
	framing?: { zoom: number; x: string; y: string };
	bio: string;
	/* Kept as parts rather than one pre-joined string so the separator is a real
	   element and can be toned down against the text it divides. */
	facts: { term: string; parts: string[] }[];
};

const OPERATORS: Operator[] = [
	{
		name: "Samy Barbier",
		role: "CEO · Scope & Delivery",
		photo: "/operators/samy-barbier.jpg",
		linkedin: "https://www.linkedin.com/in/samy-barbier/",
		framing: { zoom: 1.42, x: "57%", y: "36%" },
		bio: "Ten years in go-to-market, first as Head of Growth inside MarTech companies, then co-founding GenPage with Ceyhun and taking it through venture funding. Samy runs the first conversation and then runs the project: scope, UI and UX, and a weekly update you never have to chase. One name accountable for delivery, not a shared inbox.",
		facts: [
			{ term: "Before", parts: ["Head of Growth", "MarTech"] },
			{
				term: "Founded",
				parts: ["GenPage", "Venture-Funded SaaS"],
			},
			{
				term: "Owns",
				parts: ["Diagnostic", "Scope", "UI/UX", "Delivery"],
			},
		],
	},
	{
		name: "Ceyhun Cakir",
		role: "CTO · Architecture & Build",
		photo: "/operators/ceyhun-cakir.jpg",
		linkedin: "https://www.linkedin.com/in/ceyhuncakir/",
		framing: { zoom: 1.12, x: "48%", y: "44%" },
		bio: "Ten years in AI and ML engineering, most of it shipping internal systems inside large corporates, before co-founding GenPage with Samy as technical lead. He has already met your security review, your undocumented database and your one skeptical engineer. Ceyhun writes the code himself and directs our vetted network when a build needs more hands.",
		facts: [
			{ term: "Before", parts: ["AI/ML Engineering", "Large Corporates"] },
			{
				term: "Founded",
				parts: ["GenPage", "Venture-Funded SaaS"],
			},
			{
				term: "Owns",
				parts: ["Architecture", "Build", "Security", "Handover"],
			},
		],
	},
];

export function Operators() {
	return (
		<section id="operators">
			<div className="wrap">
				<SectionMarker label="Operators" />
				<div className="pad">
					<h2>Two operators. No junior bench.</h2>
					<p className="lede">
						Twenty years combined across SaaS, growth and AI/ML. The two people
						who scope your project are the two people who build it. We are both
						owners, so there is nobody to hand you off to.
					</p>
					<div className="ops">
						{OPERATORS.map((operator) => (
							<div className="op" key={operator.name}>
								<div className="op-id">
									<div className="op-sig">
										<img
											src={operator.photo}
											alt={operator.name}
											style={
												operator.framing
													? ({
															"--zoom": operator.framing.zoom,
															"--fx": operator.framing.x,
															"--fy": operator.framing.y,
														} as React.CSSProperties)
													: undefined
											}
										/>
									</div>
									<div>
										<h3>{operator.name}</h3>
										<div className="role">{operator.role}</div>
										<a
											className="op-li"
											href={operator.linkedin}
											target="_blank"
											rel="noopener"
										>
											<LinkedInGlyph /> LinkedIn
										</a>
									</div>
								</div>
								<p>{operator.bio}</p>
								<dl>
									{operator.facts.map((fact) => (
										<div key={fact.term}>
											<dt>{fact.term}</dt>
											<dd>
												{fact.parts.map((part, at) => (
													<Fragment key={part}>
														{at > 0 && (
															<span className="sep" aria-hidden="true">
																·
															</span>
														)}
														{part}
													</Fragment>
												))}
											</dd>
										</div>
									))}
								</dl>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
