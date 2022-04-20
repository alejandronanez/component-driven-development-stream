import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.post("/api/signup", (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
];

export const server = setupServer(...handlers);
