import React from 'react';
import './CSS/Home.css';

const Home = () => {
  return (
    <div>
      
      <header className="header">
        <a className="logo">
          <i className=""></i>TECH_CONNECT
        </a>
        <nav className="nav-items">
          <a href="/login">LOGIN</a>
          <a href="/signup">REGISTER</a>
        </nav>
      </header>
      <main>
        <div className="intro">
          <h1 className="assiassi"></h1>
          <p className="lokiloki"></p>
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
