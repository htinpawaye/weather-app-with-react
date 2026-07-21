import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card col-7 mt-5 border-0 shadow-sm p-3 mb-5 bg-body rounded">
          <h3 className="m-3">Weather App</h3>
          <form>
            <div className="search d-flex flex-row m-3">
              <input type="search" className="input-search form-control bg-light border-0" placeholder="Enter City ......"  autoFocus="on"/>
              <button type="submit" className=" btn btn-primary w-50">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
