import { SectionMarker } from "./section-marker";

type Stage = {
	lead: boolean;
	stage: string;
	title: string;
	duration: string;
	paragraphs: string[];
	price: { amount: string; caption: string };
};

const STAGES: Stage[] = [
	{
		lead: true,
		stage: "Stage 00",
		title: "Diagnostic",
		duration: "Week 1–2",
		paragraphs: [
			"We talk. If you already know what's broken, we scope it directly. If you don't, we run the analysis ourselves: we ask your team the questions that surface where the time and money are going, and map the workflows behind it.",
			"You get a written gap analysis: what's costing you, roughly what it's worth to fix, and what we'd build first. It's yours whether or not you continue.",
		],
		price: { amount: "No charge", caption: "No commitment either" },
	},
	{
		lead: false,
		stage: "Stage 01",
		title: "Pilot build",
		duration: "Four weeks",
		paragraphs: [
			"We build the single highest-value system from the diagnostic and put it into production with the people who'll use it. Not a demo, not a slide. A working tool your team opens on a Monday morning.",
			"Fixed price, agreed before we start. If it doesn't do what we said it would, you don't proceed to stage two.",
		],
		price: { amount: "From $15K", caption: "Fixed · scoped in week two" },
	},
	{
		lead: false,
		stage: "Stage 02",
		title: "Full build",
		duration: "Scoped after the pilot",
		paragraphs: [
			"Once the pilot is running and you've seen what it changed, we scope the rest: the connected systems, the harder integrations, the parts that needed the first win to justify.",
			"If scale or speed demands more hands, we pull from our vetted network, managed by us, inside the quoted price. Ends the same way every project ends: source code, documentation, training, and we step out. Reachable afterwards, on your side of the phone.",
		],
		price: { amount: "Custom", caption: "Quoted to scope · always fixed" },
	},
];

export function Deployment() {
	return (
		<section id="deployment">
			<div className="wrap">
				<SectionMarker label="Deployment" />
				<div className="pad">
					<h2>Prove it in four weeks. Scale it once you believe it.</h2>
					<p className="lede">
						You should not have to bet a six-figure budget on people you met
						last month. So the engagement is staged: a small, fixed-price pilot
						that puts one working system into your business, and a full build
						you only commission after you've watched the first one run.
					</p>

					<div className="stages">
						{STAGES.map((stage) => (
							<div
								className={stage.lead ? "stage lead" : "stage"}
								key={stage.stage}
							>
								<div className="st">{stage.stage}</div>
								<h3>{stage.title}</h3>
								<div className="dur">{stage.duration}</div>
								{stage.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
								<div className="price">
									<span className="amt">{stage.price.amount}</span>
									<span className="cap">{stage.price.caption}</span>
								</div>
							</div>
						))}
					</div>

					<div className="callout">
						<h3>Why we can move this fast</h3>
						<p>
							Two owners, no account layer and no discovery theatre. The person
							scoping your project is the person building it, which removes the
							translation step that makes agency timelines what they are. Where
							a project needs more hands we bring in our network, but we never
							bring in a layer between you and the build.
						</p>
					</div>
					<div className="callout">
						<h3>We leave. We don't disappear.</h3>
						<p>
							Handover means you stop paying us, not that you stop hearing from
							us. If something breaks in month four, if a supplier changes their
							file format, if a new person needs walking through it, you email
							or call the two people who built it and you get an answer. There
							is no ticket queue, no support tier and no invoice for a question.
							The point of this model is that you own a system that works, and a
							system nobody can ask about isn't one.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
