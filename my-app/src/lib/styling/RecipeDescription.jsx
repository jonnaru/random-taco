import React from "react";
import styled from "styled-components/macro";

const DescriptionParagraph = styled.p`
  margin: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
`;

export const RecipeDescription = (props) => {
  return <DescriptionParagraph>{props.children}</DescriptionParagraph>;
};
