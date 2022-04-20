import "@testing-library/jest-dom/extend-expect";
import { userEvent } from "@storybook/testing-library";
import { render, screen, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Form.stories";

const { SuccessBehavior } = composeStories(stories);

test("shows success message on 200", async () => {
  render(<SuccessBehavior />);

  const inputElement = screen.getByRole("textbox");
  await userEvent.type(inputElement, "example-email@email.com");
  const submitButton = screen.getByRole("button");
  await userEvent.click(submitButton);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/yay/i)).toBeInTheDocument();
  });
});
