import React from "react";
import styled from "styled-components/macro";

const CategoryContainer = styled.div`
  margin-bottom: 22px;
  break-inside: avoid;
`;

const CategoryText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  /* font-family: var(--spezia-medium); */
  font-weight: normal;
  color: #666;
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: #333;
`;

export const Category = () => {
  return (
    <>
      <CategoryContainer>
        <CategoryText>Type</CategoryText>
        <InfoText>Dinner, easy meal</InfoText>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryText>Suitable for</CategoryText>
        <InfoText>Weekends</InfoText>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryText>Details</CategoryText>
        <InfoText>Yummy</InfoText>
      </CategoryContainer>
    </>
  );
};
