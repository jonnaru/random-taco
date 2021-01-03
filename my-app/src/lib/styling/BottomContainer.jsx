import React from "react";
import styled from "styled-components/macro";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5e5e5;
  padding: 60px 0px;
`;

export const BottomContainer = (props) => {
  return <StyledSection>{props.children}</StyledSection>;
};
