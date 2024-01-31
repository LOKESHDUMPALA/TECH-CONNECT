import React from "react";
import "./TeamMember.css";
import NavbarTM from "../NavbarTM/NavbarTM";
import { Route,  Routes } from "react-router-dom";
import ProgressTM from "../ProgressTM/ProgressTM";
import Issues from "../Issues/Issues";

const TeamMember = () => {
   
    return(
           <div className="team-member-container" >
            <div className="background-image"></div>

        <NavbarTM />
       <Routes>
          <Route path="progress" element={<ProgressTM  />} />
          <Route path="issues" element={<Issues/>} />
          
       </Routes>
       
        </div>
    )
}
export default TeamMember;