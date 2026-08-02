import { SectionMarker } from "./section-marker";

const SYMPTOMS = [
	"Software bought two decades ago that everyone complains about and nobody understands well enough to replace.",
	"No internal expertise, so every vendor sounds equally credible and equally expensive.",
	"The growing sense that competitors started eighteen months ago while you decide where to begin.",
];

export function Problem() {
	return (
		<section id="problem">
			<div className="wrap">
				<SectionMarker label="The problem" />
				<div className="pad">
					<h2>
						You can see the future everywhere,
						<br className="brk" /> except inside your own company.
					</h2>
					<div className="stmt">
						<p>
							Every week there is another story about AI transforming an
							industry. Then you walk into your own building, where quoting
							still runs on a spreadsheet somebody built in 2006, critical
							knowledge lives in people's heads, and entire teams lose hours to
							work everyone knows should have disappeared years ago.
						</p>
						<p>
							You are not short of ambition. You are short of someone who can
							tell you what is real, what it will cost, and whether it will
							survive contact with the way your business actually works. So the
							decision keeps getting deferred, the inefficiencies become normal,
							and every quarter a competitor with better internal machinery
							quotes faster, ships faster, and takes a little more of your
							market.
						</p>
						<p>
							That distance has a name. When what a company can see is possible
							stops matching what it can actually execute on a Tuesday morning,
							the business has gone <span className="red">dissonant</span> - the
							market moving in one key, your operations in another.
						</p>
						<p>
							We took the name from the problem, because closing that interval
							is the only thing we do.
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
