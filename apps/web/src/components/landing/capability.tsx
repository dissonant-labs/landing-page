import { SectionMarker } from "./section-marker";

const CAPABILITIES = [
	{
		idx: "C-01",
		title: "Quoting and pricing engines",
		copy: "Spec sheets, RFQs and email threads in. Priced, formatted quotes out. Days compress to minutes without losing your pricing logic.",
	},
	{
		idx: "C-02",
		title: "Document and order intake",
		copy: "Purchase orders, invoices and supplier PDFs read, validated and pushed into your ERP. No re-keying, no swivel-chair integration.",
	},
	{
		idx: "C-03",
		title: "Institutional memory",
		copy: "Forty years of drawings, contracts and job files made searchable in plain language, so knowledge stops walking out at retirement.",
	},
	{
		idx: "C-04",
		title: "Legacy system bridges",
		copy: "The AS/400, the Access database, the spreadsheet that quietly runs scheduling. We build around them rather than forcing a rip-and-replace.",
	},
	{
		idx: "C-05",
		title: "Internal agents and copilots",
		copy: "Tools your staff actually open: support triage, sales research, ops reporting. Built to your process, not a generic template.",
	},
	{
		idx: "C-06",
		title: "Go-to-market systems",
		copy: "Pipeline, outbound and reporting rebuilt with the same discipline. Optional, and only once the operational side is solid.",
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
						infrastructure, running your business.
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
