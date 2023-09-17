import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "f8e14a21ac2a08b12d64743366f61697";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-1">
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
