import React from 'react';
import { Wrapper, Content, Header } from "components/Countries/Countries.styles";
import { useGetData } from "hooks/useGetData";
import { getCountries } from "services/getCountries";
import { filterData } from "helpers/filters";

import Card from "components/Card";
import Filter from 'components/Filter';
import Dropdown from 'components/Dropdown';

function Countries() {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const { data } = useGetData(getCountries);

  return (
    <Wrapper>
      <Header>
        <Filter setQuery={setQuery} />
        <Dropdown setFilter={setFilter} />
      </Header>

      <Content>
        {
          data 
          ? filterData(data, query, filter).map((country) => <Card key={country.alpha3Code} country={country} />)
          : <p>Loading...</p>
        }
      </Content>
    </Wrapper>
  );
}

export default Countries;
