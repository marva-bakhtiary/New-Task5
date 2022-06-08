import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
describe("Modal Testing", () => {
  test("modal rendering", () => {
    render(<Modal />);
    const modal = screen.getByTestId("ModalID");
    expect(modal).toBeInTheDocument();
  });
  test("modals button rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    expect(modalButton).toBeInTheDocument();
  });
  test("modals button has correct styles", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    expect(modalButton).toHaveClass("rounded-lg text-center mt-10");
  });
  test("button should open the modal", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    const modal = screen.getByTestId("ModalID");
    userEvent.click(modalButton);
    expect(modal).toBeInTheDocument();
  });
  test("modals header rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    const modalHeader = screen.getByRole("heading", {
      name: "Add New Transaction",
    });
    expect(modalHeader).toBeInTheDocument();
  });
  test("modals Inputs rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    const input1 = screen.getByTestId("type-input");
    const input2 = screen.getByTestId("amount-input");
    const input3 = screen.getByTestId("note-input");
    const input4 = screen.getByTestId("date-input");
    const input5 = screen.getByTestId("category-input");
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
    expect(input4).toBeInTheDocument();
    expect(input5).toBeInTheDocument();
  });
  test("modals add button rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    const add = screen.getByRole("button", { name: "Add" });
    expect(add).toBeInTheDocument();
  });
  test("modals clear button rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    const clear = screen.getByRole("button", { name: "Clear Values" });
    expect(clear).toBeInTheDocument();
  });
});
