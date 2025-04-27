import { createElement, use, useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import getToday from '../globalComponentFunctions';
import "./classschedule.css";
import "../../App.css";

function ClassSchedule ({ userEmail }) {
    const [classList, setClassList] = useState([]);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [selectedDayIndex, setSelectedDayIndex] = useState(new Date().getDay()); // Default to today
    
    // Function to convert day index to day string (for Supabase query)
    const getDayString = (dayIndex) => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[dayIndex];
    };
     
    // Function to get classes for the selected day
    const getClassesForDay = async (dayIndex) => {
      const dayString = getDayString(dayIndex);
      
      try {
        let { data: Classes, error } = await supabase
          .from('Classes')
          .select("*")
          .like('class_day', dayString)
          .like('user_id', userEmail);
          
        if (error) {
          console.error("Error fetching classes:", error);
          return;
        }
        
        setClassList(Classes || []);
      } catch (err) {
        console.error("Exception when fetching classes:", err);
      }
    };
  
    // Handle day selection
    const selectDay = (index) => {
      setSelectedDayIndex(index);
    };
  
    // Fetch classes whenever selectedDayIndex changes
    useEffect(() => {
      getClassesForDay(selectedDayIndex);
    }, [selectedDayIndex, userEmail]);
  
    return (
      <div className='my-5 w-full'> 
        <h3 className="blockTitle w-60 p-2">Today's Classes</h3>
        <div className="blockContent p-5 text-base text-left">
          <div className='flex flex-row justify-evenly'>
            {daysOfWeek.map((day, index) => {
              const isSelected = index === selectedDayIndex;
              return (
                <div key={day} className="text-center w-1/7 cursor-pointer dayHover" onClick={() => selectDay(index)}>
                  <p className={`${isSelected ? "green-text" : "gray-text"}`}>{day}</p>
                  {isSelected && <div className="border-b-3 border-green-600 w-auto mx-auto pt-1"></div>} {/* Green line */}
                </div>
              );
            })}
          </div>
          <hr className="border-0.5 border-gray-300 my-0" />
          <ul>
          {classList && classList.length > 0 ? (
            classList.map(theClass => (
              <div key={theClass.id} className="py-2 mt-4 flex items-center">
                <div>
                  <p className="text-sm font-normal fontInstrumental pl-2" style={{color: 'var(--text-color)'}}>{theClass.class_begin}</p>
                  <p className="text-sm font-normal fontInstrumental pl-2" style={{color: 'var(--text-color)'}}>{theClass.class_end}</p>
                </div>
                <div className="border-l-1 h-16 text-green-600 ml-5"></div>
                <div className="flex-1 px-2 text-left ml-4">
                  <p className="font-medium" style={{color: 'var(--text-black)'}}>{theClass.class_title}</p>
                  <p className="text-sm" style={{color: 'var(--text-color)'}}>{theClass.class_location}</p>
                </div>
              </div>
            ))
          ) : (
            <li className='text-center m-10 font-medium' style={{color: 'var(--text-black)'}}>No class on {getDayString(selectedDayIndex)}</li>
          )}
          </ul>
        </div>
      </div>
    );
  }

  export default ClassSchedule;