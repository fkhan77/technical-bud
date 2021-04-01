import React, { useState } from "react";
import styled from "styled-components";
import { hot } from "react-hot-loader";
import { createGlobalStyle } from "styled-components";
import { getAccount } from "./services/getAccount";
import { extractTransactionalData } from "./utilities/extractTransactionalData";
import { Button, Header, MemoizedTransactionCard } from "./components";

import ReactLoading from "react-loading";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  body {
    color: black;
    background: white;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 1rem 1rem;
  margin-top: 1rem;
`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [transactionData, setTransactionData] = useState([]);

  function handleGetTransactionData() {
    setIsLoading(true);
    setIsError(false);
    getAccount()
      .then((account) => extractTransactionalData(account))
      .then((data) => {
        setTransactionData(data);
      })
      .catch((err) => {
        setIsError(true);
        setTransactionData([]);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <GlobalStyle />
      <Header>Hello! Welcome to Farhad's technical test solution! 🎉</Header>
      <Section>
        <Button handleClick={handleGetTransactionData}>
          Get 10 Smallest Transactions
        </Button>
        {isLoading && <ReactLoading type="spin" color="#00000" />}
      </Section>
      <Main>
        {isError && (
          <div>
            An error occured, please try again. If the issue persists, please
            try at a different time.{" "}
          </div>
        )}
        {transactionData.map(
          ({ date, description, category_title, amount }, index) => (
            <MemoizedTransactionCard
              key={index}
              date={date}
              description={description}
              category={category_title}
              value={amount.value}
              currency={amount.currency_iso}
            />
          )
        )}
      </Main>
    </>
  );
}

export default hot(module)(App);
