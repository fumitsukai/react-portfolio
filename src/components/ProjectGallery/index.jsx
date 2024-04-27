import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortofolioNavbar from "../Navbar";
import projectData from "../../data/projectData.json";
import Project from "../Project";
import "./index.css";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

function ProjectGallery() {
  const renderedProjects = projectData.map((project) => (
    <Project {...project} key={project.id} />
  ));
  return (
    <>
      <Container
        className="d-flex justify-content-center flex-wrap align-content-around pt-5 wrapper position-relative"
        as={m.div}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: "50",
        }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <header>
          <h1 className="m-5 text-center">my portofolio</h1>
          <p className="px-5 lg-text-center lg-mx-5">
            Here, you'll find my humble attempts at both frontend and backend
            projects. From simple user interfaces to basic server-side
            functionalities, I'm excited to share my learning journey with you.
            Let's explore together!
          </p>
        </header>
        {renderedProjects}
      </Container>
      <m.p
        className="text-center m-0 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        You can contact me at{" "}
        <span className="fw-bold">pandeleaalexandru321@gmail.com</span>
      </m.p>
      <m.p
        className="text-center m-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Or by filling in the{" "}
        <Link to="/contact" className="fw-bold text-decoration-none formLink">
          form
        </Link>
      </m.p>
    </>
  );
}

export default ProjectGallery;
