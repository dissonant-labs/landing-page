import { SectionMarker } from "./section-marker";

type Profile = {
	tag: string;
	title: string;
	body: string;
	signals: string[];
	cta: { copy: string; label: string };
};

const PROFILES: Profile[] = [
	{
		tag: "Profile 01 — measurable loss",
		title: "You already feel it.",
		body: "A competitor turns quotes around in an hour. You take three days, and you know exactly why: four people re-keying the same order into three systems that were never meant to talk. The loss is already on your P&L. You just don't have anyone in the building who can fix it.",
		signals: [
			"Deals lost on response time, not price",
			"Headcount growing faster than revenue",
			"One retiring employee understands the database",
			"Six SaaS subscriptions, none integrated",
		],
		cta: {
			copy: "You already know what's broken. Tell us in a few lines and we'll scope it — fixed price, fixed timeline, in writing.",
			label: "Scope my project",
		},
	},
	{
		tag: "Profile 02 — invisible ceiling",
		title: "You can't see it yet.",
		body: "You read about AI constantly and none of it maps to your business. Nobody on your team has built with it, so nobody can tell you what's actually on the table versus what's noise. The gap isn't costing you visibly — which is precisely the problem. We put a number on it in week one.",
		signals: [
			"No internal benchmark for what's possible",
			"Vendors selling seats, not outcomes",
			"Core processes unchanged in a decade",
			"Institutional knowledge trapped in people",
		],
		cta: {
			copy: "You don't know what's possible yet. We ask the questions, map your workflows and come back with what's worth building.",
			label: "Run the analysis",
		},
	},
];

export function TargetProfiles() {
	return (
		<section id="gap">
			<div className="wrap">
				<SectionMarker label="Target profile" />
				<div className="pad">
					<h2>Two kinds of CEO call us.</h2>
					<p className="lede">
						Both run real companies with real revenue and internal systems that
						stopped keeping up somewhere around 2014. The only difference is
						whether the pain is visible yet.
					</p>
					<div className="profiles">
						{PROFILES.map((profile) => (
							<div className="profile" key={profile.tag}>
								<span className="tag">{profile.tag}</span>
								<h3>{profile.title}</h3>
								<p>{profile.body}</p>
								<ul>
									{profile.signals.map((signal) => (
										<li key={signal}>{signal}</li>
									))}
								</ul>
								<div className="p-cta">
									<p>{profile.cta.copy}</p>
									<a href="#intake" className="btn-sm">
										{profile.cta.label}
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
