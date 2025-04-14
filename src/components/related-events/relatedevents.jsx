import Button from '../button/button';
import { supabase } from '../../supabaseClient';

function RelatedEvents () {
    /**const [listEvents, setListEvents] = useState([]);
    const [eventsButton, setEventsButton] = useState("focused");
    const [sportsButton, setSportsButton] = useState("unfocused");
    const [upcomingSports, setUpcomingSports] = useState([]);
    const options = {
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
            setListEvents(response.data);
        })
        .catch(err => console.error(err));
      }**/

      
    return (
      <div>
        <Button label="School Events" /**variant={eventsButton} onClick={getCurrentEvents()}**/ />
        <Button label="Spartan Athletics" /**variant={sportsButton} onClick={getCurrentEvents()}**/ />
      </div>
    );
}

export default RelatedEvents;