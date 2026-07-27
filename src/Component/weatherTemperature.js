import {React, useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    if (unit === "celsius") {
        return (
        <div className="weather-temperature">
            <span className="temp fw-bold">{props.temperature}</span>
            <span className="unit ms-1 fs-6">
                <a href="/" className="text-decoration-none text-dark fw-bold">°C</a>
                <span className="text-muted mx-1">|{""}</span>
                <a href="/" className="text-decoration-none" onClick={convertToFahrenheit}>°F</a>
            </span>
        </div>
    );
    } else {
        let fahrenheit = (props.temperature * 9) / 5 + 32;
        return (
        <div className="weather-temperature">
            <span className="temp fw-bold">{Math.round(fahrenheit)}</span>
            <span className="unit ms-1 fs-6">
                <a href="/" className="text-decoration-none text-primary">°C</a>
                <span className="text-muted mx-1">|</span>
                <a href="/" className="text-decoration-none text-dark fw-bold">°F</a>
            </span>
        </div>
    );
    }
    
}