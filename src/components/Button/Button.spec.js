import React from "react";
import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("It should render the button correctly", () => {
  render(<Button>Hello!</Button>);

  expect(screen.getByRole("button")).toHaveTextContent("Hello!");
});

test("It should still have the correct text content after the button is clicked", () => {
  render(<Button>Hello!</Button>);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveTextContent("Hello!");
});
