import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PortofolioNavbar from "../Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

function Contact() {
  const facebook = "https://www.facebook.com/pandelea.alexandru.1/";
  const linkedin = "https://www.linkedin.com/in/alexandru-pandelea-a2687a2b1/";
  const github = "https://github.com/fumitsukai";

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("Success");
        },
        (error) => console.log("Failed", error.text)
      );
    e.target.reset();
  };
  return (
    <>
      <Container className="formContainer container-md no-scroll text-center d-flex justify-content-center">
        <Form
          as={m.form}
          className="p-5 mt-4 lg-mx-5 contactForm rounded shadow w-100"
          ref={form}
          onSubmit={handleSubmit}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-center mb-5">Contact Me</h1>
          <Form.Group
            className="mb-3 mx-auto"
            controlId="ContactForm.ControlInputName"
          >
            <Form.Control
              type="text"
              name="from_name"
              placeholder="Enter Name"
              className="inputArea mb-4"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 mx-auto"
            controlId="ContactForm.ControlInputEmail"
          >
            <Form.Control
              type="email"
              name="from_email"
              placeholder="Enter Email"
              className="inputArea mb-4"
            />
          </Form.Group>
          <Form.Group
            className="mb-5 mx-auto"
            controlId="ContactForm.ControlTextarea"
          >
            <Form.Control
              as="textarea"
              name="message"
              rows={5}
              className="inputArea"
              placeholder="Enter Message"
            />
          </Form.Group>
          <div className="d-grid col-12 mx-auto">
            <Button type="submit" className="formBtn mb-5 w-100">
              Send
            </Button>
          </div>
          <p className="mb-4 text-center">
            You can also contact or follow me on:
          </p>
          <div className="socialMediaIcons">
            <Link to={facebook} target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                fontSize={30}
                color="#EFE6DD"
              ></FontAwesomeIcon>
            </Link>
            <Link to={linkedin} target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                fontSize={30}
                color="#EFE6DD"
              ></FontAwesomeIcon>
            </Link>
            <Link to={github} target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                fontSize={30}
                color="#EFE6DD"
              ></FontAwesomeIcon>
            </Link>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
