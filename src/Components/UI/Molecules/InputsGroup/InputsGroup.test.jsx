import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputsGroup from "./InputsGroup";

describe("InputsGroup Testing", () => {
  test("InputsGroup rendering", () => {
    render(<InputsGroup />);
    const inputGroup = screen.getByTestId("input-group");
    expect(inputGroup).toBeInTheDocument();
  });

  //   Type Input
  test("Type input rendering", () => {
    render(<InputsGroup />);
    const typeInput = screen.getByTestId("type-input");
    expect(typeInput).toBeInTheDocument();
  });

  test("Type input has correct label", () => {
    render(<InputsGroup />);
    const typeLabel = screen.getByTestId("type-label");
    expect(typeLabel).toBeInTheDocument();
  });
  test("Type inputs label has correct styles", () => {
    render(<InputsGroup />);
    const typeLabel = screen.getByTestId("type-label");
    expect(typeLabel).toHaveClass("cyan font-medium");
  });

  //   Amount Input
  test("Amount input rendering", () => {
    render(<InputsGroup />);
    const amountInput = screen.getByTestId("amount-input");
    expect(amountInput).toBeInTheDocument();
  });

  test("Amount input has correct label", () => {
    render(<InputsGroup />);
    const amountLabel = screen.getByTestId("amount-label");
    expect(amountLabel).toBeInTheDocument();
  });
  test("Amount inputs label has correct styles", () => {
    render(<InputsGroup />);
    const amountLabel = screen.getByTestId("amount-label");
    expect(amountLabel).toHaveClass("cyan font-medium");
  });

  test("Amount input has correct Defaultvalue", () => {
    render(<InputsGroup />);
    const amountInput = screen.getByTestId("amount-input");
    expect(amountInput).toHaveValue("0");
  });
  test("Amount input should focus onClick", () => {
    render(<InputsGroup />);
    const amountInput = screen.getByTestId("amount-input");
    userEvent.click(amountInput);
    expect(amountInput).toHaveFocus();
  });
  test("Amount input gets the correct value", () => {
    render(<InputsGroup />);
    const amountInput = screen.getByTestId("amount-input");
    userEvent.clear(amountInput);
    userEvent.type(amountInput, "123");
    expect(amountInput).toHaveValue("123");
  });

  // Note Input
  test("Note input rendering", () => {
    render(<InputsGroup />);
    const noteInput = screen.getByTestId("note-input");
    expect(noteInput).toBeInTheDocument();
  });
  test("Note input has correct label", () => {
    render(<InputsGroup />);
    const noteLabel = screen.getByTestId("note-label");
    expect(noteLabel).toBeInTheDocument();
  });
  test("Note inputs label has correct styles", () => {
    render(<InputsGroup />);
    const noteLabel = screen.getByTestId("note-label");
    expect(noteLabel).toHaveClass("cyan font-medium");
  });
  test("Note input has focus onClick", () => {
    render(<InputsGroup />);
    const noteInput = screen.getByTestId("note-input");
    userEvent.click(noteInput);
    expect(noteInput).toHaveFocus();
  });
  test("Note input gets the value", () => {
    render(<InputsGroup />);
    const noteInput = screen.getByTestId("note-input");
    userEvent.type(noteInput, "123");
    expect(noteInput).toHaveValue("123");
  });

  // Date input

  test("Date input rendering", () => {
    render(<InputsGroup />);
    const dateInput = screen.getByTestId("date-input");
    expect(dateInput).toBeInTheDocument();
  });
  test("Date input has correct label", () => {
    render(<InputsGroup />);
    const dateLabel = screen.getByTestId("date-label");
    expect(dateLabel).toBeInTheDocument();
  });
  test("Date inputs label has correct styles", () => {
    render(<InputsGroup />);
    const dateLabel = screen.getByTestId("date-label");
    expect(dateLabel).toHaveClass("cyan font-medium mt-5");
  });
  test("Date input has focus onClick", () => {
    render(<InputsGroup />);
    const dateInput = screen.getByTestId("date-input");
    userEvent.click(dateInput);
    expect(dateInput).toHaveFocus();
  });
  test("Date input gets the value", () => {
    render(<InputsGroup />);
    const dateInput = screen.getByTestId("date-input");
    userEvent.type(dateInput, "123");
    expect(dateInput).toHaveValue("123");
  });

  //Category input

  test("Category input rendering", () => {
    render(<InputsGroup />);
    const categoryInput = screen.getByTestId("category-input");
    expect(categoryInput).toBeInTheDocument();
  });

  test("Category input has correct label", () => {
    render(<InputsGroup />);
    const categoryLabel = screen.getByTestId("category-label");
    expect(categoryLabel).toBeInTheDocument();
  });
  test("Category inputs label has correct styles", () => {
    render(<InputsGroup />);
    const categoryLabel = screen.getByTestId("category-label");
    expect(categoryLabel).toHaveClass("cyan font-medium");
  });
});
