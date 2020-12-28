import React from "react";
import styled from "styled-components/macro";

import { PrimaryButton } from "../lib/PrimaryButton";
import { SecondaryButton } from "../lib/SecondaryButton";
import { IconHeart } from "../lib/IconHeart";
import { IconEaten } from "../lib/IconEaten";
import { IconWantToEat } from "../lib/IconWantToEat";
import { IconAddRecipe } from "../lib/IconAddRecipe";
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

const SecondaryButtonText = styled.p`
  margin: 0 0 0 6px;
`;

export const Header = () => {
  return (
    <PageContainer>
      <StyledHeader>
        <HeaderLogo>• Tacorandomizer</HeaderLogo>
        <PrimaryButton title="Random recipe" />
        <PrimaryButton title="Random mix" />
        <SecondaryButton
          title={<SecondaryButtonText>Like</SecondaryButtonText>}
          icon={<IconHeart />}
        />
        <SecondaryButton icon={<IconEaten />} />
        <SecondaryButton icon={<IconWantToEat />} />
        <SecondaryButton icon={<IconAddRecipe />} />
      </StyledHeader>
    </PageContainer>
  );
};
