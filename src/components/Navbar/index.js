import React from 'react';
import { Nav, Title, DarkModeBtn, Wrapper } from "components/Navbar/Navbar.styles";
import Context from "context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = React.useContext(Context);

  return (
    <Nav>
      <Wrapper>
        <Title>Where in the world?</Title>
        <DarkModeBtn
          onClick={toggleTheme}
        >
          <i className={`${theme === "light" ? "fas fa-moon" : "fas fa-sun"}`}></i>
          <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
        </DarkModeBtn>
      </Wrapper>
    </Nav>
  )
}

export default Navbar;
