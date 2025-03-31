import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Weather() {
  let info = [];
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'ab6c56b840msh00dd6e776e7e18ep13c302jsncbe8de164cb2'
    }
  };
  
  async function getWeather(){
    await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=43.119%2C-85.559', options)
    .then(response => response.json())
      .then((response) => {
        info.push(response.current.feelslike_f + '°F');
        info.push(response.location.localtime);
    })
    .catch(err => console.error(err));
  }
  getWeather();

  const listWeather = info.map(data =>
    <li>{data}</li>
  );

  return (
    <div>
      <ul>
        {listWeather}
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
