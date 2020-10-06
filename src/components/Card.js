import React from "react";

import styled from "styled-components";

const CardCountry = styled.div`
  border-radius: 0.3125rem;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  margin: 0 0 3.125rem 0;
  img {
    max-width: 100%;
    height: 12.5rem;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1.25rem;
  background-color: var(--White);
  margin-top: auto;
`;

const Card = ({ country }) => {
  const { flag, name, population, region, capital } = country;
  return (
    <CardCountry>
      <img src={flag} alt={`Flag of ${name}`} title={`Flag of ${name}`} />
      <CardContent>
        <h4>{name}</h4>
        <p>Population: {population}</p>
        <p>Región: {region}</p>
        <p>Capital: {capital}</p>
      </CardContent>
    </CardCountry>
  );
};

export default Card;
