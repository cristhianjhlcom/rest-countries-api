import React from 'react';
import { numberWithCommas } from "helpers/formatNumbers";
import { CardCountry, CardContent, CardThumbnail, CardLink } from "components/Card/Card.styles";

function Card({ country }) {
  const { alpha3Code, flag, name, population, region, capital } = country;

  return (
    <CardLink to={`/${alpha3Code}`}>
      <CardCountry>
        <CardThumbnail>
          <img src={flag} alt={`Flag of ${name}`} title={`Flag of ${name}`} />
        </CardThumbnail>
        <CardContent>
          <h4>{name}</h4>
          <p><strong>Population:</strong> {numberWithCommas(population)}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Capital:</strong> {capital}</p>
        </CardContent>
      </CardCountry>
    </CardLink> 
  );
}

export default Card
