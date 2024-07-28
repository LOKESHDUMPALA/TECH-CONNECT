import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import UserContext from '../../Context/ContextAPI';
import './NavBarStudent.css';

const NavBarStudent = () => {
  const { sendquery } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchInputChange = (date) => {
    sendquery(date);
    setSearchQuery(date);
  };

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
          <Navbar.Brand href="#" className="nv-logo" onMouseOut={handleMouseOut}>
            TECH_CONNECT
          </Navbar.Brand>
          <button className="nv-hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`nv-links ${menuOpen ? "open" : ""}`}>
            <Nav className="justify-content-around">
              <Nav.Link>
                <Link
                  to="/student/hackathon"
                  className="nav-link-custom"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  HACKATHONS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/student/ideathon"
                  className="nav-link-custom"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  IDEATHONS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/student/workshop"
                  className="nav-link-custom"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  WORKSHOPS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/student/codingContest"
                  className="nav-link-custom"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  CODING CONTESTS
                </Link>
              </Nav.Link>
              <Form inline>
                <Link to="/student/searchbar">
                  <DatePicker
                    selected={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholderText={searchQuery ? null : "Search Events on date"}
                    dateFormat="yyyy-MM-dd"
                    className="mr-sm-2"
                  />
                </Link>
              </Form>
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

export default NavBarStudent;
