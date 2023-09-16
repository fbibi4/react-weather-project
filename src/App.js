import React from "react";
import "./App.css";
import Weather from "./Weather";
import Lottie from "lottie-react";
import day from "./day";

export default function App() {
  return (
    <div className="App">
      <Lottie animationData={day} className="lottie-container" />
      <div className="container">
        <Weather defaultCity="Bradford" />
        <footer>
          This project was designed by Farha Bibi{" "}
          <a
            href="https://github.com/fbibi4/react-weather-project"
            target="_blank"
          >
            opened-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
