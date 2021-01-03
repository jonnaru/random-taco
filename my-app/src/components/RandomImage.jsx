import React from "react";
import styled from "styled-components/macro";

const Image = styled.img`
  max-width: 580px;
  max-height: 580px;
`;

export const RandomImage = () => {
  return (
    <Image
      src={`https://source.unsplash.com/collection/86477077/580x580?random=${Math.random()}`} // Math.random to reload image
      alt="taco"
    />
  );
};
