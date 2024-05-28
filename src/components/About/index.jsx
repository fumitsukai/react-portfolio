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
        <h1 className="text-center mb-5">about me</h1>
        <p>
          Hello! I'm Alex, a passionate junior software developer who has been
          captivated by the world of technology from an early age. My journey
          began when I discovered coding as a young student, and this passion
          led me to attend a specialized computer science high school, where I
          honed my skills and deepened my understanding of software development.
        </p>
        <p>
          With a solid foundation in JavaScript, I thrive on solving complex
          problems and building innovative solutions. My time at Liceul de
          Informatica Iasi was transformative, providing me with hands-on
          experience in various programming languages, algorithms, and software
          development practices. This early immersion in the tech world
          solidified my love for coding and set me on the path to becoming a
          proficient developer.
        </p>
        <p>
          What excites me the most about software development is the endless
          possibilities it offers. Whether it's developing a dynamic web
          application, crafting efficient algorithms, or diving into the realms
          of data science, I am always ready to take on new challenges and
          expand my skill set. I'm a firm believer in continuous learning and
          frequently engage with online courses, coding communities, and tech
          blogs to stay up-to-date with the latest industry trends and best
          practices.
        </p>
        <p>
          When I'm not immersed in code, you'll find me indulging in my other
          passions – music and video games. As a musician, I love creating and
          playing music, which helps me unwind and keep my creativity flowing.
          Music and coding share a special connection for me; both require a
          blend of technical skills and creativity, and both offer a unique
          sense of satisfaction when a piece comes together perfectly.
        </p>
        <p>
          I'm also an avid gamer who enjoys exploring virtual worlds and
          experiencing the artistry and storytelling that video games offer.
          Playing video games not only provides entertainment but also inspires
          my work as a developer, giving me fresh perspectives on user
          experience, design, and interactivity.
        </p>
        <p>
          Feel free to explore my portfolio to see some of the projects I've
          been working on. I'm always open to connecting with like-minded
          individuals, so don't hesitate to reach out if you want to collaborate
          or just chat about technology, music, video games, or anything in
          between.
        </p>
      </Container>
    </>
  );
}
