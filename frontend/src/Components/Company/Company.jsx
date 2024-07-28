import React from 'react';
import './Company.css';
import { Route,  Routes } from "react-router-dom";
import NavBarCompany from '../NavBarCompany/NavBarCompany';
import PostEvent from '../PostEvent/PostEvent.jsx';
import Application from '../Application/Application.jsx';

const Company = () => {
      
    return(
        <div className="company-container">
        <div className="company-background"></div>
      <NavBarCompany />
    
      <Routes>
          <Route path="postevents" element={<PostEvent  />} />
          <Route path="application" element={ <Application /> } />
       </Routes>
       
      </div>
    );
}
export default Company;