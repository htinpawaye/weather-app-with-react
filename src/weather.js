import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city, // Fixed: displays City name instead of Country name
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon_description: response.data.condition.icon,
    });
  }

  useEffect(() => {
    const apiKey = "bf3f9f396370566c3abta48aeo525af1";
    // Fallback to a default city (e.g., "San Francisco" or props.defaultCity) if weatherData.city isn't set yet
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [weatherData.city]); // Run on initial render

  if (!weatherData.loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Weather">
      <div className="weather-info m-3">
        <h2>{weatherData.city}</h2>
        <ul className="list-unstyled text-capitalize">
          <li>Tuesday 16:00</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>

      <div className="weather-infoTwo d-flex flex-row justify-content-between m-3">
        <div className="image d-flex flex-row align-items-center">
          <img
            src={weatherData.icon_url}
            alt={weatherData.icon_description} // Fixed key reference
            className="me-1"
          />
          <div className="temperature d-flex flex-row align-items-start">
            <span className="fw-bold fs-1 lh-1">{weatherData.temperature}</span>
            <span className="unit ms-1 fs-6">
              <a href="/" className="text-decoration-none text-dark fw-bold">°C</a>
              <span className="text-muted mx-1">|</span>
              <a href="/" className="text-decoration-none text-primary">°F</a>
            </span>
          </div>
        </div>

        <div className="weather-infoThree">
          <ul className="list-unstyled mb-0">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}