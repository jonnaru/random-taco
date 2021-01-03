import React from "react";
import styled from "styled-components/macro";
import { ToolTip } from "../lib/ToolTip";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e9;
  background: #fff;
  padding: 9px 16px;
  border-radius: 8px;
  height: 44px;
  margin-right: ${(props) => (props.small ? "12px;" : "0")};

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

const Title = styled.span`
  margin: 0 8px;
`;

const Number = styled.span`
  font-weight: 300;
`;

export const SecondaryButton = ({ title, icon, number, tooltip, small }) => {
  return (
    <ToolTip title={tooltip}>
      <StyledButton small={small}>
        {icon}
        {title && <Title>{title}</Title>}
        {number && <Number>{number}</Number>}
      </StyledButton>
    </ToolTip>
  );
};
