import React from 'react';
import './NavbarTL.css';
import { Link } from 'react-router-dom';

const  NavbarTL = () => {
  return (
    <div className="Appp">
      <nav className="navbarr">
        
        <ul className="navb-list">
          <li>TEAM_INFO</li>
          <li><Link to="/teamlead/progress">Progress</Link></li>
          <li><Link to="/teamlead/bargraphs">BarGraph</Link></li>
          <li><Link to="/teamlead/piecharts">PieCharts</Link></li>
          <li><Link to="/teamlead/issues">Issues</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>

    </div>
  );
}

export default NavbarTL;