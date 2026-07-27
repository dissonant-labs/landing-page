import { TRPCError } from "@trpc/server";

import { sendIntakeNotification } from "../email";
import { publicProcedure, router } from "../index";
import { intakeInputSchema } from "../intake-schema";

export const intakeRouter = router({
	submit: publicProcedure
		.input(intakeInputSchema)
		.mutation(async ({ input }) => {
			// Honeypot filled: report success so the bot doesn't retry, send nothing.
			if (input.fax) return { ok: true };

			try {
				await sendIntakeNotification(input);
			} catch (error) {
				console.error("[intake] could not send submission", error);
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message:
						"That didn't send. Email team@dissonant.co directly and we'll pick it up.",
				});
			}

			return { ok: true };
		}),
});
