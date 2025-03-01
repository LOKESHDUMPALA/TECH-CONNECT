import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="header">
        <p className="logo">TECH_CONNECT</p>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <nav className={`nav-items ${isOpen ? "show" : ""}`}>
          <Link to="/login" className="btn-nav">LOGIN</Link>
          <Link to="/signup" className="btn-nav register">REGISTER</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Discover & Join Exciting Events</h1>
          <p className="hero-subtitle">Hackathons, Workshops, Coding Contests & More!</p>
          <Link to="/signup" className="hero-btn">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <i className="fas fa-code"></i>
          <h3>Hackathons</h3>
          <p>Compete and showcase your skills in real-world challenges.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-laptop"></i>
          <h3>Workshops</h3>
          <p>Learn from industry experts & boost your knowledge.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-users"></i>
          <h3>Networking</h3>
          <p>Meet like-minded developers and grow your connections.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 TECH_CONNECT | All Rights Reserved</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
