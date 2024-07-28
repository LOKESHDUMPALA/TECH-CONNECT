import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './CSS/Login.css';
import UserContext from '../Context/ContextAPI';

const Login = () => {
  const { setUserContext } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://tech-connect-backend-7.onrender.com/login", formData, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.status === 200) {
        if (response.data.success) {
          if (response.data.pwd) {
            alert("user logged successfully");
            const userString = response.data.user;
            const user = JSON.parse(userString);
            setUserContext(user);

            if (user.role === "Student") navigate("/student");
            else navigate("/company");
          } else {
            alert("wrong password!!!....please enter correct password");
            setFormData({
              ...formData,
              password: ''
            });
          }
        } else {
          alert("user not registered!!!...please register");
          navigate("/signup");
        }
      } else {
        alert("failed !!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    };
  };

  return (
    <section className="vh-50" style={{ backgroundColor: 'whitesmoke' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5">
                <h3 className="mb-5 text-center" style={{ fontSize: "1.6rem", marginTop: "-50px" }}>LOGIN</h3>

                <form onSubmit={handleSubmit}>
                  <label className="form-label" htmlFor="email">
                    UserName
                  </label>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
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
                      placeholder="Password"
                    />
                  </div>

                  <button className="btn btn-primary btn-lg btn-block d-flex justify-content-center align-items-center w-100" type="submit">
                    Login
                  </button>

                  <hr className="my-2" />

                  <button className="btn btn-lg btn-block btn-primary w-100" style={{ backgroundColor: '#dd4b39' }} type="submit">
                    <i className="fab fa-google me-2"></i> Sign in with Google
                  </button>
                  <p className="fw-bold mt-4 mb-0" style={{ fontSize: "1.5rem" }}>Don't Have an account? <Link to="/signup" className="text-primary" style={{ fontSize: "1.5rem", paddingBottom: "0px" }}><u>SIGNUP</u></Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
