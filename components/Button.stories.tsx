// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button Component",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Enabled: ComponentStory<typeof Button> = () => <Button />;

export const Disabled: ComponentStory<typeof Button> = () => (
  <Button disabled={true} />
);

export const Loading: ComponentStory<typeof Button> = () => (
  <Button loading={true} />
);
