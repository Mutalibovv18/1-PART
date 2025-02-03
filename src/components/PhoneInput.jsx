import React, { useState } from "react";
import data from "../data.json";
import "./PhoneInput.css"; 

const PhoneInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(data.countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const country = data.countries.find((c) => c.code === countryCode);
    setSelectedCountry(country);
    setPhoneNumber(""); 
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); 
    if (inputValue.length <= 15) {
      setPhoneNumber(inputValue);
    }
  };
  return (
    <div className="phone-input-container">
      <h2>Phone</h2>
      <div className="country-selector">
        <span className="flag">{selectedCountry.flag}</span>
        <select value={selectedCountry.code} onChange={handleCountryChange}>
          {data.countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="phone-input-wrapper">
        <span className="dial-code">{selectedCountry.dialCode}</span>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="phone-number-input"
          maxLength={15} 
        />
      </div>
    </div>
  );
};

export default PhoneInput;
