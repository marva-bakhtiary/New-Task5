import { render, screen } from "@testing-library/react";
import Card from "./Card";
describe("Card Testing", () => {
  test("card rendering", () => {
    render(<Card />);
    const card = screen.getByTestId("CardID");
    expect(card).toBeInTheDocument();
  });
  test("Cards header rendering", () => {
    render(<Card />);
    const header = screen.getByRole("heading", { name: /total balance/i });
    expect(header).toBeInTheDocument();
  });
  test("Cards header has correct style", () => {
    render(<Card />);
    const header = screen.getByRole("heading", { name: /total balance/i });
    expect(header).toHaveClass("ml-20 mt-24 text-3xl");
  });
  test("card has correct styles", () => {
    render(<Card />);
    const card = screen.getByTestId("CardID");
    expect(card).toHaveClass("w-4/12 h-80 rounded-lg ml-20");
  });

  test("input rendering", () => {
    render(<Card />);
    const initial = screen.getByTestId("initial-input");
    expect(initial).toBeInTheDocument();
  });

  test("Total Badge rendering", () => {
    render(<Card />);
    const totalHeader = screen.getByTestId("TotalBadge");
    expect(totalHeader).toBeInTheDocument();
  });

  //   test("Add Transaction button should be in the document", () => {
  //     render(<Card />);
  //     const button = screen.getByRole("button", { name: /add transaction/i });
  //     expect(button).toBeInTheDocument();
  //   });
  //   test("Add Transaction button should has correct styles", () => {
  //     render(<Card />);
  //     const button = screen.getByRole("button", { name: /add transaction/i });
  //     expect(button).toHaveClass("rounded-lg text-center mt-10");
  //   });
  //   test("Add Transaction button should open the modal", () => {
  //     render(<Card />);
  //     const button = screen.getByRole("button", { name: /add transaction/i });
  //     const modal = screen.getByTestId("ModalID");
  //     userEvent.click(button);
  //     expect(modal).toBeInTheDocument();
  //   });
});
