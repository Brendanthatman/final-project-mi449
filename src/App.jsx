import { createElement, use, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function getToday (dayNum) {
  const daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysoftheweek[dayNum];
}

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

  let today = currentTime.getDay();
  today = getToday(today);

  return (
    <div>
      <p>{currentTime.toLocaleDateString()}</p>
      <p>{today}</p>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

function ClassSchedule () {
  const [classList, setClassList] = useState([]);
  
  let today = new Date().getDay();
  today = getToday(today);

  async function getTodaysClasses () {
    let { data: Classes, error } = await supabase
      .from('Classes')
      .select("*")
      .like('class_day', today)
    setClassList(Classes);
  }

  getTodaysClasses();

  //alert(classList);
  return (
    <div>
      <ul>
        {
          classList.map(theClass => {
            <li>{theClass.class_title} at {theClass.class_begin} until {theClass.class_end}.</li>
          })
        }
      </ul>
    </div>
  );
}

function TopBar(){
  const [user, setUser] = useState("[name]");

  return (
    <>
    <div>
      <h1>Hi, {user}.</h1>
      <h2>Welcome to your MSU Dashboard.</h2>
    </div>
    <Weather />
    <CurrentTime />
    </>
  );
}

function App() {

  return (
    <>
      <TopBar />
      <ClassSchedule />
    </>
  )
}

export default App
