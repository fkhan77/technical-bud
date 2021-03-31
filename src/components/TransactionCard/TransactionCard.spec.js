import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TransactionCard } from "./TransactionCard";

describe("It should render the column of descriptions", () => {
  test("It should render the column of descriptions when no props are passed", () => {
    render(<TransactionCard />);

    expect(screen.getByText("Date:")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Category:")).toBeInTheDocument();
    expect(screen.getByText("Value:")).toBeInTheDocument();
    expect(screen.getByText("Currency:")).toBeInTheDocument();
  });

  test("It should render the column of descriptions when props are passed", () => {
    render(
      <TransactionCard
        date={"12/03/1212"}
        description={"some-description"}
        category={"some-category"}
        value={123}
        currency={"GBP"}
      />
    );
    expect(screen.getByText("Date:")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Category:")).toBeInTheDocument();
    expect(screen.getByText("Value:")).toBeInTheDocument();
    expect(screen.getByText("Currency:")).toBeInTheDocument();
  });
});
