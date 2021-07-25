import React from "react";
import GlobalStyle from "GlobalStyles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import { Home } from "pages/Home";
import { Country } from "pages/Country";

function App() {
  return (
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
  );
}

export default App;