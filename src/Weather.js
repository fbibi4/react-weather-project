import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type in a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h2>Bradford</h2>
      <ul>
        <li>Tuesday 12:00pm</li>
        <li>Rain showers</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="Rain showers"
          />
          14°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 99%</li>
            <li>Humidity: 97%</li>
            <li>Wind: 7 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
