import React from 'react';
import './CSS/Home.css';

const Home = () => {
  return (
    <div>
      
      <header className="header">
        <a className="logo">
          <i className="fas fa-users"></i>Tech_Connect
        </a>
        <nav className="nav-items">
          <a href="/login">LOGIN</a>
          <a href="/signup">REGISTER</a>
        </nav>
      </header>
      <main>
        <div className="intro">
          <h1 className="assiassi">TECH CONNECT</h1>
          <p className="lokiloki">The Event Management Platform.....</p>
        </div>
        <div className="achievements">
          <div className="work">
            <i className="fas fa-user-shield"></i>
            <p className="work-heading">ORGANIZATION</p>
            <p className="work-text">post New Events</p>
          </div>
          <div className="work">
            <i className="fas fa-user-tie"></i>
            <p className="work-heading">STUDENT</p>
            <p className="work-text">aware of all events</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="copy">&copy; 2024 Developer</div>
        <div className="bottom-links">
          <div className="links">
            <span>More Info</span>
            <a >Home</a>
            <a >About</a>
            <a >Contact</a>
          </div>
          <div className="links">
            <span>Social Links</span>
            <a >
              <i className="fab fa-facebook"></i>
            </a>
            <a >
              <i className="fab fa-twitter"></i>
            </a>
            <a >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
