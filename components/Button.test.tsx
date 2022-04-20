import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories"; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Enabled, Loading, Disabled } = composeStories(stories);

test("button should enabled by default", () => {
  render(<Enabled />);
  const inputElement = screen.getByRole("button");
  expect(inputElement).not.toBeDisabled();
});

test("button should be disabled if loading", () => {
  render(<Loading />);
  const inputElement = screen.getByRole("button");
  expect(inputElement).toBeDisabled();
  expect(inputElement).toHaveTextContent("Loading...");
});

test("button should be disabled if disabled", () => {
  render(<Disabled />);
  const inputElement = screen.getByRole("button");
  expect(inputElement).toBeDisabled();
  expect(inputElement).toHaveTextContent("Send");
});
