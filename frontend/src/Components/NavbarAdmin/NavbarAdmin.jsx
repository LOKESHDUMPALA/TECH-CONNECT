import React, { useState } from "react";
import "./NavbarAdmin.css";
import { Link } from "react-router-dom";
import Dashboard from "../DashboardAdmin/Dashboard";

const NavbarAdmin = () => {
    const [dashboardState , setDashboardState ] = useState(true);
       const handleState = ( states) =>{
        setDashboardState(states);
       }
    return (
         <> 
        <div className="nv">
        <div className="nv-links">
        <Link>ADMIN</Link>
        <Link to="/admin/dashboard" onClick={() => handleState(false)}>DASHBOARD </Link>
        <Link to="/admin/teams_progress" onClick={() => handleState(false)}> TEAMS_PROGRESS  </Link>
        <Link to="/admin/barcharts" onClick={() => handleState(false)}>BARCHARTS </Link>
        <Link to="/admin/piecharts" onClick={() => handleState(false)}> PIECHARTS    </Link>
        <Link to="/admin/calendar">CALENDER</Link>
        <Link to="/login">LOGOUT</Link>
        </div>
      </div>
      {dashboardState && <Dashboard />}
      </>
    )
};

export default NavbarAdmin;