import React from "react";
import styled from "styled-components/macro";

import { IconArrow } from "../lib/IconArrow";

const LinkToPageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  & svg {
    width: 26px;
    margin-right: 8px;
  }

  & path {
    stroke: #000;
    stroke-width: 3px;
  }
`;

const LinkToPage = styled.a`
  font-size: 20px;
  line-height: 26px;
  text-decoration: none;
  font-weight: 700;
  color: #333;
  border-bottom: 2px solid #000;
`;

export const HomePageLink = () => {
  return (
    <LinkToPageContainer>
      <IconArrow />
      <LinkToPage href="http://taco-randomizer.herokuapp.com" target="_blank">
        taco-randomizer.com
      </LinkToPage>
    </LinkToPageContainer>
  );
};
