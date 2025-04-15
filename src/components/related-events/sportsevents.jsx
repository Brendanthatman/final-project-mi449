import { useState } from 'react';

function SportsEvents () {
    const [upcomingSports, setUpcomingSports] = useState([]);
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

    return (
        <div>
            { upcomingSports.map((event) => {
                return (
                    <>
                        <h4 key={event.name}>{event.name}</h4>
                        <p>{event.start_time}</p>
                        <p>{event.end_time}</p>
                        <p>{event.venue.name}</p>
                        <p>{event.is_virtual ? "Virtual" : "In-Person"}</p>
                    </>
                );
            })}
        </div>
    );
}

export default SportsEvents;