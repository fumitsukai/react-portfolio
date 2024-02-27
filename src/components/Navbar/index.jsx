import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import './index.css'

function PortofolioNavbar() {
  return (
    <>
      <Navbar className="myNav">
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            Logo
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end nav-links">
            <Nav.Link
              className="p-3 home-link"
              as={NavLink}
              to="/"
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faHome} color="#EFE6DD" className="" />
            </Nav.Link>
            <Nav.Link
              className="p-3 about-link"
              as={NavLink}
              to="/about"
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faUser} color="#EFE6DD" />
            </Nav.Link>
            <Nav.Link
              className="p-3 portfolio-link"
              as={NavLink}
              to="/portfolio"
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faSuitcase} color="#EFE6DD" />
            </Nav.Link>
            <Nav.Link
              className="p-3 contact-link"
              as={NavLink}
              to="/contact"
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#EFE6DD" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default PortofolioNavbar
