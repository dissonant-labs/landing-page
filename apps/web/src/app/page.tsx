import { Approach } from "@/components/landing/approach";
import { AsciiEngine } from "@/components/landing/ascii-engine";
import { Capability } from "@/components/landing/capability";
import { CommandBar } from "@/components/landing/command-bar";
import { Deployment } from "@/components/landing/deployment";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Intake } from "@/components/landing/intake";
import { InterferenceMonitor } from "@/components/landing/interference-monitor";
import { Operators } from "@/components/landing/operators";
import { Problem } from "@/components/landing/problem";
import { SiteFooter } from "@/components/landing/site-footer";
import { StatusBar } from "@/components/landing/status-bar";
import { TargetProfiles } from "@/components/landing/target-profiles";
import { Terms } from "@/components/landing/terms";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
	return (
		<>
			<div className="edge edge-l" aria-hidden="true" />
			<div className="edge edge-r" aria-hidden="true" />

			<StatusBar />
			<CommandBar />

			<div className="shell" id="top">
				<Hero />
			</div>

			<InterferenceMonitor />

			<div className="shell">
				<Problem />
				<TargetProfiles />
				<Approach />
				<Capability />
				<Deployment />
				<Terms />
				<Operators />
				<Testimonials />
				<Faq />
				<Intake />
			</div>

			<SiteFooter />

			<AsciiEngine />
		</>
	);
}
