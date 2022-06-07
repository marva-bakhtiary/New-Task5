import { render, screen } from "@testing-library/react";
import TotalBadge from "./TotalBadge";

describe("TotalBadge Testing", () => {
  test("totalBadge rendering", () => {
    render(<TotalBadge />);
    const totalBadge = screen.getByTestId("TotalBadge");
    expect(totalBadge).toBeInTheDocument();
  });
  test("badge has correct styles", () => {
    render(<TotalBadge />);
    const totalBadge = screen.getByTestId("TotalBadge");
    expect(totalBadge).toHaveClass("text-center cyan text-4xl font-semibold");
  });
  test("badges header rendering", () => {
    render(<TotalBadge />);
    const header = screen.getByRole("heading", {
      name: /total/i,
    });
    expect(header).toBeInTheDocument();
  });
  test("badges header has correct styles", () => {
    render(<TotalBadge />);
    const header = screen.getByRole("heading", {
      name: /total/i,
    });
    expect(header).toHaveClass("ml-[20%] mt-1");
  });
});
