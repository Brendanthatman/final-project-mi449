import { supabase } from "../../supabaseClient";
import "./relatedevents.css";
import { useEffect, useState } from "react";

function SchoolEvents () {
    const [eventsList, setEventsList] = useState([]);

    async function getEvents () {
        let { data: Events, error } = await supabase
          .from('Events')
          .select("*")
        setEventsList(Events);

        // Initialize each event with a 'starred' property
        const initialEvents = Events ? Events.map(event => ({ ...event, starred: false })) : [];
        setEventsList(initialEvents);
      }

      useEffect(() => {
        getEvents();
      }, []);

        // Function to toggle the 'starred' state of an event
        const toggleStar = (eventId) => {
            setEventsList(prevEvents => {
            const updatedEvents = prevEvents.map(event => {
                if (event.id === eventId) {
                return { ...event, starred: !event.starred };
                }
                return event;
            });

            // Sort the events so that starred events are at the top
            return [...updatedEvents].sort((a, b) => (b.starred ? 1 : 0) - (a.starred ? 1 : 0));
            });
        };

    return (
        <div>
            { eventsList.map((event) => {
                return (
                    <>
                    <div key={event.id} className="rounded-lg px-4 py-3 flex justify-between items-center cardBorder my-5" style={{backgroundColor: 'var(--list-bg)'}}>
                        {/* time */}
                        <div className="text-sm font-normal fontInstrumentalpl-2" style={{color: 'var(--text-color)'}}>
                            <p>{event.beginning_time}</p>
                            <p>{event.ending_time}</p>
                        </div>

                        <div className="border-l-1 h-16 text-green-600 ml-5"></div>

                        {/* activity */}
                        <div className="flex-1 px-2 text-left ml-4">
                            <h4 className="font-mediu mb-1" style={{color: 'var(--text-black)'}} key={event.id}>{event.title}</h4>
                            <p className="text-sm" style={{color: 'var(--text-color)'}}>{event.date}</p>
                            <p className="text-sm" style={{color: 'var(--text-color)'}}>{event.location}</p>
                        </div>

                        {/* modality */}
                        <div className="flex flex-col items-end gap-6">
                            <svg
                                className={`w-5 h-5 star-icon ${event.starred ? 'starred' : ''}`}
                                fill={event.starred ? 'currentColor' : 'none'}
                                viewBox="0 0 15 15"
                                stroke="currentColor"
                                strokeWidth="1"
                                xmlns="http://www.w3.org/2000/svg" 
                                onClick={() => toggleStar(event.id)}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.51902 5.08L7.5 1.11803L9.48098 5.08C9.60061 5.31925 9.83188 5.48288 10.0973 5.51605L13.9028 5.99174L10.7718 9.02495C10.5733 9.21722 10.4881 9.49828 10.5464 9.76838L11.4452 13.9313L7.93124 11.6824C7.66836 11.5141 7.33164 11.5141 7.06876 11.6824L3.55476 13.9313L4.45358 9.76838C4.51189 9.49829 4.4267 9.21722 4.22823 9.02495L1.09718 5.99174L4.9027 5.51605C5.16812 5.48288 5.39939 5.31924 5.51902 5.08Z" stroke="#3DA35D"
                                />
                            </svg>
                            <span className="cardTag text-xs font-semibold px-3 py-1 rounded-full">
                            {event.modality}
                            </span>
                        </div>
                    </div>
                        
                    </>
                );
            })}
        </div>
    );
}

export default SchoolEvents;