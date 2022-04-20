// Form.stories.ts|tsx

import { rest } from "msw";
import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form } from "./Form";

export default {
  title: "Form Component",
  component: Form,
} as ComponentMeta<typeof Form>;

export const SuccessBehavior: ComponentStory<typeof Form> = () => <Form />;
SuccessBehavior.parameters = {
  msw: {
    handlers: [
      rest.post("/api/signup", (req, res, ctx) => {
        return res(
          ctx.json({
            success: true,
          })
        );
      }),
    ],
  },
};

export const ErrorBehavior: ComponentStory<typeof Form> = () => <Form />;
ErrorBehavior.parameters = {
  msw: {
    handlers: [
      rest.post("/api/signup", (req, res, ctx) => {
        return res(ctx.status(400));
      }),
    ],
  },
};

export const LoadingBehavior: ComponentStory<typeof Form> = () => <Form />;
LoadingBehavior.parameters = {
  msw: {
    handlers: [
      rest.post("/api/signup", (req, res, ctx) => {
        return res(
          ctx.delay(2000),
          ctx.json({
            success: true,
          })
        );
      }),
    ],
  },
};
