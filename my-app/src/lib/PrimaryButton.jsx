import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  border: 1px solid #000;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;

  font-family: "SpeziaTrial";
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #000;
    border-color: #000;
  }
  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};
