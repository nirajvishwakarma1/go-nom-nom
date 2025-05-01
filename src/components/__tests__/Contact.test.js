import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

describe("Contact us page test cases", () => {
  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  // it is the alias of test
  it("Should load submit button inside Contact component", () => {
    render(<Contact />);

    const heabuttonding = screen.getByText("Submit");

    // Assertion
    expect(heabuttonding).toBeInTheDocument();
  });

  describe("Group of input boxes", () => {
    test("Search input fullname", () => {
      render(<Contact />);

      const inputName = screen.getByPlaceholderText("Fullname");

      // Assertion
      expect(inputName).toBeInTheDocument();
    });

    test("Should load 2 input boxes on the Contact component", () => {
      render(<Contact />);

      const inputBoxes = screen.getAllByRole("textbox");

      // Assertion
      expect(inputBoxes.length).toBe(2);
    });
  });
});
