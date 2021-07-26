import React from "react";
import { Wrapper, BackButton, CountryContainer, Thumbnail, Information, Title, Content, Borders } from "pages/Country/Country.styles";
import { useParams } from "react-router-dom";
import { getCountryById } from "services/getCountries";
import { numberWithCommas } from "helpers/formatNumbers";

export function Country() {
    const { id } = useParams();
    const [country, setCountry] = React.useState(null);

    React.useEffect(() => {
        getCountryById(id)
            .then((data) => setCountry(data))
            .catch((error) => console.error(error));
    }, [id]);

    console.log(country);

    return (
        <Wrapper>
            <BackButton to="/">
                <i className="fas fa-arrow-left"></i>
                <span>Back</span>
            </BackButton>
            {
              country
              ? (
                <CountryContainer>
                  <Thumbnail>
                      <img src={country.flag} alt={country.name} />
                  </Thumbnail>
                  <div>
                    <Content>
                        <Title>{country.name}</Title>
                        <Information>
                          <ul>
                              <li>
                                  <strong>Native Name: </strong>{country.nativeName}
                              </li>
                              <li>
                                  <strong>Population: </strong>{numberWithCommas(country.population)}
                              </li>
                              <li>
                                  <strong>Region: </strong>{country.region}
                              </li>
                              <li>
                                  <strong>Sub Region: </strong>{country.subregion}
                              </li>
                              <li>
                                  <strong>Capital: </strong>{country.capital}
                              </li>
                          </ul>
                          <ul>
                              <li>
                                  <strong>Top Level Domain: </strong>
                                  {
                                    country.topLevelDomain.join(", ")
                                  }
                              </li>
                              <li>
                                  <strong>Currencies: </strong>
                                  {
                                    country.currencies.map((item, index) => {
                                      if(country.currencies.length === 1) {
                                        return <span key={index}>{item.name}</span>
                                      }
                                      return <span key={index}>{item.name}, </span>
                                    })
                                  }
                              </li>
                              <li>
                                  <strong>Languages: </strong>
                                  {
                                    country.languages.map((item, index) => {
                                      if(country.languages.length === 1) {
                                        return <span key={index}>{item.name}</span>
                                      }
                                      return <span key={index}>{item.name}, </span>
                                    })
                                  }
                              </li>
                          </ul>
                        </Information>
                    </Content>
                    <Borders>
                      <h4>Border Countries</h4>
                      <div>
                          {
                            country.borders.length > 0
                            ? country.borders.map((item, index) => (
                              <span key={index}>{item}</span> 
                            ))
                            : <span>No Border Countries</span>
                          }
                      </div>
                  </Borders>
                  </div>
                </CountryContainer>
              )
              : <p>Cargando...</p>
            }
        </Wrapper>
    );
}
