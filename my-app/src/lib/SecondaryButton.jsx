import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e9;
  background: #fff;
  padding: 9px 16px;
  border-radius: 8px;
  min-height: 44px;

  font-family: "SpeziaTrial";
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #e7e7e9;
  }
  &:focus {
    outline: none;
  }
`;

export const SecondaryButton = ({ title, icon }) => {
  return (
    <StyledButton>
      {icon}
      {title}
    </StyledButton>
  );
};
