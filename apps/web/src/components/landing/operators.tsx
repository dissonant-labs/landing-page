import { LinkedInGlyph } from "./logo";
import { SectionMarker } from "./section-marker";

type Operator = {
	name: string;
	role: string;
	photo: string;
	linkedin: string;
	bio: string;
	facts: { term: string; detail: string }[];
};

const OPERATORS: Operator[] = [
	{
		name: "Samy Barbier",
		role: "CEO · Diagnosis, scope & delivery",
		photo: "/operators/samy-barbier.jpg",
		linkedin: "https://www.linkedin.com/in/samy-barbier/",
		bio: "Ten years in go-to-market, first as head of growth inside martech companies, then co-founding Genpage with Ceyhun and taking it through venture funding. Samy runs the first conversation, then runs the project. Scope discipline, UI and UX, weekly communication, and everything else that isn't code — so there is one person accountable for delivery rather than a shared inbox.",
		facts: [
			{ term: "Before", detail: "Head of growth, martech" },
			{
				term: "Founded together",
				detail: "Genpage — venture-funded martech SaaS",
			},
			{ term: "Owns", detail: "Diagnostic, scope, delivery, UI/UX, comms" },
		],
	},
	{
		name: "Ceyhun Cakir",
		role: "CTO · Architecture & build",
		photo: "/operators/ceyhun-cakir.jpg",
		linkedin: "https://www.linkedin.com/in/ceyhuncakir/",
		bio: "Ten years in AI and ML engineering, most of it delivering internal systems inside large corporates, before co-founding Genpage with Samy as its technical lead. He has already met your security review, your undocumented database and your one skeptical engineer. Ceyhun writes the code himself, and pulls in and directs our vetted network when a build needs more hands.",
		facts: [
			{ term: "Before", detail: "AI/ML engineering, large corporates" },
			{
				term: "Founded together",
				detail: "Genpage — venture-funded martech SaaS",
			},
			{ term: "Owns", detail: "Architecture, build, handover" },
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
						Twenty years of combined experience across SaaS, growth and AI/ML.
						The two people who scope your project are the two people who build
						it, and we are both owners — so neither of us can hand you off to an
						account manager.
					</p>
					<div className="ops">
						{OPERATORS.map((operator) => (
							<div className="op" key={operator.name}>
								<div className="op-id">
									<div className="op-sig">
										<img src={operator.photo} alt={operator.name} />
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
											<dd>{fact.detail}</dd>
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
