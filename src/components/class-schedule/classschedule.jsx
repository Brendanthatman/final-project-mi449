import { createElement, use, useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import getToday from '../globalComponentFunctions';
import "./classschedule.css";
import "../../App.css";

function ClassSchedule ({ userEmail }) {
    const [classList, setClassList] = useState([]);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let todayIndex = new Date().getDay(); // Get the day index (0-6)
    
    let today = new Date().getDay();
    // today is a string of today's day of the week (e.g. "Monday")
    today = getToday(today);
  
    async function getTodaysClasses () {
      let { data: Classes, error } = await supabase
        .from('Classes')
        .select("*")
        .like('class_day', today)
        .like('user_id', userEmail)
      setClassList(Classes);
    }
  
    getTodaysClasses();
  
    return (
      <div className='m-10'> 
        <h3 className="blockTitle w-60 p-2">Today's Classes</h3>
        <div className="blockContent p-5 text-base text-left">
          <div className='flex flex-row justify-evenly'>
            {daysOfWeek.map((day, index) => {
              const isToday = index === todayIndex;
              return (
                <div key={day} className="text-center w-1/7">
                  <p className={isToday ? "text-green-600" : "text-gray-500"}>{day}</p>
                  {isToday && <div className="border-b-3 border-green-600 w-auto mx-auto pt-1"></div>} {/* Green line */}
                </div>
              );
            })}
          </div>
          <hr className="border-0.5 border-gray-300 my-0" /> {/* Gray line */}
          <ul>
            {
              classList.map(theClass => {
                return(
                  <li key={theClass.id}>{theClass.class_title} at {theClass.class_begin} until {theClass.class_end}.</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }

  export default ClassSchedule;