import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input Testing", () => {
  test("input rendering", () => {
    render(<Input />);
    const input = screen.getByTestId("initial-input");
    expect(input).toBeInTheDocument();
  });
  test("should focus on click", () => {
    render(<Input />);
    const input = screen.getByTestId("initial-input");
    userEvent.click(input);
    expect(input).toHaveFocus();
  });

  test("inputs header rendering", () => {
    render(<Input />);
    const header = screen.getByRole("heading", {
      name: /initial/i,
    });
    expect(header).toBeInTheDocument();
  });
  test("inputs header has correct styles", () => {
    render(<Input />);
    const header = screen.getByRole("heading", {
      name: /initial/i,
    });
    expect(header).toHaveClass("ml-[20%] mt-4");
  });

  test("input gets the correct value", () => {
    render(<Input />);
    const input = screen.getByTestId("initial-input");
    userEvent.type(input, "123");
    expect(input).toHaveValue("123");
  });
});
