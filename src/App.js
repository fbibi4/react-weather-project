import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bradford" />
        <footer>
          This project was designed by Farha Bibi{" "}
          <a
            href="https://github.com/fbibi4/react-weather-project"
            target="blank"
          >
            opened-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
