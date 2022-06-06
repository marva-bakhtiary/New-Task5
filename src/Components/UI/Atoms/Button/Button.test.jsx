import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Testig", () => {
  test("button rendering", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("button has correct styles", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("rounded-lg text-center mt-10 text-white");
  });

  test("button has correct attributes", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });
  test("have correct content", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Add Transaction");
  });

  test("focus on click", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(button).toHaveFocus();
  });
});
