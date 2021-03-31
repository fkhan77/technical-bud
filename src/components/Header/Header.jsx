import styled from "styled-components";
import React from "react";

const StyledHeader = styled.header`
  background: black;
  color: white;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  & > h1 {
    margin: 0;
  }
`;

/**
 *
 * @returns {JSX.Element}
 */

export function Header({ children }) {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
}
