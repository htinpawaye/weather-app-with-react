import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/weatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleForecastResponse(response) {
    // console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    // Only fetch if coordinates exist
    if (props.coordinates) {
      let apiKey = "bf3f9f396370566c3abta48aeo525af1";
      let longitude = props.coordinates.longitude;
      let latitude = props.coordinates.latitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
      axios.get(apiUrl).then(handleForecastResponse);
    }
  }, [props.coordinates]); // Re-run effect if coordinates change

  // Guard clause while loading or wahttpsiting for coordinates
  if (!loaded || !props.coordinates) {
    return <div>Loading forecast...</div>;
  }

  return (
    console.log(forecastData),
    <div className="weather-forecast">
      <div className="row">
        {forecastData.slice(0, 6).map(function (forecastDay, index) {
          return (
            <div className="col" key={index}>
              <div className="weather-forecast-date">
                {new Date(forecastData[index].time * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                //   month: "short",
            //   day: "numeric"
            })}
          </div>
          <img
            src={forecastData[index].condition.icon_url}
            alt={forecastData[index].condition.icon_description}
            width="42"
          />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-temperature-max"> 
                {Math.round(forecastData[index].temperature.maximum)}°
            </span>
            <span className="weather-forecast-temperature-min"> 
                {Math.round(forecastData[index].temperature.minimum)}°
            </span>
          </div>
        </div>
        );
        })}
      </div>
    </div>
  );
}