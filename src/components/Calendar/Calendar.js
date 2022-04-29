import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarDate() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <h2 className="name-component">CalendarDate</h2>
            <Calendar onChange={onChange} value={value} />
        </>

    )
}
export default CalendarDate;
