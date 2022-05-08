import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarDate() {
    const [value, onChange] = useState(new Date());
    const [changedDate, onChangeDate] = useState(new Date());
    const [changedMonth, onChangeMonth] = useState(new Date());
    const [changedYear, onChangeYear] = useState(new Date());
    const [currentTask, setCurrentTask] = useState([]);
// let changedDate;
// let changedMonth;
// let changedYear;
    let prom1 = [];
    function handleClickDay(e) {
        onChangeDate(e.getDate())
        onChangeMonth(e.getMonth())
        onChangeYear(e.getFullYear())
        prom1.push(prompt('Добавить список задач'))
        setCurrentTask(prom1);
        console.log(prom1)
    }

    return (
        <>
            <h2 className="name-component">CalendarDate</h2>
            <Calendar onChange={onChange} onClickDay={handleClickDay} value={value} />
            <br/>
            {currentTask && ` новое здание ${currentTask} -${changedDate}.${changedMonth+1}.${changedYear}`}
        </>

    )
}
export default CalendarDate;
