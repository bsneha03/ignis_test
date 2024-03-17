// src/components/EventList.js
import React from 'react';

// const EventList = () => {
//     // Fetch event list from backend and display here
//     return (
//         <div>
//             <h2>Event List</h2>
//             {/* Display list of events */}
//         </div>
//     );
// };

// export default EventList;




// EventList.js
import React, { useState, useEffect } from 'react';

const EventList = ({ user }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events data from backend API
        fetchEvents();
    }, []);

    const fetchEvents = () => {
        // Fetch events based on user (global or user specific)
        const url = user ? `/api/events/user/${user.id}` : '/api/events';
        fetch(url)
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events:', error));
    };

    return (
        <div>
            <h2>Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        {event.event_name} - {event.date} - {event.time} - {event.location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
