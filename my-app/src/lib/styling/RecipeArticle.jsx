import React from "react";
import styled from "styled-components/macro";

const StyledArticle = styled.article`
  width: 60%;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
  margin-bottom: 40px;
`;

export const RecipeArticle = (props) => {
  return <StyledArticle>{props.children}</StyledArticle>;
};
