import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  background: white;
  border: 3px solid #3ca9f5;
  font-size: 1.5rem;
  border-radius: 10px;
  color: #3ca9f5;
  padding: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background: #3ca9f5;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

/**
 *
 * @param {function} handleClick - used to handle click events
 * @param {function} children - children to be rendered
 * @returns {JSX.Element}
 */

export function Button({ handleClick = () => null, children }) {
  return <StyledButton onClick={() => handleClick()}>{children}</StyledButton>;
}
