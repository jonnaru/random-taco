import React from "react";
import styled from "styled-components/macro";

import { IconArrow } from "../lib/IconArrow";

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #000;
`;

const BannerInfo = styled.p`
  margin: 0;
  padding-right: 5px;
  color: #fff;

  font-family: "SpeziaTrial";
  font-size: 14px;
  font-weight: 500;
`;

const BannerInfoLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

export const Banner = () => {
  return (
    <StyledBanner>
      <BannerInfo>
        We love taco! <BannerInfoLink>Meet our taco friends</BannerInfoLink>
      </BannerInfo>
      <IconArrow />
    </StyledBanner>
  );
};
