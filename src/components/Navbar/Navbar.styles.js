import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--White);
  padding: 1.25rem 0;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h1`
  font-size: calc(1.25rem, 1.5rem, 1.75rem);
  font-weight: var(--FontWeightDark);
  color: var(--VeryDarkBlueTxt);
`;

export const DarkModeBtn = styled.button`
  background-color: var(--White);
  padding: 1.25rem;
  border-radius: 0.3125rem;
  border: none;
  cursor: pointer;
  font-weight: var(--FontWeightBold);
  border-radius: 0.3125rem;
  border: 0.125rem solid transparent;
  i {
    margin-right: 0.625rem;
  }

  &:hover,
  &:focus {
    background-color: var(--VeryLightGray);
  }

  &:focus {
    border: 0.125rem solid var(--VeryDarkBlueTxt);
    outline: none;
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: var(--desktopDevice);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
