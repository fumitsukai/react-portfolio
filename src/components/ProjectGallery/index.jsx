import Container from 'react-bootstrap/Container'
import PortofolioNavbar from '../Navbar'
import projectData from '../../data/projectData.json'
import Project from '../Project'

function ProjectGallery() {
  const renderedProjects = projectData.map((project) => (
    <Project {...project} key={project.id} />
  ))
  return (
    <>
      <PortofolioNavbar></PortofolioNavbar>
      <Container className="d-flex justify-content-center flex-wrap align-content-around">
        {renderedProjects}
      </Container>
    </>
  )
}

export default ProjectGallery
