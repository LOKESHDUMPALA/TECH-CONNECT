import React, { useContext } from 'react';
import './Events.css';
import UserContext from '../../Context/ContextAPI';
import axios from 'axios';

const Events = ({ events }) => {
  const { user } = useContext(UserContext);

  const handleClick = (Cemail, dates) => {
    const currentDate = new Date();
    const deadlineDate = new Date(dates);
    if (currentDate >= deadlineDate) {
      alert("Application deadline has passed.");
    } else {
      handlePatchRequest(user.email, Cemail);
    }
  };

  const handlePatchRequest = async (Semail, Cemail) => {
    try {
      const response = await axios.patch('https://tech-connect-backend-7.onrender.com/applied', {
        Semail: Semail,
        Cemail: Cemail,
      });
      alert(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='events-page'>
      <div className='events-container'>
        {events.map((data, index) => (
          <div key={index} className="data-square-box">
            <p><span>Date:</span> {data.dates}</p>
            <p><span>Category:</span> {data.category}</p>
            <p><span>Description:</span> {data.description}</p>
            <button className="apply-button" onClick={() => handleClick(data.email, data.dates)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
