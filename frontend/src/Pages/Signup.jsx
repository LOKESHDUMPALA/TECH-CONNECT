import React, { useState } from 'react';
import './CSS/Signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sign from '../Components/Assets/Sign.png';
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    collage: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleReset = () => {
    setFormData({
      role: '',
      name: '',
      email: '',
      collage: '',
      password: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://tech-connect-backend-7.onrender.com/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = response.data;
      if (response.status === 200) {
        alert(data.message);
        navigate("/login");
      } else {
        alert("Failed !!!");
        navigate('/signup');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-md-6 d-none d-md-block">
                  <img
                    src={Sign}
                    alt="User registration form"
                    className="img-fluid"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', height: '100%' }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body p-md-4 text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5 text-uppercase" style={{ fontSize: "1.6rem" }}>Register</h3>

                    <div className="col-md-12 mb-4">
                      <select
                        className="select"
                        id="role"
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="">Role</option>
                        <option value="Student">Student</option>
                        <option value="Institute/Company">Institute/Company</option>
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
                        onChange={handleChange} placeholder={(formData.role === 'Student' ? 'Enter your name' : 'Enter your Institute/Company name')} required
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
                        onChange={handleChange} placeholder={(formData.role === 'Student' ? 'Enter your email' : 'Enter your Institute/Company email')} required
                      />
                    </div>

                    {formData.role !== 'Institute/Company' && (
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="collage">
                          Collage Name
                        </label>
                        <input
                          type="text"
                          id="collage"
                          className="form-control form-control-lg"
                          value={formData.collage}
                          onChange={handleChange} placeholder="Enter your collage name" required
                        />
                      </div>
                    )}

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        value={formData.password}
                        onChange={handleChange} placeholder='Enter your password'
                      />
                    </div>

                    <div className="d-flex justify-content-between pt-2">
                      <button
                        type="button"
                        className="btn btn-danger btn-lg"
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
                    <p className="text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
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
