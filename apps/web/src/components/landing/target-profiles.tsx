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
		tag: "Profile 01 · measurable loss",
		title: "You already feel it.",
		body: "The business is growing, but too much of that growth is being absorbed by manual work, extra headcount and disconnected systems. Your team is busy, but too much of their time goes into keeping the machine running instead of moving the business forward. You know what is broken. You just do not have anyone in the building who can fix it.",
		signals: [
			"Staff stuck on repetitive work that creates little value",
			"Headcount growing just to keep up with existing volume",
			"One retiring employee understands the database",
			"Core processes unchanged in a decade",
		],
		cta: {
			copy: "You already know what's broken. Tell us in a few lines and we'll scope it. Fixed price, fixed timeline, in writing.",
			label: "Scope my project",
		},
	},
	{
		tag: "Profile 02 · invisible ceiling",
		title: "You can't see it yet.",
		body: "You read about AI constantly, but none of it maps cleanly to your business. You know it can make your company faster and leaner, yet there is no obvious place to start. Off-the-shelf tools rarely fit how you operate, and nobody internally has the time to make it real. We identify where the value is and put a number on it in week one.",
		signals: [
			"No internal benchmark for what's possible",
			"SaaS vendors selling seats, not outcomes",
			"Internal experiments that never become working systems",
			"Competitors improving while you are still deciding where to begin",
		],
		cta: {
			copy: "You don't know where to start yet. Tell us how the business runs and we'll find it. Fixed price, fixed timeline, in writing.",
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
