import React, {useState} from "react";
import "./Weather.css";

export default function WeatherTemperature(props){
  const [unit, setUnit]= useState("celsius");

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }


  if (unit==="celsius"){
   return(
      <div className="WeatherTemperature">
        <span className="current-temperature">{Math.round(props.celsius)}</span>
          <small className="units">
              ˚C{" "}
            |<a className="unitsLink" href="/" onClick={showFahrenheit}>
              ˚F 
            </a>
          </small>
      </div>  
   );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="current-temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a className="unitsLink" href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}