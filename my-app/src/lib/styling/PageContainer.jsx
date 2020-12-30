import React from "react";
import styled from "styled-components/macro";

const WrapperContainer = styled.div`
  width: 1180px;
  height: 100%;
  margin: auto;
`;

export const PageContainer = (props) => {
  return <WrapperContainer>{props.children}</WrapperContainer>;
};
