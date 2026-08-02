import { SectionMarker } from "./section-marker";

const QUESTIONS = [
	{
		q: "What does this actually cost?",
		a: "The diagnostic is free. Pilots start at $15K for four weeks and a working system in production. Full builds are quoted to scope: the number comes out of what the pilot proved, not a rate card. Every figure is fixed and agreed in writing before work starts, including anyone we bring in from our network, who never appears as a separate invoice.",
	},
	{
		q: "What if the pilot doesn't work?",
		a: "Then you stop, and you've spent the price of a pilot rather than the price of a transformation program. That's the entire reason the engagement is staged. The scope document says exactly what the pilot must do, so there is no argument at the end about whether it did it, and if we miss what we committed to, we fix it before we invoice the balance.",
	},
	{
		q: "How do we know AI is even the right answer for us?",
		a: "Sometimes it isn't, and we'll say so. We're not AI evangelists. We're here to make your operations faster, and occasionally that means a well-built piece of ordinary software. In practice, most companies like yours are bottlenecked on reading, matching, sorting and re-typing, and that is precisely the work that became cheap in the last three years. The diagnostic tells you which situation you're in before you spend anything.",
	},
	{
		q: "Who maintains the system after you leave, and can we still reach you?",
		a: "Yes, always. Handover ends the invoice, not the relationship: if something breaks, if a format changes, or if a new hire needs walking through it, you call or email us directly and you get an answer. No ticket queue, no support tier, no meter running. Day to day the system is maintained by your own team, because we deliberately build with standard, boring technology that any competent developer can pick up, and if you'd rather we handle ongoing work formally, a retainer is available. But that's a choice you make later, not a dependency we design in.",
	},
	{
		q: "Does our data leave our environment or train someone's model?",
		a: "No. Systems are deployed inside your infrastructure or a cloud tenancy you control, with model providers configured for zero data retention. We'll walk your IT or security team through the architecture during scoping.",
	},
	{
		q: "You're two people. What if our project is bigger than that?",
		a: "We keep a standing network of vetted engineers, designers and specialists we've shipped with before, and we scale the team up whenever the work demands it, whether that's because the scope is large or because you need it delivered faster. They're pre-vetted, so there's no search and no ramp-up, and they're managed and paid by us inside the fixed price you already agreed. What never changes is that the two of us stay on the project from the first conversation through to handover.",
	},
	{
		q: "We hired a consultancy before and got a slide deck. Why is this different?",
		a: "A consultancy sells you analysis and staffs delivery with juniors. We sell you a working system in four weeks, and the two people you meet are the two people who build it. If nothing ships, we've failed: there is no deliverable here that isn't running software.",
	},
	{
		q: "Our systems are genuinely old. Is that a problem?",
		a: "It's the entire practice. Most of what we build sits alongside an AS/400, an Access database or a spreadsheet that quietly runs scheduling. We bridge to what exists rather than demanding a replacement your business can't afford to survive.",
	},
	{
		q: "How much of my team's time does this take?",
		a: "A few hours across the diagnostic, from the two or three people who know the process best, then a weekly check-in during the build. Far less than any software implementation you've done, because we adapt to your workflow instead of making you adapt to a product.",
	},
];

export function Faq() {
	return (
		<section>
			<div className="wrap">
				<SectionMarker label="Common questions" />
				<div className="pad">
					<h2>Before you ask.</h2>
					<div className="faq">
						{QUESTIONS.map((item) => (
							<details key={item.q}>
								<summary>
									{item.q}
									<span className="pm">+</span>
								</summary>
								<p>{item.a}</p>
							</details>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
