import React from 'react';
import './CSS/Home.css';

const Home = () => {
  return (
    <div>
      
      <header className="header">
        <a className="logo">
          <i className="fas fa-users"></i>teams
        </a>
        <nav className="nav-items">
          <a href="/login">LOGIN</a>
          <a href="/signup">REGISTER</a>
        </nav>
      </header>
      <main>
        <div className="intro">
          <h1 className="assiassi">TEAM INFO</h1>
          <p className="lokiloki">The Project Management Dashboard.....</p>
        </div>
        <div className="achievements">
          <div className="work">
            <i className="fas fa-user-shield"></i>
            <p className="work-heading">ADMIN</p>
            <p className="work-text">Administrator with full access</p>
          </div>
          <div className="work">
            <i className="fas fa-user-tie"></i>
            <p className="work-heading">TEAM LEAD</p>
            <p className="work-text">Leader of the team</p>
          </div>
          <div className="work">
            <i className="fas fa-users"></i>
            <p className="work-heading">TEAM MEMBER</p>
            <p className="work-text">Member of the team</p>
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
