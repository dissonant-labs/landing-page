import { Resend } from "resend";

import type { IntakeInput } from "./intake-schema";

/**
 * Where intake submissions land. Overridable for staging, but the default is the
 * address printed on the page so the two can never disagree.
 */
const TO = process.env.INTAKE_TO_EMAIL ?? "team@dissonant.co";

/**
 * Must be on a domain verified in Resend. `onboarding@resend.dev` works without a
 * verified domain but only delivers to the Resend account owner — fine for a smoke
 * test, not for production.
 */
const FROM =
	process.env.INTAKE_FROM_EMAIL ?? "Dissonant intake <intake@dissonant.co>";

let client: Resend | null = null;

function getResend() {
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		throw new Error(
			"RESEND_API_KEY is not set — the intake form has nowhere to send mail.",
		);
	}
	if (!client) client = new Resend(apiKey);
	return client;
}

/** Submitted values are attacker-controlled; never interpolate them raw into HTML. */
function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

function renderHtml(input: IntakeInput) {
	const rows: [string, string][] = [
		["Name", input.name],
		["Company", input.company],
		["Email", input.email],
		["Headcount", input.headcount],
		["Sector", input.sector],
	];

	const cells = rows
		.map(
			([label, value]) =>
				`<tr>
					<td style="padding:6px 16px 6px 0;color:#8C9197;font:500 11px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase;vertical-align:top;white-space:nowrap;">${label}</td>
					<td style="padding:6px 0;color:#14171A;font:400 15px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${escapeHtml(value)}</td>
				</tr>`,
		)
		.join("");

	return `<div style="background:#FFFFFF;padding:28px;max-width:640px;">
		<p style="margin:0 0 20px;color:#8C9197;font:500 11px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;">Intake — dissonant.co</p>
		<table style="border-collapse:collapse;width:100%;">${cells}</table>
		<p style="margin:24px 0 8px;color:#8C9197;font:500 11px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase;">What's going wrong</p>
		<p style="margin:0;color:#14171A;font:400 15px/1.7 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;white-space:pre-wrap;">${escapeHtml(input.pain)}</p>
		<p style="margin:28px 0 0;padding-top:16px;border-top:1px solid #E4E6E8;color:#8C9197;font:400 12px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Reply to this email to answer ${escapeHtml(input.name)} directly.</p>
	</div>`;
}

function renderText(input: IntakeInput) {
	return [
		"INTAKE — dissonant.co",
		"",
		`Name:      ${input.name}`,
		`Company:   ${input.company}`,
		`Email:     ${input.email}`,
		`Headcount: ${input.headcount}`,
		`Sector:    ${input.sector}`,
		"",
		"What's going wrong:",
		input.pain,
	].join("\n");
}

export async function sendIntakeNotification(input: IntakeInput) {
	const { error } = await getResend().emails.send({
		from: FROM,
		to: [TO],
		// Replying goes to the person who filled the form, not to the sending address.
		replyTo: input.email,
		subject: `Intake — ${input.company} (${input.name})`,
		html: renderHtml(input),
		text: renderText(input),
	});

	if (error) {
		throw new Error(
			`Resend rejected the intake email: ${error.name} — ${error.message}`,
		);
	}
}
