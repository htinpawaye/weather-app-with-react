import React, { useState } from "react";
import axios from "axios";
import "../Css/weather.css";
import FormattedDate from "./formattedDate";
import WeatherTemperature from "../Component/weatherTemperature";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});
  const [city, setCity] = useState(props.city);

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
      date: new Date(response.data.time * 1000)
    });
  }

  function search(){
    const apiKey = "bf3f9f396370566c3abta48aeo525af1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleChange(event){
        setCity(event.target.value);
    }

  if (!weatherData.loaded) {
    search();
    return <div>Loading...</div>;
  }

  return (
    <div className="Weather">
         <div className="SearchEngine">
            <form onSubmit={handleSubmit}>
                <div className="search d-flex flex-row m-3">
                    <input type="search" className="input-search form-control bg-light border-0" placeholder="Enter City ......" autoFocus={true} onChange={handleChange}/>
                    <button type="submit" className=" btn btn-primary w-50">Search</button>
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
            alt={weatherData.icon_description} // Fixed key reference
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
    </div>
  );
}