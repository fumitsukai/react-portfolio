import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { motion as m } from "framer-motion";

function PortofolioNavbar() {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar className="myNav z-3 navbar-dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            {pathname != "/" && (
              <m.img
                src="/assets/images/nobglogo.png"
                alt="logo image"
                className="logoImgNav"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              />
            )}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-nav-bar"
            className="toggle mb-3 mt-3"
          />
          <Navbar.Collapse id="responsive-nav-bar">
            <Nav className="d-flex justify-content-end nav-links ms-auto">
              <Nav.Link
                className="p-3 home-link"
                as={NavLink}
                to="/"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faHome}
                  color="#EFE6DD"
                  className="d-none d-lg-block"
                />
              </Nav.Link>
              <Nav.Link
                className="p-3 about-link"
                as={NavLink}
                to="/about"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  color="#EFE6DD"
                  className="d-none d-lg-block"
                />
              </Nav.Link>
              <Nav.Link
                className="p-3 portfolio-link"
                as={NavLink}
                to="/portfolio"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faSuitcase}
                  color="#EFE6DD"
                  className="d-none d-lg-block"
                />
              </Nav.Link>
              <Nav.Link
                className="p-3 contact-link"
                as={NavLink}
                to="/contact"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#EFE6DD"
                  className="d-none d-lg-block"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PortofolioNavbar;
