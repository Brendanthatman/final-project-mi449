import { createElement, use, useEffect, useState } from 'react';
import Weather from '../../components/weather-component/weather';
import CurrentTime from '../../components/current-time-component/currenttime';


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

  export default TopBar;