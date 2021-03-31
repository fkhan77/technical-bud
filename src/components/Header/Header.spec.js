import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";

test("It should render the Header correctly", () => {
  render(<Header>Hello world!</Header>);

  expect(screen.getByText("Hello world!")).toBeInTheDocument();
});
