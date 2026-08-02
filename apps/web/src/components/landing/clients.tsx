type Client = {
	name: string;
	src: string;
	/* Optical balance. The marks range from a near-square lockup (BOIP, 1.95:1)
	   to long wordmarks (Keepbook, 5.9:1), so matching them on height alone makes
	   the wide ones dominate. Each scale nudges the shared cap until the logos
	   read as the same visual weight. */
	scale?: number;
	/* Anchor for the client's write-up. Present only on the four engagements we
	   publish, so the badge slot renders empty for the rest and every mark stays
	   on the same baseline. */
	caseStudy?: string;
};

const CLIENTS: Client[] = [
	{ name: "Hadrian", src: "/clients/hadrian.png", scale: 0.68 },
	{ name: "360Talent", src: "/clients/360talent.svg", scale: 1.09 },
	{
		name: "KVK",
		src: "/clients/kvk.png",
		scale: 0.72,
		caseStudy: "#approach",
	},
	{
		name: "Keepbook",
		src: "/clients/keepbook.svg",
		scale: 0.76,
		caseStudy: "#approach",
	},
	{
		name: "BOIP",
		src: "/clients/boip.png",
		scale: 1.9,
		caseStudy: "#approach",
	},
	{ name: "Adriel", src: "/clients/adriel.png", scale: 0.98 },
	{
		name: "GenPage",
		src: "/clients/genpage.png",
		scale: 1.04,
		caseStudy: "#approach",
	},
	{ name: "Hessian Labs", src: "/clients/hessian-labs.png", scale: 1.34 },
];

export function Clients() {
	return (
		<div className="clients">
			<span className="mono">Built for</span>
			<div className="logo-wall">
				{CLIENTS.map((client) => (
					<div className="cl" key={client.name}>
						<div className="cl-mark">
							<img
								src={client.src}
								alt={client.name}
								style={
									client.scale
										? ({ "--s": client.scale } as React.CSSProperties)
										: undefined
								}
							/>
						</div>
						<div className="cl-cs">
							{client.caseStudy && (
								<a
									href={client.caseStudy}
									aria-label={`${client.name} case study`}
								>
									Case study
									<span className="arw" aria-hidden="true">
										&rsaquo;
									</span>
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
