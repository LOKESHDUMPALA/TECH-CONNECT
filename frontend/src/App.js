import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Home from './Pages/Home.jsx';
import Student from './Components/Student/Student.jsx';
import Company from './Components/Company/Company.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/student/*" element={ <Student /> } />
        <Route path="/company/*" element = { <Company />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
