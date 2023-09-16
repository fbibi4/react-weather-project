import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Mon</div>
          <WeatherIcon code="01d" size={30} />
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperature-Max">19</span>
            <span className="WeatherForecastTemperature-Min">15</span>
          </div>
        </div>
      </div>
    </div>
  );
}