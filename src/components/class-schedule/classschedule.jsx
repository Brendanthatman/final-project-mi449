import { createElement, use, useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import getToday from '../globalComponentFunctions';

function ClassSchedule () {
    const [classList, setClassList] = useState([]);
    
    let today = new Date().getDay();
    // today is a string of today's day of the week (e.g. "Monday")
    today = getToday(today);
  
    async function getTodaysClasses () {
      let { data: Classes, error } = await supabase
        .from('Classes')
        .select("*")
        .like('class_day', today)
      setClassList(Classes);
    }
  
    getTodaysClasses();
  
    return (
      <div>
        <h3>Today's Classes</h3>
        <div>
          <p>Sunday</p>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
        </div>
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
    );
  }

  export default ClassSchedule;