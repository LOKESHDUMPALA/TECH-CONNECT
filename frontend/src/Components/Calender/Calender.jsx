import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calender.css';

const Calendar = () => {
  return (
    <div className="cal-bg">
    <div id="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2023-01-01' },
          { title: 'Event 2', date: '2023-01-15' }
        ]}
      />
    </div>
    </div>
  );
};

export default Calendar;