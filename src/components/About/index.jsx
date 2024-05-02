import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationPin,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { motion as m } from "framer-motion";

export function About() {
  const skills = [
    "C",
    "C++",
    "HTML/CSS",
    "JavaScript",
    "Node.js",
    "Python",
    "SQL",
  ];
  return (
    <>
      <Container
        className="p-5 resumeContainer"
        as={m.div}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        exit={{ opacity: 0, y: "100%" }}
      >
        <h1 className="text-center mb-3">Resume</h1>
        <h3 className="text-center mb-5">Alexandru Pandelea</h3>
        <div className="contactInfo d-flex justify-content-evenly flex-wrap mb-5">
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="pe-1"
            ></FontAwesomeIcon>
            pandeleaalexandru321@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="pe-1"></FontAwesomeIcon>
            07842359602
          </p>
          <p>
            <FontAwesomeIcon
              icon={faLocationPin}
              className="pe-1"
            ></FontAwesomeIcon>
            Stockport, UK
          </p>
          <Link
            className="text-decoration-none fw-bold mx-4"
            to="https://www.linkedin.com/in/alexandru-pandelea-a2687a2b1/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            className="text-decoration-none fw-bold"
            to="https://github.com/fumitsukai"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
        <div className="skills mb-5">
          <h4>SKILLS</h4>
          <div className="d-flex flex-wrap justify-content-evenly">
            {skills.map((item) => (
              <p className="d-inline sm-d-block me-5">{item}</p>
            ))}
          </div>
        </div>
        <div className="experience">
          <h4 className="mb-3">EXPERIENCE</h4>
          <div>
            <h5 className="fs-sm-6">
              Technical Support Engineer
              <span className="fw-light">
                |bibliotheca/Xuper/Park Place Technologies
              </span>
              <span className="fw-lighter fs-6 float-end">
                Aug 2018 - Present
              </span>
            </h5>
            <ul>
              <li>
                Provided training sessions or mentorship to junior support
                staff, contributing to the professional development of team
                members and fostering a knowledge-sharing culture within the
                support team.
              </li>
              <li>
                Enhanced the organisation's knowledge base by contributing new
                articles or updating existing ones, resulting in improved
                self-service options for users and a reduction in support ticket
                volume
              </li>
              <li>
                Received positive feedback or achieved higher customer
                satisfaction scores, demonstrating your ability to provide
                excellent customer service and resolve issues to the customers'
                satisfaction
              </li>
              <li>Improved First-Contact Resolution Rate</li>
              <li>
                Contributed to a significant increase in Net Promoter Score by
                delivering exceptional support experiences
              </li>
            </ul>
            <h5 className="fs-sm-6">
              HelpDesk Agent
              <span className="fw-light">|GfK</span>
              <span className="fw-lighter float-end fs-6">
                Jun 2016 - Apr 2018
              </span>
            </h5>
            <ul>
              <li>
                Enhanced customer satisfaction ratings by implementing
                personalized support strategies, resulting in improved overall
                experience for users
              </li>
              <li>
                Boosted completion rates for active assignments through targeted
                reminder calls and motivational tactics, fostering increased
                engagement from panel members
              </li>
              <li>
                Improved the Knowledge Base by contributing valuable insights
                and updates, enhancing the quality of available resources
              </li>
              <li>
                Implemented proactive support measures including preemptive
                troubleshooting tips, reducing common issues and mitigating the
                necessity for reactive support
              </li>
            </ul>
            <h5>
              Senior Data Entry Operator
              <span className="fw-light">|GfK</span>
              <span className="fw-lighter float-end fs-6">
                Apr 2014 - Jun 2016
              </span>
            </h5>
            <ul>
              <li>
                Demonstrated expertise in searching, creating, updating, and
                correcting entries in the database.
              </li>
              <li>
                Conducted thorough research on various sources, including
                websites and brochures, to collect accurate and relevant
                information for data entry.
              </li>
              <li>
                Implemented quality assurance measures to ensure the accuracy
                and consistency of product information in the database.
              </li>
              <li>
                Trained new employees, contributing to their successful
                onboarding and development within the team.
              </li>
              <li>
                Effectively distributed workload among team members based on
                their skills and strengths, optimizing productivity.
              </li>
              <li>
                Maintained a high level of attention to detail while comparing
                and collating key product features and updating information in
                the database.
              </li>
            </ul>
          </div>
          <div className="projects">
            <h4 className="mb-3">PROJECTS</h4>
            <h5>
              WonderEase{" "}
              <Link
                to="https://fumitsukai.github.io/Travel-Destination-Generator/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ms-1"
                ></FontAwesomeIcon>
              </Link>
            </h5>
            <p>
              WanderEase is a web application that taps into the capabilities of
              the OpenTripMap API, providing individuals with a tailored
              adventure planning experience. This intuitive experience is
              facilitated through the integration of JavaScript, jQuery,
              Bootstrap.
            </p>
            <h5>
              Slice & Sizzle{" "}
              <Link to="https://pizzafrontend.netlify.app/" target="_blank">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ms-1"
                ></FontAwesomeIcon>
              </Link>
            </h5>
            <p>
              Developed a React frontend and Express backend for a pizza
              ordering app. Designed user-friendly interfaces and ensured
              efficient order processing. Gained experience in full-stack
              development and collaboration.
            </p>
          </div>
          <div className="education">
            <h4 className="mb-3">EDUCATION</h4>
            <h5>
              Front End
              <span className="fw-light">| edX</span>
              <span className="fw-lighter float-end fs-6">Mar 2024</span>
            </h5>
            <ul>
              <li>
                Learned how to create responsive websites in a 16 week intensive
                course.
              </li>
              <li>
                Skills learned: HTML, CSS, JavaScript, React.js, jQuery,
                Bootstrap
              </li>
            </ul>
            <h5>
              Computer Science (1 year only)
              <span className="fw-light">
                | "Alexandru Ioan Cuza" University Iasi
              </span>
              <span className="fw-lighter float-end fs-6">Mar 2015</span>
            </h5>
            <ul>
              <li>
                Started learning more advanced concepts of Computer Science and
                Maths
              </li>
              <li>Skills learned: C++</li>
            </ul>
            <h5>
              Other in Computer Science
              <span className="fw-light">| Liceul de Informatica Iași</span>
              <span className="fw-lighter float-end fs-6">Mar 2011</span>
            </h5>
            <ul>
              <li>
                Learned the basics of computer science over the course of 4
                years.
              </li>
              <li>Skills learned: C++, HTML, CSS</li>
            </ul>
          </div>
          <div className="summary">
            <h4 className="mb-3">SUMMARY</h4>
            <p>
              As a junior Fullstack Developer, I bring a solid foundation in
              both front-end and back-end technologies. I'm passionate about
              building scalable web applications, ensuring optimal performance,
              and delivering seamless user experiences across platforms. With a
              keen eye for learning, I'm eager to apply various programming
              languages and frameworks to contribute to innovative digital
              solutions.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
