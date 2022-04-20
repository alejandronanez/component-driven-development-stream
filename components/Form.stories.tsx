// Form.stories.ts|tsx

import { rest } from "msw";
import { screen, userEvent } from "@storybook/testing-library";
import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form } from "./Form";

const DELAY_ON_SUBMIT = 1000;

export default {
  title: "Form Component",
  component: Form,
} as ComponentMeta<typeof Form>;

export const SuccessBehavior: ComponentStory<typeof Form> = () => <Form />;
SuccessBehavior.play = async () => {
  const input = screen.getByRole("textbox");

  await userEvent.type(input, "example-email@email.com", {
    delay: 50,
  });
  const submitButton = screen.getByRole("button");

  await userEvent.click(submitButton);
};

SuccessBehavior.parameters = {
  msw: {
    handlers: [
      rest.post("/api/signup", (req, res, ctx) => {
        return res(
          ctx.delay(DELAY_ON_SUBMIT),
          ctx.json({
            success: true,
          })
        );
      }),
    ],
  },
};

export const ErrorBehavior: ComponentStory<typeof Form> = () => <Form />;
ErrorBehavior.play = async () => {
  const input = screen.getByRole("textbox");

  await userEvent.type(input, "example-email@email.com", {
    delay: 50,
  });
  const submitButton = screen.getByRole("button");

  await userEvent.click(submitButton);
};
ErrorBehavior.parameters = {
  msw: {
    handlers: [
      rest.post("/api/signup", (req, res, ctx) => {
        return res(ctx.delay(DELAY_ON_SUBMIT), ctx.status(400));
      }),
    ],
  },
};
