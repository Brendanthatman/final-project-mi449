import React, { useState, useEffect } from 'react';
import "./relatedevents.css";


function SportsEvents () {
    const [upcomingSports, setUpcomingSports] = useState([]);
    // NOTE: API below was in use, but commented out as the maximum queries was reached for the month for the free tier; example events are used instead.
    /**const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'real-time-events-search.p.rapidapi.com',
          'X-RapidAPI-Key': 'ab6c56b840msh00dd6e776e7e18ep13c302jsncbe8de164cb2'
        }
      };
      
      async function getCurrentSports(){
        await fetch('https://real-time-events-search.p.rapidapi.com/search-events?query=Michigan%20State%20University%20Sports&date=month&is_virtual=false&start=0', options)
        .then(response => response.json())
          .then((response) => {
            setUpcomingSports(response.data);
        })
        .catch(err => console.error(err));
      }
      
        getCurrentSports();**/
        useEffect(() => {
          // Simulate fetching data
          const fakeEvents = [
            {
              id: 1,
              name: "Baseball vs. Oregon",
              start_time: "6:02PM",
              end_time: "9:30PM",
              date: "Friday, May 2, 2025",
              venue: { name: "Jeff Ishbia Field at McLane Stadium" },
              is_virtual: false,
            },
            {
              id: 2,
              name: "Softball at Oregon",
              start_time: "9:00PM",
              end_time: "12:00AM",
              date: "Friday, May 2, 2025",
              venue: { name: "Eugene, OR" },
              is_virtual: false,
            },
          ];
          setUpcomingSports(fakeEvents);
        }, []);

    return (
        <div>
            {upcomingSports.map((event) => (
              <div
                key={event.id || event.name} // Use event.id if available, otherwise event.name
                className="rounded-lg px-4 py-3 flex justify-between items-center cardBorder my-5" style={{backgroundColor: 'var(--list-bg)'}}
              >
                {/* Time Column */}
                <div className="text-sm font-normal fontInstrumental pl-2" style={{color: 'var(--text-black)'}}>
                  <p>{event.start_time}</p>
                  <p>{event.end_time}</p>
                </div>

                {/* Green Vertical Line */}
                <div className="border-l-1 h-16 text-green-600 ml-5"></div>

                {/* Event Information */}
                <div className="flex-1 px-2 text-left ml-4">
                  <h4 className="font-medium mb-1" style={{color: 'var(--text-black)'}}>{event.name}</h4>
                  <p className="text-sm" style={{color: 'var(--text-color)'}}>{event.date}</p>
                  <p className="text-sm" style={{color: 'var(--text-color)'}}>{event.venue?.name}</p> {/* Use optional chaining */}
                </div>

                {/* Modality (Placeholder) */}
                <div className="flex flex-col items-end gap-6">
                  <span className="cardTag text-xs font-semibold px-3 py-1 rounded-full">
                    {/* Add modality information here if available */}
                    {event.is_virtual ? "Virtual" : "In-Person"}
                  </span>
                </div>
              </div>
            ))}
        </div>
    );
}

export default SportsEvents;