import Button from '../button/button';
import SportsEvents from './sportsevents';
import SchoolEvents from './schoolevents';
import { useState } from 'react';

function RelatedEvents () {
    const [schoolEventsButtonActive, setSchoolEventsButtonActive] = useState(true);
    const [activeVariant, setActiveVariant] = useState("focused");
 
    const schoolEventsButtonClick = () => {
        setSchoolEventsButtonActive(true);
        setActiveVariant("focused");
    };

    const sportsEventsButtonClick = () => {
        setSchoolEventsButtonActive(false);
        setActiveVariant("unfocused");
    };

    return (
      <div className='my-5'>
        <h3 className='blockTitle w-60 p-2 '>Related Events</h3>
        <div className='blockContent p-6 w-lg'>
          <div className='flex flex-row items-start space-x-3'>
          <Button label="School Events" variant={schoolEventsButtonActive ? 'focused' : 'unfocused'} onClick={schoolEventsButtonClick} />
          <Button label="Spartan Athletics" variant={!schoolEventsButtonActive ? 'focused' : 'unfocused'} onClick={sportsEventsButtonClick} />
          </div>
          

          {schoolEventsButtonActive ? <SchoolEvents /> : <SportsEvents />}
        </div>
      </div>
      
    );
}

export default RelatedEvents;