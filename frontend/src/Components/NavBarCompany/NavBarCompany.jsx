import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBarCompany.css';

function NavBarCompany() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseOver = (event) => {
    event.target.style.color = 'pink';
  };

  const handleMouseOut = (event) => {
    event.target.style.color = 'white';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar className="nv" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="nv-logo">
           
            TECH_CONNECT
          </Navbar.Brand>
          <button className="nv-hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`nv-links ${menuOpen ? "open" : ""}`}>
            <Nav className="justify-content-around">
              <Nav.Link>
                <Link
                  to="/company/postevents"
                  className="nav-link-custom"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  POST EVENT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/company/application"
                  className="nav-link-custom"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  APPLICATIONS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/login"
                  className="nav-link-custom"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  LOGOUT
                </Link>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarCompany;
