import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: var(--White);
  padding: 1.25rem 0;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
`;

const TitleNav = styled.h1`
  font-size: calc(1.25rem, 1.5rem, 1.75rem);
  font-weight: var(--FontWeightDark);
  color: var(--VeryDarkBlueTxt);
`;
const DarkModeBtn = styled.button`
  background-color: var(--White);
  padding: 1.25rem;
  border-radius: 0.3125rem;
  border: none;
  cursor: pointer;
  font-weight: var(--FontWeightBold);
  border-radius: 0.3125rem;
  border: 0.125rem solid transparent;
  i {
    margin-right: 0.625rem;
  }

  &:hover,
  &:focus {
    background-color: var(--VeryLightGray);
  }

  &:focus {
    border: 0.125rem solid var(--VeryDarkBlueTxt);
    outline: none;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavWrapper>
        <TitleNav>Where in the world?</TitleNav>
        <DarkModeBtn>
          <i className="far fa-moon"></i>
          <span>Dark Mode</span>
        </DarkModeBtn>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
