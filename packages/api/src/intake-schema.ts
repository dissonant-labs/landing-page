import { z } from "zod";

/**
 * Shared by the intake form and the mutation that validates it, so the option list
 * and the accepted values can't drift apart. This module deliberately imports
 * nothing but zod — the client bundles it.
 */
export const HEADCOUNTS = [
	"Under 50",
	"50 – 200",
	"200 – 1,000",
	"Over 1,000",
] as const;

export type Headcount = (typeof HEADCOUNTS)[number];

export const intakeInputSchema = z.object({
	name: z.string().trim().min(1, "Add your name.").max(120),
	company: z.string().trim().min(1, "Add the company name.").max(160),
	email: z.email("That email address doesn't look right.").max(200),
	headcount: z.enum(HEADCOUNTS),
	sector: z.string().trim().min(1, "Add what you make or move.").max(300),
	pain: z.string().trim().min(1, "Tell us what's going wrong.").max(5000),
	/**
	 * Honeypot. Hidden from people and from assistive tech, so anything in it came
	 * from a bot filling every field it found. Deliberately accepted rather than
	 * rejected — the submission is dropped server-side and reported as a success,
	 * which gives a bot nothing to tune against.
	 */
	fax: z.string().max(200).optional(),
});

export type IntakeInput = z.infer<typeof intakeInputSchema>;
