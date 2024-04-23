import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./index.css";
import { AnimatePresence, motion as m } from "framer-motion";
import { Button, CardBody, CardText } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Project({ id, name, description, img, img2, techStack }) {
  const [selectedId, setSelectedId] = useState(null);

  const initialBackground = {
    rest: {
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const hoverBackground = {
    rest: {
      y: "-5%",
      opacity: 0,
      transition: {
        duration: 0.1,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.15,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const listContainer = {
    rest: {
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
    hover: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };
  console.log(techStack);
  const techItem = techStack.map((item) => (
    <m.li variants={listItem} className="listItem p-2 rounded">
      {item}
    </m.li>
  ));
  return (
    <>
      <Card
        className="myCard m-5 pb-5 shadow"
        as={m.div}
        initial="rest"
        whileHover="hover"
        animate="rest"
        layoutId={id}
        onClick={() => setSelectedId(id)}
      >
        <CardBody className="cardBody rounded-top h-25 text-center pt-2">
          <Card.Title className="card-title">{name}</Card.Title>
        </CardBody>
        <Card.Img
          src={img}
          as={m.img}
          className="portfolio-img"
          variant="bottom"
          variants={initialBackground}
        />
        <Card.Img
          src={img}
          className="portfolio-imgGrey"
          variant="bottom"
          as={m.img}
          variants={hoverBackground}
        />
        <m.ul
          className="z-5 position-absolute d-flex flex-wrap gap-5 justify-content-center techList me-5"
          variants={listContainer}
          exit={{ opacity: 0 }}
        >
          {techItem}
          <m.li variants={listItem} className="listItem p-2 rounded">
            More...
          </m.li>
        </m.ul>
      </Card>
      <AnimatePresence>
        {selectedId && (
          <Card
            as={m.div}
            layoutId={selectedId}
            className="clickedCard shadow"
            transition={{ duration: 0.5 }}
          >
            <Row>
              <Col xs={0} md={6}>
                <Card.Img src={img} className="portfolio-img"></Card.Img>
              </Col>
              <Col>
                <CardBody>
                  <Link
                    as={m.a}
                    onClick={() => setSelectedId(null)}
                    className="float-end"
                  >
                    <FontAwesomeIcon
                      icon={faX}
                      color="#EFE6DD"
                    ></FontAwesomeIcon>
                  </Link>
                  <Card.Title className="mb-3 border-bottom pb-5">
                    {name}
                  </Card.Title>
                  <CardText className="mb-3 border-bottom pb-5">
                    {description}
                  </CardText>
                  <div className="d-flex justify-content-between">
                    <Button className="cardBtnOpen">Live Site</Button>
                    <Button className="cardBtnOpen">Source</Button>
                  </div>
                </CardBody>
              </Col>
            </Row>
          </Card>
        )}
      </AnimatePresence>
    </>
  );
}

export default Project;
