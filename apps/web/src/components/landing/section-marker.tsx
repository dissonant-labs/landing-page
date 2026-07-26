export function SectionMarker({ label }: { label: string }) {
	return (
		<div className="marker">
			<span className="tick" />
			<span className="mono">{label}</span>
			<span className="line" />
		</div>
	);
}
