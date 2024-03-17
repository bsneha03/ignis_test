// src/components/EventForm.js
import React from 'react';

// const EventForm = () => {
//     // Implement event creation form here
//     return (
//         <div>
//             <h2>Create Event</h2>
//             {/* Add event creation form here */}
//         </div>
//     );
// };

// export default EventForm;


// EventForm.js
import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addEvent({ eventName, date, time, location });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button type="submit">Add Event</button>
        </form>
    );
};

export default EventForm;
