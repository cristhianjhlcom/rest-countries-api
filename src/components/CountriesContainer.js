import React from "react";
import Card from "./Card";

const CountriesContainer = ({ countries }) => {
  return countries.map((country) => (
    <Card key={country.alpha3Code} country={country} />
  ));
};

export default CountriesContainer;
