import React from "react";
import styled from "styled-components/macro";

import { SecondaryButton } from "../lib/SecondaryButton";
import { IconHeart } from "../lib/IconHeart";
import { IconEaten } from "../lib/IconEaten";
import { IconWantToEat } from "../lib/IconWantToEat";
import { IconAddRecipe } from "../lib/IconAddRecipe";

const IconButtonsContainer = styled.div`
  display: flex;
`;

const LeftButtonContainer = styled.div`
  padding: 6px 12px 6px 0px;
  margin-right: 12px;
  border-right: 1px solid #e7e7e9;
`;

const RightButtonContainer = styled.div`
  padding: 6px 12px 6px 0px;
  margin-right: 6px;
  display: flex;
`;

export const IconButtons = () => {
  return (
    <IconButtonsContainer>
      <LeftButtonContainer>
        <SecondaryButton
          tooltip="Like me!"
          title="Like"
          icon={<IconHeart />}
          number={Math.floor(Math.random() * 100)}
        />
      </LeftButtonContainer>
      <RightButtonContainer>
        <SecondaryButton small tooltip="Want to eat" icon={<IconWantToEat />} />
        <SecondaryButton small tooltip="Eaten" icon={<IconEaten />} />
        <SecondaryButton small tooltip="Add recipe" icon={<IconAddRecipe />} />
      </RightButtonContainer>
    </IconButtonsContainer>
  );
};
