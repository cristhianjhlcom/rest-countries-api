import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 5rem auto;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  padding: 20px 50px;
  background-color: var(--White);
  border-radius: 0.3125rem;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 3.125rem;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--DarkBlue);

  @media screen and (min-width: 768px) {
    margin-bottom: 6.25rem;
  }
`;

export const CountryContainer = styled.article`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
    align-items: center;
  }
`;

export const Thumbnail = styled.div`
  margin-bottom: 3.125rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2.5rem;
  font-size: 1.25rem;
  line-height: 1.8;
`;

export const Information = styled.div`
  ul {
    padding: 0;
    list-style: none;
    margin-bottom: 1.25rem;
    &:last-child {
      margin: 0;
    }

    li {
      padding: 0 0 1.25rem 0;
      line-height: 2;
      strong {
        font-weight: var(--FontWeightBold);
      }

      &:last-child {
        padding: 0;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }
`;

export const Content = styled.article`
  margin-bottom: 2.5rem;
`;

export const Borders = styled.div`
  h4 {
    font-weight: var(--FontWeightBold);
    margin-bottom: 45px;
    line-height: 1.8;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    span {
      background-color: var(--White);
      padding: 20px 60px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      font-weight: var(--FontWeightBold);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 1.25rem;

    h4 {
      margin: 0;
    }
  }
`;
