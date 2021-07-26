import React from 'react';
import { FilterContainer, FilterInput } from "components/Filter/Filter.styles";

function Filter({ setQuery }) {
  return (
    <FilterContainer>
      <i className="fas fa-search"></i>
      <FilterInput
        type="text" 
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </FilterContainer>
  )
}

export default Filter;
