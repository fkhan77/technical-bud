import React from "react";
import styled, { keyframes } from "styled-components";

const animateOnEnter = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 3px;
  box-shadow: 0 20px 40px 0 rgb(0 0 0 / 10%);
  padding: 1rem;
  width: 80%;
  animation: ${animateOnEnter} 1s ease-in;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 20px 40px 0 rgb(0 0 0 / 15%);
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding-left: 1rem;
  padding-right: 1rem;
`;

/**
 *
 * @param {string} [date] - date to be displayed
 * @param {string} [description] - description to be displayed
 * @param {string} [category] - category to be displayed
 * @param {number} [value] - value to be displayed
 * @param {string} [currency] - currency to be displayed
 * @returns {JSX.Element}
 */

export function TransactionCard({
  date,
  description,
  category,
  value,
  currency,
}) {
  return (
    <Container>
      <Item>
        <span>Date:</span>
        <span>{date}</span>
      </Item>
      <Item>
        <span>Description:</span>
        <span>{description}</span>
      </Item>
      <Item>
        <span>Category:</span>
        <span>{category}</span>
      </Item>
      <Item>
        <span>Value:</span>
        <span>{value}</span>
      </Item>
      <Item>
        <span>Currency: </span>
        <span>{currency}</span>
      </Item>
    </Container>
  );
}

export const MemoizedTransactionCard = React.memo(TransactionCard);
