import React, { useContext, useEffect, useState } from "react";
import "./Student.css";
import NavBarStudent from "../NavBarStudent/NavBarStudent";
import UserContext from "../../Context/ContextAPI";
import { Routes, Route } from "react-router-dom";
import Events from "../Events/Events.jsx";

const Student = () => {
  const { allpost, dates } = useContext(UserContext);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const getEventsByCategory = (category) => {
    return allpost.filter((post) => post.category === category);
  };
          
  useEffect(() => {
    if (!allpost || allpost.length === 0 || !dates) {
      return;
    }

    const selectedDateObj = new Date(dates);

    const filteredEvent = allpost.filter((post) => {
      const postDate = new Date(post.dates);

      const postDay = postDate.getDate();
      const postMonth = postDate.getMonth();
      const postYear = postDate.getFullYear();

      const selectedDay = selectedDateObj.getDate();
      const selectedMonth = selectedDateObj.getMonth();
      const selectedYear = selectedDateObj.getFullYear();

      return (
        postDay === selectedDay &&
        postMonth === selectedMonth &&
        postYear === selectedYear
      );
    });

    setFilteredEvents(filteredEvent);

    if (filteredEvent.length === 0) {
      alert("No Events Available On This Date");
    }
  }, [dates]);

  return (
    <div className="student-container">
      <div className="student-background"></div>
      <NavBarStudent className="nv" />
      <div className="events-section">
        <Routes>
          <Route path="hackathon" element={<Events events={getEventsByCategory("hackathon")} />} />
          <Route path="ideathon" element={<Events events={getEventsByCategory("ideathon")} />} />
          <Route path="workshop" element={<Events events={getEventsByCategory("workshop")} />} />
          <Route path="codingContest" element={<Events events={getEventsByCategory("codingContest")} />} />
          <Route path="searchbar" element={<Events events={filteredEvents} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Student;
