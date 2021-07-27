import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "themes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Context from "context/ThemeContext";


import Navbar from "components/Navbar";
import { Home } from "pages/Home";
import { Country } from "pages/Country";

function App() {
  const { theme } = React.useContext(Context);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:id">
            <Country />
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;