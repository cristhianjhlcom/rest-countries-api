import React from 'react';
import { Wrapper, Content, Header } from "components/Countries/Countries.styles";
import Card from "components/Card";
import { useGetData } from "hooks/useGetData";
import { getCountries } from "services/getCountries";

function Countries() {
  const [query, setQuery] = React.useState("");
  const { data } = useGetData(getCountries);

  function filterCountries (arr) {
    return arr.filter(item => item.name
              .toString()
              .toLowerCase()
              .indexOf(query.toString().toLocaleLowerCase()) > -1
    );
  }

  return (
    <Wrapper>
      <Header>
        <input 
          type="text" 
          placeholder="Search for a country..." 
          onChange={(e) => setQuery(e.target.value)}
        />
        <select name="filters" id="filters">
          <option value="">!1</option>
          <option value="">!2</option>
          <option value="">!3</option>
        </select>
      </Header>

      <Content>
        {
          data 
          ? filterCountries(data).map((country) => <Card key={country.alpha3Code} country={country} />)
          : <p>Loading...</p>
        }
      </Content>
    </Wrapper>
  );
}

export default Countries;
