import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  border: 1px solid #000;
  background: ${(props) => (props.light ? "#fff" : "#000")};
  color: ${(props) => (props.light ? "#000" : "#fff")};
  padding: 8px 16px;
  border-radius: 3px;

  font-family: "SpeziaTrial";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.light ? "#000" : "#fff")};
    color: ${(props) => (props.light ? "#fff" : "#000")};
    border-color: #000;
  }
  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = ({ title, light, onClick }) => {
  return (
    <StyledButton light={light} onClick={onClick}>
      {title}
    </StyledButton>
  );
};
