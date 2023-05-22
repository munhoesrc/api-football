import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useGetData from "../services/requests";
import "../styles/countries.css"


function Countries() {
  const API_COUNTRIES = "https://v3.football.api-sports.io/countries";
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countriesData = useGetData(API_COUNTRIES);

  useEffect(() => {
    if (countriesData) {
      setCountries(countriesData);
    }
    console.log(countriesData, 'AQUIIIII');
  }, [countriesData]);

  return (
    <div className="container">
      <Navbar />
      <div>
        <h1 className="title-home" >Selecione o país</h1>
        <select
          className="imput-select"
          value={selectedCountry ? selectedCountry.code : ""}
          onChange={(e) =>
            setSelectedCountry(
              countries.find((country) => country.code === e.target.value)
            )
          }
        >
          <option 
            className="option-select"
            value="">--- Selecione um país AQUI ---
          </option>
          {countries.map((country) => (
            <option
              key={country.code}
              value={country.code}
            >
              {country.name}
            </option>
          ))}
        </select>
        {selectedCountry && (
          <div className="selected-country">
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} Flag`}
              />
            <h2 className="name-countries">{selectedCountry.name}</h2>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
  
}

export default Countries;
