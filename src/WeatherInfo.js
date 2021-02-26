import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTodayDate from "./FormattedTodayDate";
import FormattedDateSunriseSunset from "./FormattedDateSunriseSunset";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
return (
  <div className="WeatherInfo">

      <h1 className="city">{props.data.city}</h1>
      <h5 className="todayDate"><FormattedTodayDate date={props.data.date}/></h5>
      <br />
      <h6 className="sunrise-sunset">
        Sunrise: <span><FormattedDateSunriseSunset date={props.data.sunrise}/></span>
        <br />
        Sunset: <span><FormattedDateSunriseSunset date={props.data.sunset}/></span>
      </h6>
      <br />

      <div className="temperature-settings">
        <div className="float-left">
          <span className="current-temperature">
            {Math.round(props.data.currentTemperature)}
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
        Last updated: <span><FormattedDate date={props.data.date}/></span>
      </h6>

    <div className="iconImage">
        <WeatherIcon 
        code={props.data.icon} 
        />
    </div>

      
      <p className="text-capitalize">
        {props.data.weatherDescription}
      </p>

      <br />
      <br />
      <div className="parameters">
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              Humidity: <span>{props.data.humidity}</span>%
            </td>
            <td>
              {" "}
              Temperature max: <span>{Math.round(props.data.temperatureMax)}</span>˚C
            </td>
          </tr>
          <tr>
            <td>
              Wind: <span>{Math.round(props.data.wind)} </span>km/h
            </td>
            <td>
              Temperature min: <span>{Math.round(props.data.temperatureMin)}</span>˚C
            </td>
          </tr>

          <td> </td>
        </table>
      </div>
      <br />

      <div className="row weather-forecast"></div>
  </div>
)
}