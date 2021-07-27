import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 660px) {
    width: 200px;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: var(--bgColor);
  color: var(--textColor);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  padding: 25px;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-weight: var(--FontWeightNormal);
  border-radius: var(--rounded);

  i { 
    color: var(--textColor);
  }

  &:focus {
    border: 2px solid var(--textColor);
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 65px;
  width: 100%;
  background-color: var(--bgColor);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.3125rem;
  padding: 25px;
  list-style: none;

  li {
    padding-bottom: 20px;
    font-weight: var(--FontWeightBold);
    cursor: pointer;
    font-size: 1rem;
    color: var(--textColor);
    &:last-child {
      padding: 0;
    }
  }
`;