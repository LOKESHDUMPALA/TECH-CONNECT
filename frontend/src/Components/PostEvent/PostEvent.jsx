import React, { useState,useContext } from 'react';
import './PostEvent.css';
import UserContext from '../../Context/ContextAPI';
import axios from 'axios';
const PostEvent = () =>{
       const {user} = useContext(UserContext);
      console.log(user);

      const [eventData, setEventData] = useState({
        eventDate: '',
        category: '',
        description: '',
        email: user.email
    });
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEventData({
          ...eventData,
          [name]: value
      });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
     try{
      const response = await axios.post("https://tech-connect-backend-7.onrender.com/postevent",eventData,{
        headers: {
          "Content-Type": "application/json",
        }
       });
       console.log(response.data);    
     alert(response.data.message);
    setEventData({
        eventDate: '',
        category: '',
        description: '',
         email: user.email
    });
  } catch(err){
    console.log(err);
  }
};

  return (
    <div className="post-event-container">
      <div className="rightBox">
        <form onSubmit={handleSubmit}>
          <label htmlFor="eventDate">Date:</label>
          <input type="date" id="eventDate" name="eventDate" value={eventData.eventDate} onChange={handleInputChange}  required /><br />
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={eventData.category} onChange={handleInputChange}  required>
          <option value="">Select Category</option>
                        <option value="hackathon">Hackathon</option>
                        <option value="ideathon">Ideathon</option>
                        <option value="workshop">Workshop</option>
                        <option value="codingContest">Coding Contest</option>
          </select><br />
          <label htmlFor="description">Description:</label><br />
          <textarea id="description" placeholder="details of event" name="description" value={eventData.description} onChange={handleInputChange} rows="4" required></textarea><br />
          <button type="submit">Post Event</button>
        </form>
      </div>
    </div>
  );
}

export default PostEvent;