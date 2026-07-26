export function InterferenceMonitor() {
	return (
		<div className="scope">
			<div className="scope-in">
				<div className="scope-head">
					<div className="ro">
						Phase interference monitor
						<b id="ro-mode">— dual trace</b>
					</div>
					<div className="ro">
						Delta
						<b id="ro-delta">180°</b>
					</div>
					<div className="ro">
						Status
						<b id="ro-state">Drift</b>
					</div>
				</div>
				<div className="scope-body">
					<pre className="trace trace-b" id="traceB" aria-hidden="true" />
					<pre className="trace trace-a" id="traceA" aria-hidden="true" />
				</div>
				<div className="scope-legend">
					<div className="key">
						<i />
						Trace A — market capability
					</div>
					<div className="key k-r">
						<i />
						Trace B — your internal operations
					</div>
				</div>
			</div>
		</div>
	);
}
