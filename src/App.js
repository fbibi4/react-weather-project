import React from "react";
import "./App.css";
import Weather from "./Weather";
import Lottie from "lottie-react";
import nightSky from "./nightSky.json";
import day from "./day.json";

export default function App() {
  return (
    <div className="App">
      <Lottie animationData={nightSky} className="lottie-container" />
      <Lottie animationData={day} className="lottie-container-2" />

      <div className="container">
        <Weather defaultCity="Bradford" />

        <footer>
          This project was designed by Farha Bibi{" "}
          <a
            href="https://github.com/fbibi4/react-weather-project"
            rel="noopener noreferrer"
            target="_blank"
          >
            opened-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
