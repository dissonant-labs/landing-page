import { SectionMarker } from "./section-marker";

const COMPARISON = [
	{
		dimension: "Cost structure",
		them: "Per seat, per month, forever",
		us: "One fixed project fee",
	},
	{
		dimension: "Data residency",
		them: "Their cloud, their terms",
		us: "Your infrastructure, your terms",
	},
	{
		dimension: "Source code",
		them: "Licensed to you",
		us: "Transferred to you",
	},
	{
		dimension: "Roadmap",
		them: "Their priorities, their timeline",
		us: "Built to your requirements",
	},
	{
		dimension: "Renewal leverage",
		them: "Reset every twelve months",
		us: "Nothing to renew",
	},
	{
		dimension: "If we disappear",
		them: "Your system stops",
		us: "Your system keeps running",
	},
	{
		dimension: "After handover",
		them: "Support tier, ticket queue",
		us: "Our direct numbers, no meter running",
	},
	{
		dimension: "Cost in year three",
		them: "Compounding",
		us: "Zero",
	},
];

const METRICS = [
	{
		value: "19 min",
		label: "Quote turnaround at Hartwell & Sons, down from three days",
	},
	{
		value: "$412K",
		label: "Annual re-keying cost removed at Meridian Freight",
	},
	{
		value: "94%",
		label: "On-time delivery at Pemberton Valve, up from 71%",
	},
];

export function Terms() {
	return (
		<section id="terms">
			<div className="wrap">
				<SectionMarker label="Terms of engagement" />
				<div className="pad">
					<h2>You own it. Completely.</h2>
					<p className="lede">
						The software industry sells you a tenancy. We build you an asset.
						Pilots start at $15K, and full builds are quoted to scope — always
						as one fixed number agreed before any work begins, network resources
						included.
					</p>
					<div className="tbl-scroll">
						<table>
							<thead>
								<tr>
									<th scope="col">Dimension</th>
									<th scope="col">Software vendor</th>
									<th scope="col">Dissonant</th>
								</tr>
							</thead>
							<tbody>
								{COMPARISON.map((row) => (
									<tr key={row.dimension}>
										<th scope="row">{row.dimension}</th>
										<td className="them">{row.them}</td>
										<td className="us">{row.us}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="metrics">
						{METRICS.map((metric) => (
							<div className="metric" key={metric.value}>
								<div className="v">{metric.value}</div>
								<div className="l">{metric.label}</div>
								<a className="cs" href="#intake">
									Read the case study
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
