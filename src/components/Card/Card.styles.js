import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardLink = styled(Link)`
  text-decoration: none;
  color: var(--textColor);
  border-radius: var(--rounded);
  overflow: hidden;
  &:focus {
    border: 2px solid var(--textColor);
  }
`;

export const CardCountry = styled.article`
  border-radius: var(--rounded);
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
`;

export const CardContent = styled.div`
  padding: 2.5rem;
  background-color: var(--bgColor);
  color: var(--textColor);
  margin-top: auto;

  h4 {
    margin: 0 0 1.25rem 0;
    line-height: 1.8;
  }

  p {
    margin: 0 0 0.625rem 0;
    line-height: 2;
    strong {
      font-weight: var(--FontWeightBold);
    }

    &:last-child {
      margin: 0;
    }
  }
`;

export const CardThumbnail = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;