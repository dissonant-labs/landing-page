import { Wordmark } from "./logo";

export function CommandBar() {
	return (
		<div className="command">
			<nav className="nav-in">
				<a href="#top" className="logo" aria-label="Dissonant">
					<Wordmark />
				</a>
				<a href="#intake" className="nav-cta">
					Request a scoped proposal
				</a>
			</nav>
		</div>
	);
}
