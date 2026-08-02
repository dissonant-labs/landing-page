type Client = {
	name: string;
	src: string;
	/* Optical balance. The marks range from a near-square lockup (BOIP, 1.95:1)
	   to long wordmarks (Keepbook, 5.9:1), so matching them on height alone makes
	   the wide ones dominate. Each scale nudges the shared cap until the logos
	   read as the same visual weight. */
	scale?: number;
};

const CLIENTS: Client[] = [
	{ name: "Hadrian", src: "/clients/hadrian.png", scale: 0.8 },
	{ name: "360Talent", src: "/clients/360talent.svg", scale: 1.1 },
	{ name: "KVK", src: "/clients/kvk.png", scale: 0.8 },
	{ name: "Keepbook", src: "/clients/keepbook.svg", scale: 0.8 },
	{ name: "BOIP", src: "/clients/boip.png", scale: 1.5 },
	{ name: "Adriel", src: "/clients/adriel.png" },
	{ name: "GenPage", src: "/clients/genpage.png", scale: 0.9 },
	{ name: "Hessian Labs", src: "/clients/hessian-labs.png", scale: 1.05 },
];

export function Clients() {
	return (
		<div className="clients">
			<span className="mono">Built for</span>
			<div className="logo-wall">
				{CLIENTS.map((client) => (
					<div className="cl" key={client.name}>
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
				))}
			</div>
		</div>
	);
}
