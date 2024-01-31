import React, { useContext } from "react";
import './TeamLead.css';
import NavbarTL from "../NavbarTL/NavbarTL";
import { Route, Routes } from "react-router-dom";
import ProgressTM from "../ProgressTM/ProgressTM";
import Issues from "../Issues/Issues";
import Bargraphs from "../Bargraphs/Bargraphs";
import UserContext from "../../Context/ContextAPI";
import Piecharts from "../Piecharts/Piecharts";

const TeamLead = () => {
    const {teamData} = useContext(UserContext);
    let data = [];
    
    if(teamData){
        data = teamData.map((item) => ({
            name: item.name,
            value: item.progress,
         }));
     console.log(data);
    }
     
    return (  <div className="team-lead-container">
        <div className="bg-image"></div>
        <NavbarTL />
        <Routes >
            <Route path="progress" element={<ProgressTM />} />
            <Route path="issues" element={<Issues />} />
            <Route path="bargraphs" element={<Bargraphs data={data}/>} />
            <Route path="piecharts" element={<Piecharts data={data}/>} />
        </Routes>
         </div>
    
    )
};

export default TeamLead;