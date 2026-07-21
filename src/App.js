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
              <input type="search" className="input-search form-control bg-light border-0" placeholder="Enter City ......"  autoFocus="on"/>
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
