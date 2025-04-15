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
      <div>
        <Button label="School Events" variant={schoolEventsButtonActive ? 'focused' : 'unfocused'} onClick={schoolEventsButtonClick} />
        <Button label="Spartan Athletics" variant={!schoolEventsButtonActive ? 'focused' : 'unfocused'} onClick={sportsEventsButtonClick} />

        {schoolEventsButtonActive ? <SchoolEvents /> : <SportsEvents />}
      </div>
    );
}

export default RelatedEvents;