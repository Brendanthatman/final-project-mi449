import Button from '../button/button';
import SportsEvents from './sportsevents';
import SchoolEvents
 from './schoolevents';
function RelatedEvents () {
    /**const [listEvents, setListEvents] = useState([]);
    const [eventsButton, setEventsButton] = useState("focused");
    const [sportsButton, setSportsButton] = useState("unfocused");**/
 
    return (
      <div>
        <Button label="School Events" /**variant={eventsButton} onClick={getCurrentEvents()}**/ />
        <Button label="Spartan Athletics" /**variant={sportsButton} onClick={getCurrentEvents()}**/ />
        <SportsEvents />
        <SchoolEvents />
      </div>
    );
}

export default RelatedEvents;