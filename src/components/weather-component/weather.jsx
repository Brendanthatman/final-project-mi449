import { createElement, use, useEffect, useState } from 'react';
import "./weather.css";
import weatherPlaceholder from '../../assets/weathericonplaceholder.png'

function Weather() {
  const [currentTemp, setCurrentTemp] = useState("CurrentTemp");
  const [highTemp, setHighTemp] = useState("HighTemp");
  const [lowTemp, setLowTemp] = useState("LowTemp");
  const [currentIcon, setCurrentIcon] = useState(weatherPlaceholder);
  const [futureIcon, setFutureIcon] = useState(weatherPlaceholder);

  /**let info = [];
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'ab6c56b840msh00dd6e776e7e18ep13c302jsncbe8de164cb2'
    }
  };
  
  async function getCurrentWeather(){
    await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=43.119%2C-85.559', options)
    .then(response => response.json())
      .then((response) => {
        setCurrentTemp(response.current.temp_f + '°F');
        setCurrentIcon('https:' + response.current.condition.icon);
    })
    .catch(err => console.error(err));
  }

  async function getForecastWeather(){
    await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=43.119%2C-85.559&days=3', options)
    .then(response => response.json())
      .then((response) => {
        setHighTemp(response.forecast.forecastday[0].day.maxtemp_f + '°F');
        setLowTemp(response.forecast.forecastday[0].day.mintemp_f + '°F');
        setFutureIcon('https:' + response.forecast.forecastday[0].day.condition.icon);
    })
    .catch(err => console.error(err));
  }

  getCurrentWeather();
  getForecastWeather();**/


  return (
    <div>
      <div className="p-5 weatherBlock flex items-center space-x-4" id='weather_list' style={{width: "fit-content"}}>
        <div className="flex flex-col items-center">
          <p className='weatherText pb-1.5 text-base'>Current</p>
          <img className="weatherIcon" src={currentIcon} alt="" />
          <div className='weatherText pt-1 text-sm'>{currentTemp}</div>
        </div>
        <div className="flex flex-col items-center">
          <p className='weatherText pb-1.5 text-base'>Today</p>
          <img className="weatherIcon" src={futureIcon} alt="" />
          <div className='weatherText flex pt-1 text-sm'>
            <div>{highTemp}</div>
            <span className='mx-1'>|</span>
            <div>{lowTemp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;