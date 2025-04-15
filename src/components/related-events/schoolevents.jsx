import { supabase } from "../../supabaseClient";
import { useEffect, useState } from "react";

function SchoolEvents () {
    const [eventsList, setEventsList] = useState([]);

    async function getEvents () {
        let { data: Events, error } = await supabase
          .from('Events')
          .select("*")
        setEventsList(Events);
      }

      getEvents();

    return (
        <div>
            { eventsList.map((event) => {
                return (
                    <>
                        <h4 key={event.title}>{event.title}</h4>
                        <p>{event.beginning_time}</p>
                        <p>{event.ending_time}</p>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                        <p>{event.modality}</p>
                    </>
                );
            })}
        </div>
    );
}

export default SchoolEvents;