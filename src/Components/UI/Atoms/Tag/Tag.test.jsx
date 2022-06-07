import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag Testing", () => {
  test("tag rendering", () => {
    render(<Tag />);
    const tag = screen.getByTestId("TagsID");
    expect(tag).toBeInTheDocument();
  });
  test("has correct styles", () => {
    render(<Tag />);
    const tag = screen.getByTestId("TagsID");
    expect(tag).toHaveClass("rounded-lg w-20 h-7 text-center");
  });
});
