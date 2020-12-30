import React from "react";
import styled from "styled-components/macro";

const LeftContainer = styled.div`
  padding-right: 60px;
`;

export const LeftTopContainer = (props) => {
  return <LeftContainer>{props.children}</LeftContainer>;
};
