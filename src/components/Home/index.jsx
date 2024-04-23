import Container from "react-bootstrap/Container";
import "./index.css";
import Button from "react-bootstrap/Button";
import { AnimatePresence, backInOut, easeIn, motion as m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import PortofolioNavbar from "../Navbar";

function Home() {
  return (
    <>
      <Container
        className="vh-90 no-scroll overflow-hidden"
        as={m.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <m.div
          className="header position-absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeIn }}
        >
          <h1>
            Hi, <br /> I'm Alexandru <br />{" "}
            <span className="headerText"> Web Developer</span>
          </h1>
          <p>JavaScript/React.js/HTML/CSS</p>
          <div className="smIcons mt-3 d-flex gap-5 p-2">
            <Link>
              <FontAwesomeIcon
                icon={faGithub}
                fontSize="32px"
                color="#231F20"
              ></FontAwesomeIcon>
            </Link>
            <Link>
              <FontAwesomeIcon
                icon={faLinkedin}
                fontSize="32px"
                color="#231F20"
              ></FontAwesomeIcon>
            </Link>
            <Link>
              <FontAwesomeIcon
                icon={faFacebook}
                fontSize="32px"
                color="#231F20"
              ></FontAwesomeIcon>
            </Link>
          </div>
          <Button
            as={m.button}
            className="headerBtn my-3"
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.9,
              backgroundColor: "#BB4430",
              borderColor: "#BB4430",
              color: "#EFE6DD",
            }}
            transition={{ duration: 0.3 }}
          >
            Contact Me
          </Button>
        </m.div>
        <m.img
          src="/assets/images/nobglogo.png"
          alt=""
          className="logoHome vh-90 position-absolute z-n1"
          initial={{ x: "-90%", y: "-90%", scale: 0 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: backInOut }}
          exit={{ scale: 0, x: "-90%", y: "-90%" }}
        />
      </Container>
    </>
  );
}

export default Home;
