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
        <Col lg="9">
          <h6 className="HomeHeader6">NSAKCET</h6>
          <Row>
            <Card className="HomeCards">
              <Card.Img src={cardLogo1}></Card.Img>
            </Card>
            <Card className="HomeCards">
              <Card.Img src={cardLogo2}></Card.Img>
            </Card>
            <Card className="HomeCards">
              <Card.Img src={cardLogo1}></Card.Img>
            </Card>
          </Row>
          <Row>
            <Col lg="3">
              <Nav.Link style={{ float: "left" }}>NSAKCET</Nav.Link>
              <br></br>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "15px",
                  width: "275px",
                  lineHeight: "20px",
                  marginTop: "20px",
                }}
              >
                The synonym for high quality education. We have earned that name
                for the exceptional service provided in all these years.
              </p>
              <Button style={{ float: "left" }}>Read More</Button>
            </Col>
            <Col lg="3">
              <Nav.Link style={{ float: "left", marginLeft: "62px" }}>
                LABORATORIES
              </Nav.Link>
              <br></br>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "75px",
                  width: "275px",
                  lineHeight: "20px",
                  marginTop: "20px",
                }}
              >
                Our Laboratories for all the departments are well-equipped and
                state of the art and in sync with the JNTU syllabus taught
              </p>
              <Button style={{ float: "left", marginLeft: "75px" }}>
                Read More
              </Button>
            </Col>
            <Col>
              <Nav.Link style={{ float: "left", marginLeft: "125px" }}>
                EMINENT PROFESSORS
              </Nav.Link>
              <br></br>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "140px",
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
                  marginLeft: "140px",
                }}
              >
                Read More
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg="3">
          <h6 className="HomeHeader6">LATEST NEWS</h6>
          <Card
            style={{
              width: "18rem",
              height: "25rem",
              marginTop: "30px",
              backgroundColor: "#EE7C7C",
            }}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              <hr></hr>
              <Nav.Link>COURSES</Nav.Link>
              <Nav.Link>Study Material</Nav.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
