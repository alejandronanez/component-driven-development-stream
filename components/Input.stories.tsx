// Input.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Input Component",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Disabled: ComponentStory<typeof Input> = () => (
  <Input disabled={true} value="hello from story" onChange={() => {}} />
);

export const Enabled: ComponentStory<typeof Input> = () => (
  <Input value="hello from story" onChange={() => {}} />
);

export const WithError: ComponentStory<typeof Input> = () => (
  <Input error={true} value="hello from story" onChange={() => {}} />
);
