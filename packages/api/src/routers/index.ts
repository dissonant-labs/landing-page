import { publicProcedure, router } from "../index";
import { intakeRouter } from "./intake";

export const appRouter = router({
	healthCheck: publicProcedure.query(() => {
		return "OK";
	}),
	intake: intakeRouter,
});
export type AppRouter = typeof appRouter;
