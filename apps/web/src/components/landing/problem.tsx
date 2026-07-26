import { SectionMarker } from "./section-marker";

const SYMPTOMS = [
	"Software you bought two decades ago that everyone complains about and nobody can replace.",
	"No internal expertise, so every vendor sounds equally credible and equally expensive.",
	"The nagging sense that you should have started eighteen months ago.",
];

export function Problem() {
	return (
		<section id="problem">
			<div className="wrap">
				<SectionMarker label="The problem" />
				<div className="pad">
					<h2>You can see it everywhere except inside your own company.</h2>
					<div className="stmt">
						<p>
							Every week there is another story about AI transforming an
							industry. Then you walk into your own building, where the quoting
							still runs on a spreadsheet somebody built in 2006 and nobody has
							fully understood since.
						</p>
						<p>
							You are not short of ambition. You are short of anyone in the
							building who can tell you which of it is real, what it would cost,
							and whether it would survive contact with the way your business
							actually works. So the decision keeps getting deferred — and every
							quarter it's deferred, a competitor with better internal machinery
							quotes faster, ships faster and takes a little more of your
							market.
						</p>
						<p>
							That distance has a name. When what a company can see is possible
							stops matching what it can actually execute on a Tuesday morning,
							the business has gone <span className="red">dissonant</span> — the
							market playing in one key, your operations in another. We took the
							name from the problem, because closing that interval is the only
							thing we do.
						</p>
					</div>
					<div className="pill-row">
						{SYMPTOMS.map((symptom) => (
							<div className="pill" key={symptom}>
								<span className="n">Symptom</span>
								<p>{symptom}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
