import { createElement, use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Weather() {
  const [currentTemp, setCurrentTemp] = useState("");
  const [highTemp, setHighTemp] = useState("");
  const [lowTemp, setLowTemp] = useState("");

  let info = [];
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
    })
    .catch(err => console.error(err));
  }

  async function getForecastWeather(){
    await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=43.119%2C-85.559&days=3', options)
    .then(response => response.json())
      .then((response) => {
        setHighTemp(response.forecast.forecastday[0].day.maxtemp_f + '°F');
        setLowTemp(response.forecast.forecastday[0].day.mintemp_f + '°F');
    })
    .catch(err => console.error(err));
  }

  getCurrentWeather();
  getForecastWeather();


  return (
    <div>
      <ul id='weather_list'>
        <li>{currentTemp}</li>
        <li>{highTemp}</li>
        <li>{lowTemp}</li>
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MSU Dashboard</h1>
      <Weather />
    </>
  )
}

export default App
