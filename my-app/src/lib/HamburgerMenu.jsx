import React from "react";
import styled from "styled-components/macro";

const BorderContainer = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #e5e5e5;
  padding-left: 24px;
  height: 54px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
`;
const Hamburger = styled.div`
  width: 30px;
  height: 3px;
  left: 0px;
  background: #000;
`;

export const HamburgerMenu = () => {
  return (
    <BorderContainer>
      <MenuContainer>
        <Hamburger />
        <Hamburger />
        <Hamburger />
      </MenuContainer>
    </BorderContainer>
  );
};
