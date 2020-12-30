import React from "react";
import styled from "styled-components/macro";

const RecipeHeading = styled.h1`
  margin: 0;
  font-size: 48px;
  line-height: 58px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

export const Heading = (props) => {
  return <RecipeHeading>{props.children}</RecipeHeading>;
};
