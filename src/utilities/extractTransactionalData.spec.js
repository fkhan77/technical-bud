import React from "react";
import { extractTransactionalData } from "./extractTransactionalData";

describe("It should return the correct data", () => {
  const mockAccount = {
    id: 1,
    provider: {
      title: "Monzo",
      account_number: 123,
      sort_code: 456,
      description: "some-description",
    },
    balance: {
      amount: 1250,
      currency_iso: "GBP",
    },
    transactions: [
      {
        id: 1,
        date: "2020-02-17",
        description: "",
        category: "Groceries",
        amount: {
          value: -32.5,
          currency_iso: "GBP",
        },
      },
      {
        id: 2,
        date: "2020-02-16",
        description: "",
        category: "Shopping",
        amount: {
          value: -80.5,
          currency_iso: "GBP",
        },
      },
      {
        id: 3,
        date: "2020-02-30",
        description: "",
        category: "Malformed data",
        amount: {
          value: null,
          currency_iso: "Unknown",
        },
      },
      {
        id: 4,
        date: "2020-02-25",
        description: "",
        category: "Income",
        amount: {
          value: 100,
          currency_iso: "GBP",
        },
      },
    ],
  };

  const mockAccountNoTransactions = {
    id: 1,
    provider: {
      title: "Monzo",
      account_number: 123,
      sort_code: 456,
      description: "some-description",
    },
    balance: {
      amount: 1250,
      currency_iso: "GBP",
    },
  };

  test("It should return the correct number of transactions", () => {
    expect(extractTransactionalData(mockAccount).length).toBe(2);
  });
  test("It should return the transactions in the correct order from smallest to largest", () => {
    expect(extractTransactionalData(mockAccount)[0].amount.value).toBe(-32.5);
    expect(extractTransactionalData(mockAccount)[1].amount.value).toBe(-80.5);
  });
  test("It should throw an error when called with no data", () => {
    expect(extractTransactionalData()).toBe(
      "Cannot read property 'transactions' of undefined"
    );
  });
  test("It should throw an error when called with data that has no transactions", () => {
    expect(extractTransactionalData()).toBe(
      "Cannot read property 'transactions' of undefined"
    );
  });
});
