import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card col-7 mt-5 border-0 shadow-sm p-3 mb-5 bg-body rounded">
          {/* head */}
          <h3 className="m-3">Weather App</h3>
          {/* search engine */}
          <form>
            <div className="search d-flex flex-row m-3">
              <input type="search" className="input-search form-control bg-light border-0" placeholder="Enter City ......" autoFocus="on" />
              <button type="submit" className=" btn btn-primary w-50">Search</button>
            </div>
          </form>
          {/* weather info */}
          <div className="weather-info m-3">
            <h2>San Francisco</h2>
            <ul className="list-unstyled">
              <li>Tuesday 16:00</li>
              <li>Cloudy</li>
            </ul>
          </div>

          <div className="weather-infoTwo d-flex flex-row justify-content-between m-3">
            <div className="image d-flex flex-row align-items-center">
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/strong_thunderstorms_light.svg"
                alt="weather"
                className="me-2"
              />
              <div className="temperature d-flex flex-row align-items-start">
                <span className="fw-bold fs-1 lh-1">15</span>
                <span className="unit ms-1 fs-6">
                  <a href="/" className="text-decoration-none text-dark fw-bold">°C</a>
                  <span className="text-muted mx-1">|</span>
                  <a href="/" className="text-decoration-none text-primary">°F</a>
                </span>
              </div>
            </div>

            <div className="weather-infoThree">
              <ul className="list-unstyled mb-0">
                <li>Precipitation: 47%</li>
                <li>Humidity: 87%</li>
                <li>Wind: 7 mph</li>
              </ul>
            </div>
          </div>
          {/* footer */}
          <footer className="m-3">
            <small>
              This project was coded by
              <span className="text-info"> Htin Paw Aye</span> and is
              <a href="https://github.com/yourusername" className="text-info" target="_blank" rel="noopener noreferrer"> open-sourced on GitHub </a>
              and
              <a href="https://yourusername.github.io/weather-app-with-react/" className="text-info" target="_blank" rel="noopener noreferrer"> hosted on Netlify</a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}
