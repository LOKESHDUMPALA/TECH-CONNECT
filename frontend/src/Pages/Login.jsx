import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CSS/Login.css";
import UserContext from "../Context/ContextAPI";

const Login = () => {
  const { setUserContext } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://tech-connect-backend-7.onrender.com/api/auth/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200 && response.data.success) {
        alert("✅ User logged in successfully!");
        setUserContext(response.data.user);
        navigate(response.data.user.role === "Student" ? "/student" : "/company");
      } else {
        setError("❌ Invalid credentials! Please try again.");
      }
    } catch (err) {
      setError("❌ Login failed! Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back! 👋</h2>
        <p className="login-subtitle">Sign in to continue</p>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" required />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? <div className="spinner"></div> : "Login"}
          </button>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
