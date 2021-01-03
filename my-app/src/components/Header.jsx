import React from "react";
import styled from "styled-components/macro";

import { PrimaryButton } from "../lib/PrimaryButton";
import { HamburgerMenu } from "../lib/HamburgerMenu";
import { PageContainer } from "./styling/PageContainer";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = ({ setShowFullRecipe, setGetNewRecipe }) => {
  const handleOnClick = (fullRecipe) => {
    setGetNewRecipe((prev) => !prev); // toggler
    setShowFullRecipe(fullRecipe);
  };

  return (
    <PageContainer>
      <StyledHeader>
        <HeaderLogo>• Tacorandomizer</HeaderLogo>

        <ButtonsContainer>
          <PrimaryButton
            title="Random recipe"
            light
            onClick={() => handleOnClick(true)} // on
          />
          <PrimaryButton
            title="Random mix"
            onClick={() => handleOnClick(false)} // off
          />
          <HamburgerMenu />
        </ButtonsContainer>
      </StyledHeader>
    </PageContainer>
  );
};
