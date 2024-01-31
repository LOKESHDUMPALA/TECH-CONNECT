import React, { useState } from 'react';
import './CSS/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Signups from "../Components/Assets/Signups.png";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        role :'',
        name:'',
        email:'',
        password:'',
        teamname:'',
        projectname:''
    
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleReset = () => {
    setFormData({
        role:'',
        name:'',
        email:'',
        password:'',
        teamname:'',
        projectname:''
    });
  };

  const handleSubmit = async (e) => {
            e.preventDefault();
          try {
            const response = await axios.post("http://localhost:4000/signup",formData,{
              headers: {
                "Content-Type": "application/json",
              }
             });
             const data = response.data;
             if(response.status===200){
             
              alert(data.message)
             navigate("/login");
             
             }
             else {
              alert("Failed !!!")
              navigate('/signup');
             }
          }
          catch(error){
            console.log(error);
          }
    
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src={Signups}
                    alt="User registration form"
                    className="img-fluid"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase" style={{fontSize: "1.6rem"}}>Register</h3>
                    
                    <div className="col-md-12 mb-4">
                        <select
                          className="select"
                          id="role"
                          value={formData.role}
                          onChange={handleChange}
                        >
                          <option value="">Role</option>
                          <option value="Admin">Admin</option>
                          <option value="TeamLead">Team Lead</option>
                          <option value="TeamMember">Team Member</option>
                        </select>
                      </div>
                  
                      <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="Name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        value={formData.name}
                        onChange={handleChange} placeholder='enter your name' required
                      />
                    </div>

                    <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="UserName">
                        UserName
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        value={formData.email}
                        onChange={handleChange} placeholder='enter your email' required
                      />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                   { formData.role === 'Admin' ? null : (  
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Team Name">
                        Team Name
                      </label>
                      <input
                        type="text"
                        id="teamname"
                        className="form-control form-control-lg"
                        value={formData.teamname}
                        onChange={handleChange}
                      />
                    </div>
                   ) }
                     
                     { formData.role === 'Admin' ? null : (
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Project Name">
                        Project Name
                      </label>
                      <input
                        type="text"
                        id="projectname"
                        className="form-control form-control-lg"
                        value={formData.projectname}
                        onChange={handleChange}
                      />
                    </div>
                     )}
                    <div className="d-flex justify-content pt-2  ">
                      <button
                        type="button"
                        className="btn btn-danger btn-lg me-5"
                        onClick={handleReset}
                      >
                        Reset all
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-lg gradient-custom-4 w-50 ml-5 text-white"
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                    </div>
                    <p className=" text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
