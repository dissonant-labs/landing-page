import { SectionMarker } from "./section-marker";

const CAPABILITIES = [
	{
		idx: "C-01",
		title: "MVP and full product builds",
		copy: "From MVP to production platform. Real architecture, real tests, and code that survives its first thousand users, not just its demo.",
	},
	{
		idx: "C-02",
		title: "Knowledge retrieval systems",
		copy: "Everything your company knows, made answerable in plain language. Search that understands intent, not keywords, and never retires.",
	},
	{
		idx: "C-03",
		title: "Legacy system integration",
		copy: "The ERP, the mainframe and the spreadsheet quietly running the company, wired into everything modern without ripping out what works.",
	},
	{
		idx: "C-04",
		title: "Agents and internal copilots",
		copy: "Systems that do the work, not just answer questions. Triage, research, reporting and follow-up, run against your own data and rules.",
	},
	{
		idx: "C-05",
		title: "Computer vision and NLP",
		copy: "Software that reads what your business runs on: documents, forms, images, email and speech turned into data your systems can act on.",
	},
	{
		idx: "C-06",
		title: "Go-to-market systems",
		copy: "Software your sales and marketing teams run themselves. Pipeline, outbound, enrichment and reporting built around how you actually sell.",
	},
];

export function Capability() {
	return (
		<section id="capability">
			<div className="wrap">
				<SectionMarker label="Capability" />
				<div className="pad">
					<h2>What we actually build.</h2>
					<p className="lede">
						Not strategy decks. Working internal systems, deployed on your
						infrastructure, running your business. Engineered to hold under load
						and pass your security review, not prompted together until the demo
						runs.
					</p>
					{/* biome-ignore lint/nursery/useSortedClasses: design-system classes, not Tailwind utilities */}
					<div className="grid grid-3">
						{CAPABILITIES.map((capability) => (
							<div className="cell" key={capability.idx}>
								<div className="idx">{capability.idx}</div>
								<h3>{capability.title}</h3>
								<p>{capability.copy}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
