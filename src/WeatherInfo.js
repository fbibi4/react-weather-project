import React from "react";
import FullDate from "./FullDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <FullDate date={props.data.date} />
        </li>
        <li className="text-capitalize ">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <WeatherIcon code={props.data.icon} size={56} />
            <div className="float-left"></div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul className="description">
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>

          <br />
        </div>
      </div>
    </div>
  );
}
