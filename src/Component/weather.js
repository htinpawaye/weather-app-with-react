import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/weather.css";
import FormattedDate from "./formattedDate";
import WeatherTemperature from "../Component/weatherTemperature";
import WeatherForecast from "../Component/weatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response.data);

    // Guard check: make sure temperature exists before reading properties
    if (response.data && response.data.temperature) {
      setWeatherData({
        loaded: true,
        coordinates: response.data.coordinates,
        temperature: Math.round(response.data.temperature.current),
        humidity: response.data.temperature.humidity,
        wind: Math.round(response.data.wind.speed),
        city: response.data.city,
        description: response.data.condition.description,
        icon_url: response.data.condition.icon_url,
        icon_description: response.data.condition.icon,
        date: new Date(response.data.time * 1000)
      });
    } else {
      alert("City not found. Please try again!");
    }
  }

  function search() {
    if (!city) return;
    const apiKey = "bf3f9f396370566c3abta48aeo525af1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch((error) => {
      console.error("Error fetching weather data:", error);
    });
  }

  // Handle Current Location button using Geolocation API
  function searchCurrentLocation(position) {
    const apiKey = "bf3f9f396370566c3abta48aeo525af1";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCurrentClick() {
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    search();
  }, []);

  if (!weatherData.loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Weather">
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <div className="search d-flex flex-row m-3">
            <input
              type="search"
              className="input-search form-control bg-light border-0"
              placeholder="Enter City ......"
              autoFocus={true}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-outline-primary w-25 ms-1">
              Search
            </button>

            <button
              type="button"
              className="btn btn-outline-success w-25 ms-1"
              onClick={handleCurrentClick}
            >
              Current
            </button>
          </div>
        </form>
      </div>
      <div className="weather-info m-3">
        <h2>{weatherData.city}</h2>
        <ul className="list-unstyled text-capitalize">
          <FormattedDate date={weatherData.date} />
          <li>{weatherData.description}</li>
        </ul>
      </div>

      <div className="weather-infoTwo d-flex flex-row justify-content-between m-3">
        <div className="image d-flex flex-row align-items-center">
          <img
            src={weatherData.icon_url}
            alt={weatherData.icon_description}
            className="me-1"
          />
          <div className="temperature d-flex flex-row align-items-start">
            <WeatherTemperature temperature={weatherData.temperature} />
          </div>
        </div>

        <div className="weather-infoThree">
          <ul className="list-unstyled mb-0">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>

      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  );
}