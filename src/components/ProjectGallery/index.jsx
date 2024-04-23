import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortofolioNavbar from "../Navbar";
import projectData from "../../data/projectData.json";
import Project from "../Project";
import "./index.css";

function ProjectGallery() {
  const renderedProjects = projectData.map((project) => (
    <Project {...project} key={project.id} />
  ));
  return (
    <>
      <Container className="textContainer">
        <header>
          <h1 className="m-5 text-center">my portofolio</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae
            similique corrupti unde. Quaerat velit mollitia fuga non molestiae
            dolore minus necessitatibus placeat sunt ipsa inventore beatae
            dolorem, eveniet vitae.
          </p>
        </header>
      </Container>
      <Container className="d-flex justify-content-center flex-wrap align-content-around mt-5 pt-5 wrapper position-relative">
        {renderedProjects}
      </Container>
    </>
  );
}

export default ProjectGallery;
