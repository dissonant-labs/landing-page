import { initTRPC } from "@trpc/server";
import { ZodError } from "zod";

import type { Context } from "./context";

export const t = initTRPC.context<Context>().create({
	errorFormatter({ shape, error }) {
		// A failed input schema arrives with every zod issue JSON-encoded into
		// `message`. Surface the first issue's own wording instead, so the client can
		// show the message verbatim rather than a serialised array.
		if (error.cause instanceof ZodError) {
			return {
				...shape,
				message: error.cause.issues[0]?.message ?? shape.message,
			};
		}
		return shape;
	},
});

export const router = t.router;

export const publicProcedure = t.procedure;
