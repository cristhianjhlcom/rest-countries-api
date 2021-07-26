import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: var(--desktopDevice);
  margin: 3.125rem auto;

  @media screen and (min-width: 768px) {
    width: 95%;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 2.5rem;
  width: 70%;
  margin: 0 auto;

  @media screen and (min-width: 660px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.25rem;
    row-gap: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4.6875rem;
    row-gap: 4.6875rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1.25rem;
  margin-bottom: 3.125rem;

  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    row-gap: 0;
  }
`;
