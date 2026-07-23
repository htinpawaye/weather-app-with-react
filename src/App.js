import React from "react";
import Weather from "./Component/weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card col-7 mt-5 border-0 shadow-sm p-3 mb-5 bg-body rounded">
          {/* head */}
          <h3 className="m-3">Weather App</h3>
          {/* search engine */}{/* weather info */}
          <Weather city="Lisbon"/>
          {/* footer */}
          <footer className="m-3">
            <small>
              This project was coded by
              <span className="text-info"> Htin Paw Aye</span> and is
              <a href="https://github.com/htinpawaye/weather-app-with-react" className="text-info" target="_blank" rel="noopener noreferrer"> open-sourced on GitHub </a>
              and
              <a href="https://splendid-pasca-e17bf7.netlify.app/" className="text-info" target="_blank" rel="noopener noreferrer"> hosted on Netlify</a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}
