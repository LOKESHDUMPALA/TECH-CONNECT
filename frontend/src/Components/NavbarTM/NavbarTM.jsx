import React, { useContext } from 'react';
import "./NavbarTm.css";
import { Link } from 'react-router-dom';
import UserContext from '../../Context/ContextAPI';
const NavbarTM = () => {
  const {user} = useContext(UserContext);
  return (   
      <div className='containerr' >
        < nav className='navv'>
     <ul className='navbar-list' >
     <li  >TEAM_INFO   <span style={{ marginLeft: '30px' }}>Hi!! {user.name}</span></li>
     
     <li><Link to="/teammember/progress">PROGRESS</Link></li>
     <li><Link to="/teammember/issues">ISSUES</Link></li>
     <li><Link to="/login">LOGOUT</Link></li>
     </ul>
     </nav>
     </div>
  );
};

export default NavbarTM;