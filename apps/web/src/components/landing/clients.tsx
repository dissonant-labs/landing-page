import type { ReactNode } from "react";

type Client = {
	name: string;
	variant: string;
	mark: ReactNode;
};

const CLIENTS: Client[] = [
	{
		name: "Hartwell & Sons",
		variant: "cl s",
		mark: (
			<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
				<rect
					x="1"
					y="1"
					width="14"
					height="14"
					stroke="currentColor"
					strokeWidth="1.6"
					fill="none"
				/>
				<path d="M4 8h8" stroke="currentColor" strokeWidth="1.6" />
			</svg>
		),
	},
	{
		name: "Meridian Freight",
		variant: "cl",
		mark: (
			<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
				<path
					d="M8 1l7 4v6l-7 4-7-4V5z"
					stroke="currentColor"
					strokeWidth="1.5"
					fill="none"
				/>
			</svg>
		),
	},
	{
		name: "Castellan Steel",
		variant: "cl m",
		mark: (
			<svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
				<path
					d="M1 11L5 4l4 7M8 11l3-5 3 5"
					stroke="currentColor"
					strokeWidth="1.6"
					fill="none"
				/>
			</svg>
		),
	},
	{
		name: "Brandt Tooling",
		variant: "cl s",
		mark: (
			<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
				<path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.6" />
				<circle
					cx="8"
					cy="8"
					r="4"
					stroke="currentColor"
					strokeWidth="1.6"
					fill="none"
				/>
			</svg>
		),
	},
	{
		name: "Pemberton Valve",
		variant: "cl m",
		mark: (
			<svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
				<rect
					x="1.5"
					y="4"
					width="12"
					height="7"
					stroke="currentColor"
					strokeWidth="1.6"
					fill="none"
				/>
				<circle cx="5" cy="7.5" r="1.4" fill="currentColor" />
			</svg>
		),
	},
	{
		name: "Achterberg",
		variant: "cl",
		mark: (
			<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
				<path
					d="M2 12l4-8 4 8M10 12l3-6"
					stroke="currentColor"
					strokeWidth="1.6"
					fill="none"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "Delmarva Supply",
		variant: "cl w",
		mark: (
			<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
				<path
					d="M3 3h10v10H3z"
					stroke="currentColor"
					strokeWidth="1.6"
					fill="none"
				/>
				<path d="M6 6h4v4H6z" fill="currentColor" />
			</svg>
		),
	},
	{
		name: "Kestrel Logistics",
		variant: "cl s",
		mark: (
			<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
				<path
					d="M1 8c3.5-5 10.5-5 14 0-3.5 5-10.5 5-14 0z"
					stroke="currentColor"
					strokeWidth="1.5"
					fill="none"
				/>
			</svg>
		),
	},
];

export function Clients() {
	return (
		<div className="clients">
			<span className="mono">Built for</span>
			<div className="logo-wall">
				{CLIENTS.map((client) => (
					<div className={client.variant} key={client.name}>
						{client.mark}
						<span>{client.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
