import React from 'react';
import { Nav, Title, DarkModeBtn, Wrapper } from "components/Navbar/Navbar.styles";

function Navbar() {
  return (
    <Nav>
      <Wrapper>
        <Title>Where in the world?</Title>
        <DarkModeBtn>
          <i className="far fa-moon"></i>
          <span>Dark Mode</span>
        </DarkModeBtn>
      </Wrapper>
    </Nav>
  )
}

export default Navbar;
