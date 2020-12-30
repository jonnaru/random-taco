import React from "react";
import styled from "styled-components/macro";

const DescriptionContainer = styled.div`
  margin-bottom: 16px;
`;

export const RecipeDescriptionContainer = (props) => {
  return <DescriptionContainer>{props.children}</DescriptionContainer>;
};
