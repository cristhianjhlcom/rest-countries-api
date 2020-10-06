import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CountriesContainer from "./components/CountriesContainer";

import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  max-width: 1440px;
  margin: 3.125rem auto;

  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 6.25rem;
    row-gap: 3.125rem;
  }

  @media screen and (min-width: 960px) {
    width: 90%;
    grid-template-columns: repeat(4, 1fr);
  }
`;

function App() {
  const [countries, setCountries] = useState([]);

  const countriesAPI = async () => {
    const request = await fetch("https://restcountries.eu/rest/v2/all");
    const response = await request.json();
    setCountries(response);
  };

  useEffect(() => {
    countriesAPI();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <CountriesContainer countries={countries} />
      </Container>
    </>
  );
}

export default App;
