import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useGetData from "../services/requests";

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

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1>Selecione o país</h1>
        <ul>
          {countries && countries.map((country) => (
              <li
                key={`${country.code}-${country.name}`}
                onClick={() => handleCountrySelect(country)}
                style={{ cursor: "pointer" }}
              >
                {country.name}
              </li>
            ))}
        </ul>
        {selectedCountry && (
          <div>
            <h2>{selectedCountry.name}</h2>
            <img
              src={`https://media.api-sports.io/flags/${selectedCountry.code}.svg`}
              alt={`${selectedCountry.name} Flag`}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Countries;
