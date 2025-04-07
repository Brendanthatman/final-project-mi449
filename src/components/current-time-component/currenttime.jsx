import { createElement, use, useEffect, useState } from 'react';
import getToday from '../globalComponentFunctions';

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

export default CurrentTime;