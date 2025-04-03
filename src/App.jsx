import { createElement, use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Weather() {
  const [currentTemp, setCurrentTemp] = useState("Loading");
  const [highTemp, setHighTemp] = useState("Loading");
  const [lowTemp, setLowTemp] = useState("Loading");

  let info = [];
  /**const options = {
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
  getForecastWeather();**/


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

/**function CurrentTimeDate() {
  let [date, setDate] = useState(Date());

  useEffect (() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    }
  });

  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
}**/


// ChatGPT prompt: create a reactjs component that displays the current time and date and automatically updates the time 
const CurrentTime = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p>{currentTime.toLocaleString()}</p> {/* Displays time and date in the locale format */}
    </div>
  );
};

function App() {

  return (
    <>
      <h1>MSU Dashboard</h1>
      <Weather />
      <CurrentTime />
    </>
  )
}

export default App
