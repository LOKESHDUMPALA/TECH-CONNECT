import React, { useContext } from 'react';
import './Application.css';
import UserContext from '../../Context/ContextAPI';

const Application  = () =>{
  const {appliedData} = useContext(UserContext);
  return (
    <div className="application-container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>College</th>
            </tr>
          </thead>
          <tbody>
            {appliedData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.collage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Application;
