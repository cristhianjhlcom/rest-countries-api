import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: var(--White);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.3125rem;
  width: 100%;
  max-width: 480px;
  height: 45px;

  i { 
    color: var(--DarkGray);
  }
  
  &:placeholder {
    color: var(--VeryLightGray);
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;

  &:focus {
    border: 2px solid dodgerblue;
  }
`;