import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import FormattedTodayDate from "./FormattedTodayDate";
import FormattedDateSunriseSunset from "./FormattedDateSunriseSunset";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
  const [ready, setReady]= useState (false);
  const [weatherData, setWeatherData]=useState({});

function handleResponse(response){
  setWeatherData({
    city: response.data.name,
    todayDate: new Date (response.data.dt * 1000),
    date: new Date (response.data.dt * 1000),
    weatherDescription: response.data.weather[0].description,
    weatherIcon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    currentTemperature: response.data.main.temp,
    sunrise: new Date (response.data.sys.sunrise * 1000),
    sunset: new Date (response.data.sys.sunset * 1000),
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    temperatureMax: response.data.main.temp_max,
    temperatureMin: response.data.main.temp_min
  });
  
  setReady(true);

}

if (ready){
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
      <h5 className="todayDate"><FormattedTodayDate date={weatherData.date}/></h5>
      <br />
      <h6 className="sunrise-sunset">
        Sunrise: <span><FormattedDateSunriseSunset date={weatherData.sunrise}/></span>
        <br />
        Sunset: <span><FormattedDateSunriseSunset date={weatherData.sunset}/></span>
      </h6>
      <br />

      <div className="temperature-settings">
        <div className="float-left">
          <span className="current-temperature">
            {Math.round(weatherData.currentTemperature)}
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
        Last updated: <span><FormattedDate date={weatherData.date}/></span>
      </h6>

      <img className="imageForExample" src={weatherData.weatherIcon} alt={weatherData.weatherDescription} />
      <p className="text-capitalize">
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
              Temperature max: <span>{Math.round(weatherData.temperatureMax)}</span>˚C
            </td>
          </tr>
          <tr>
            <td>
              Wind: <span>{Math.round(weatherData.wind)} </span>km/h
            </td>
            <td>
              Temperature min: <span>{Math.round(weatherData.temperatureMin)}</span>˚C
            </td>
          </tr>

          <td> </td>
        </table>
      </div>
      <br />

      <div className="row weather-forecast"></div>

     
    </div>
  );
}  else{
 const apiKey="a156c6c640df016853c05d9f7e81abef";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

  return "Loading...";
}
}

 