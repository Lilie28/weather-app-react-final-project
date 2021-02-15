import React from "react";
import "./Weather.css";

export default function Weather(){
let weatherData = {
    city: "London",
    todayDate: "Sun 31 January",
    date: "today at 20:20",
    weatherDescription: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    currentTemperature: 10,
    sunrise: "7:00",
    sunset: "16:30",
    humidity: 70,
    wind: 3,
    temperatureMax: 8,
    temperatureMin: 0
  };
  return (
    <div className="Weather">
      <h6>
        <button type="submit" className="button-current-location">
          📍
        </button>
        <span></span>
      </h6>

      <form className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder=" or enter a city"
          autoComplete="off"
        />
        <button type="submit" className="search-button" title="Search any city">
          🔍
        </button>
      </form>

      <h1 className="city">{weatherData.city}</h1>
      <h5 className="todayDate">{weatherData.todayDate}</h5>
      <br />
      <h6 className="sunrise-sunset">
        Sunrise: <span>{weatherData.sunrise}</span>
        <br />
        Sunset: <span>{weatherData.sunset}</span>
      </h6>
      <br />

      <div className="temperature-settings">
        <div className="float-left">
          <span className="current-temperature">
            {weatherData.currentTemperature}
          </span>
          <small className="units">
            <a href="#" className="active">
              ˚C{" "}
            </a>
            |<a href="#">˚F </a>
          </small>
        </div>
      </div>

      <h6 className="updated">
        Last updated: today at <span>{weatherData.date}</span>
      </h6>

      <img src={weatherData.imgUrl} alt={weatherData.weatherDescription} />
      <p className="current-weather-description">
        {weatherData.weatherDescription}
      </p>

      <br />
      <br />
      <div className="parameters">
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              Humidity: <span>{weatherData.humidity}</span>%
            </td>
            <td>
              {" "}
              Temperature max: <span>{weatherData.temperatureMax}</span>˚C
            </td>
          </tr>
          <tr>
            <td>
              Wind: <span>{weatherData.wind} </span>km/h
            </td>
            <td>
              Temperature min: <span>{weatherData.temperatureMin}</span>˚C
            </td>
          </tr>

          <td> </td>
        </table>
      </div>
      <br />

      <div className="row weather-forecast"></div>

     
    </div>
  );
  
}

 