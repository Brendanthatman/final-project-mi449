import { createElement, use, useEffect, useState } from 'react';
import getToday from '../globalComponentFunctions';
import "./currenttime.css";

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
    <div className='text-right' style={{ width: '140px', color: 'var(--text-color)' }}>
      <p className='fontDisplay text-xl'>{currentTime.toLocaleDateString()}</p>
      <p className='fontInstrument text-xl font-medium'>{today}</p>
      <p className='fontInstrument text-xl font-medium'>
        {currentTime.toLocaleTimeString('en-US', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </p>
    </div>
  );
};

export default CurrentTime;