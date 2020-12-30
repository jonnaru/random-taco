import React from "react";
import styled from "styled-components/macro";

import { PrimaryButton } from "../lib/PrimaryButton";

import { PageContainer } from "../lib/PageContainer";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
`;

const HeaderLogo = styled.p`
  margin: 0;
  font-size: 21px;
  color: #1a1a1a;
  letter-spacing: 4px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Header = ({ setShowFullRecipe, setGetNewRecipe }) => {
  const handleOnClick = (fullRecipe) => {
    setGetNewRecipe((prev) => !prev); // toggler
    setShowFullRecipe(fullRecipe);
    console.log("fullRecipe", fullRecipe);
  };

  return (
    <PageContainer>
      <StyledHeader>
        <HeaderLogo>• Tacorandomizer</HeaderLogo>

        <PrimaryButton
          title="Random recipe"
          light
          onClick={() => handleOnClick(true)} // on
        />
        <PrimaryButton
          title="Random mix"
          onClick={() => handleOnClick(false)} // off
        />
      </StyledHeader>
    </PageContainer>
  );
};
