import React from "react";
import { Carousel, Row, Col, Card, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo1 from "../Images/HomeCarousels1.png";
import imgLogo2 from "../Images/HomeCarousels2.png";
import imgLogo3 from "../Images/HomeCarousels3.png";
import cardLogo1 from "../Images/HomeCard1.png";
import cardLogo2 from "../Images/HomeCard2.png";

import "../HomePage/Homepage.css";
export const Homepage = () => {
  return (
    <div>
      <Carousel className="HomeCarousels">
        <Carousel.Item>
          <img src={imgLogo1} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgLogo2} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgLogo3} />
        </Carousel.Item>
      </Carousel>
      <Row>
        {/* <Col lg="9"> */}

        <Col lg="3">
          <h6 className="HomeHeader6">NSAKCET</h6>
          <Card className="HomeCards">
            <Card.Img src={cardLogo1}></Card.Img>
          </Card>
          <Nav.Link style={{ float: "left", marginLeft: "5px" }}>
            NSAKCET
          </Nav.Link>
          <br></br>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "20px",
              width: "275px",
              lineHeight: "20px",
              marginTop: "20px",
            }}
          >
            The synonym for high quality education. We have earned that name for
            the exceptional service provided in all these years.
          </p>
          <Button style={{ float: "left", marginLeft: "20px" }}>
            Read More
          </Button>
        </Col>
        <Col lg="3">
          <Card className="HomeCards" style={{ marginTop: "48px" }}>
            <Card.Img src={cardLogo2}></Card.Img>
          </Card>
          <Nav.Link style={{ float: "left", marginLeft: "5px" }}>
            LABORATORIES
          </Nav.Link>
          <br></br>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "20px",
              width: "275px",
              lineHeight: "20px",
              marginTop: "20px",
            }}
          >
            Our Laboratories for all the departments are well-equipped and state
            of the art and in sync with the JNTU syllabus taught
          </p>
          <Button style={{ float: "left", marginLeft: "20px" }}>
            Read More
          </Button>
        </Col>
        <Col lg="3">
          <Card className="HomeCards" style={{ marginTop: "48px" }}>
            <Card.Img src={cardLogo1}></Card.Img>
          </Card>
          <Nav.Link style={{ float: "left", marginLeft: "5px" }}>
            EMINENT PROFESSORS
          </Nav.Link>
          <br></br>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "20px",
              width: "275px",
              lineHeight: "20px",
              marginTop: "20px",
            }}
          >
            Eminent Professors and Research Team at NSAKCET.
          </p>
          <Button
            style={{
              float: "left",
              marginTop: "30px",
              marginLeft: "20px",
            }}
          >
            Read More
          </Button>
        </Col>

        <Col lg="3">
          <h6 className="HomeHeader6">LATEST NEWS</h6>
          <Card
            style={{
              width: "16rem",
              height: "18rem",
              marginTop: "30px",
              backgroundColor: "#EE7C7C",
            }}
          >
            <Card.Body>
              <p>https://payments.billdesk.com/bdcollect/pay?p1=478&amp;p2=1</p>
              <hr></hr>
              <p>Nsakcet video https://youtu.be/2gEEAHKGfAQ</p>
              <hr></hr>
              <p>https://youtu.be/mLWRTBgqHuM</p>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "16rem",
              height: "7rem",
            }}
          >
            <Card.Body>
              <Nav.Link>COURSES</Nav.Link>
              <Nav.Link>Study Material</Nav.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
