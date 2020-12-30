import React from "react";
import styled from "styled-components/macro";

const TopContainerSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
`;

export const TopContainer = (props) => {
  return <TopContainerSection>{props.children}</TopContainerSection>;
};
