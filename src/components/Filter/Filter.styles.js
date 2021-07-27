import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: var(--bgColor);
  color: var(--textColor);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  border-radius: var(--rounded);
  width: 100%;
  max-width: 480px;
  height: 45px;

  i { 
    color: var(--textColor);
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  background-color: var(--bgColor);
  color: var(--textColor);
  border-radius: var(--rounded);
  margin-left: 0.825rem;

  &:focus {
    border: 2px solid var(--textColor);
  }

  &::placeholder {
    color: var(--textColor);
  }
`;