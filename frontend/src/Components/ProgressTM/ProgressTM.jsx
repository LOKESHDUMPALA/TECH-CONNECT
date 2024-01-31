import React, { useContext, useState } from 'react';
import './ProgressTM.css';
import UserContext from '../../Context/ContextAPI';
import axios from 'axios';
import Progress from "../Assets/Progress.png";
function ProgressTM() {
        const {user} =useContext(UserContext)  
  //  console.log(user);
  const tmpage = {
    fontFamily: 'sans-serif',
    backgroundImage: `url(${Progress})`,
    backgroundSize: '100% 100%',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  const [numberInput, setNumberInput] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const updateProgress = () => {
    return Math.max(0, Math.min(100, numberInput));
  };

  const handleButtonClick = async() => {
        try {

            setShowProgress(true);
      const response = await axios.patch('http://localhost:4000/updateProgress', {
        _id: user._id,
        progress: numberInput, 
      });
       console.log(response.data);
      // console.log('User progress updated:', response.data);
    } catch (error) {
      console.error('Error updating user progress:', error);
    }
  };


  return (
    <div style={tmpage}>
      <p className="page-title">Welcome TeamMember!!!</p>

      <div className="app-container">
        <h4 className="page-heading">Update your progress</h4>

        <div className="input-container">
          <label htmlFor="numberInput">Enter your progress: </label>
          <input
            type="number"
            id="numberInput"
            min="0"
            max="100"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
          />
        </div>

        <button className="butt" onClick={handleButtonClick}>
          Show Progress
        </button>

        {showProgress && (
          <div className="progress-container">
            <progress id="progress-bar" value={updateProgress()} max="100">
              {updateProgress()}%
            </progress>
          </div>
        )}
      </div>
    </div>

  );
}

export default ProgressTM;