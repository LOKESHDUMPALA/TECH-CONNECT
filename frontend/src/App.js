import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Home from './Pages/Home.jsx';
import Admin from './Components/Admin/Admin.jsx';
import TeamLead from './Components/TeamLead/TeamLead.jsx';
import TeamMember from './Components/TeamMember/TeamMember.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/admin/*" element={<Admin />}/>
        <Route path="/teamlead/*" element={<TeamLead />} />
        <Route path="/teammember/*" element={<TeamMember/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
