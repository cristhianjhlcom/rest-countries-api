import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
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

  @media screen and (min-width: 375px) {
    width: 95%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.25rem;
    row-gap: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3.75rem;
    row-gap: 3.75rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;
