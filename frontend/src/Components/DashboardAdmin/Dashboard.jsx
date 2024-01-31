import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import LineCharts from './LineChart';
import UserContext from '../../Context/ContextAPI';
import Clock_background_image from "../Assets/Clock_background_image.png";
function Dashboard() {
     const {teamprogress} = useContext(UserContext)
  const [teamLength, setTeamLength] = useState(0); 
  const [ProjectCompleted,setCompletedProjects] = useState(0);
  const [maxi, setMaxi] = useState(0);
  
   const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {
      if (teamprogress) {
        const newData = teamprogress.map((item) => ({
          name: item.teamname,
          value: parseInt(item.averageProgress, 10),
        }));
  
        
        setTeamLength(newData.length); // no. of teams 
        // Check if any team has progress equal to 100 and increment ProjectsCompleted
        let projectsCompletedCount = 0;
        
        newData.forEach((item) => {
          if (item.value === 100) {
            projectsCompletedCount += 1;
          }
          if(item.value> maxi) {
           setMaxi(item.value);
          }
        });
  
        setCompletedProjects(projectsCompletedCount);
      }
    }, [teamprogress,maxi]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setCurrentTime(formattedTime);
    };

    updateTime();

    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
      <div className="dashboard-container">
      <div className="dashboard-item">
          <h3>Hii Admin....!</h3>
          <h3>Welcome To The Team_Info DashBoard</h3>
        </div>
        <div className="dashboard-item">
           <h3>ProjectsCompleted</h3>
           <div className="circle blue-circle">{ProjectCompleted}</div>
           </div>
        <div className="dashboard-item">
          <h3>Top Team Performance</h3>
          <div className="circle red-circle">{maxi}%</div>
        </div>
        <div className="dashboard-item">
          <h3>Number of Teams</h3>
          
          <div className="circle green-circle">{teamLength}</div>
        </div>
        <div className="dashboard-item">
          <h3>team performances</h3>
          <LineCharts />
        </div>
        <div className="dashboard-item">
          <h3>Current Time</h3>
          <div className="time-content">
          <img src={Clock_background_image} alt="abcd" />
            <p>{currentTime}</p>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;