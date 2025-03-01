import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sign from "../Components/Assets/Sign.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    collage: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.role === "Student" && !formData.collage)
      newErrors.collage = "College name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://tech-connect-backend-7.onrender.com/api/auth/signup",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        navigate("/login");
      } else {
        setErrors({ general: "Signup failed. Please try again." });
      }
    } catch (error) {
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-100 bg-light d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card shadow-lg border-0">
              <div className="row g-0">
                {/* Left Side Image */}
                <div className="col-md-6 d-none d-md-block">
                  <img src={Sign} alt="Signup" className="img-fluid rounded-start" style={{ height: "100%" }} />
                </div>

                {/* Right Side Form */}
                <div className="col-md-6">
                  <div className="card-body p-4">
                    <h3 className="mb-4 text-center text-uppercase">Register</h3>

                    {/* General Error Message */}
                    {errors.general && <p className="alert alert-danger">{errors.general}</p>}

                    <form onSubmit={handleSubmit}>
                      {/* Role Selection */}
                      <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select
                          id="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="">Select Role</option>
                          <option value="Student">Student</option>
                          <option value="Institute/Company">Institute/Company</option>
                        </select>
                        {errors.role && <small className="text-danger">{errors.role}</small>}
                      </div>

                      {/* Name */}
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>

                      {/* College Name (Only for Students) */}
                      {formData.role === "Student" && (
                        <div className="mb-3">
                          <label className="form-label">College Name</label>
                          <input
                            type="text"
                            id="collage"
                            className="form-control"
                            value={formData.collage}
                            onChange={handleChange}
                            placeholder="Enter your college name"
                          />
                          {errors.collage && <small className="text-danger">{errors.collage}</small>}
                        </div>
                      )}

                      {/* Password */}
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                        />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                      </div>

                      {/* Buttons */}
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() =>
                            setFormData({ role: "", name: "", collage: "", email: "", password: "" })
                          }
                        >
                          Reset
                        </button>

                        <button
                          type="submit"
                          className="btn btn-success text-white w-50"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Registering...
                            </>
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>
                    </form>

                    {/* Login Link */}
                    <p className="text-center mt-4">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary fw-bold">
                        Login here
                      </Link>
                    </p>
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
 