import "@testing-library/jest-dom/extend-expect";
import { userEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Form.stories"; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Default } = composeStories(stories);

test("a user can type", () => {
  render(<Default />);
  const inputElement = screen.getByRole("textbox");

  userEvent.type(inputElement, "hola");

  expect(inputElement).toHaveDisplayValue("hola");
});
