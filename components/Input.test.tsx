import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Input.stories"; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Enabled } = composeStories(stories);

test("renders default input with default args", () => {
  render(<Enabled />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveDisplayValue("hello from story");
});
