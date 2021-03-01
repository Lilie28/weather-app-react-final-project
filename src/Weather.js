import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props){
  const [ready, setReady]= useState (false);
  const [weatherData, setWeatherData]=useState({});
  const [city, setCity] = useState (props.defaultCity);

function handleResponse(response){
  setWeatherData({
    city: response.data.name,
    todayDate: new Date (response.data.dt * 1000),
    date: new Date (response.data.dt * 1000),
    weatherDescription: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
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

function handleSubmit (event){
  event.preventDefault();
  search ();
}

function handleCityChange(event){
  setCity (event.target.value);
}

function search(){
  const apiKey="a156c6c640df016853c05d9f7e81abef";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 
}

if (ready){
  return (
    <div className="Weather">
      

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder=" or enter a city"
          onChange={handleCityChange}
          autoComplete="off"
        />
        <button type="submit" className="search-button" title="Search any city">
          🔍
        </button>
      </form>

      <WeatherInfo data={weatherData}/>
      <WeatherForecast city={weatherData.city} />
    </div>
  );
  }else{
  search ();

  return "Loading...";
  
  }
}