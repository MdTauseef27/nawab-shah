import React from "react";
import { Carousel, Row, Col, Card, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo1 from "../Images/HomeCarousels1.png";
import imgLogo2 from "../Images/HomeCarousels2.png";
import imgLogo3 from "../Images/HomeCarousels3.png";
import imgLogo4 from "../Images/HomeCarousels4.png";
import imgLogo5 from "../Images/HomeCarousels5.png";
import imgLogo6 from "../Images/HomeCarousels6.png";

import imgLogo7 from "../Images/HomeCarousels7.png";
import imgLogo8 from "../Images/HomeCarousels8.png";
import imgLogo9 from "../Images/HomeCarousels9.png";
import imgLogo10 from "../Images/HomeCarousels10.png";
import imgLogo11 from "../Images/HomeCarousels11.png";
import imgLogo12 from "../Images/HomeCarousels12.png";
import imgLogo13 from "../Images/HomeCarousels13.png";
import cardLogo1 from "../Images/HomeCard1.png";
import cardLogo2 from "../Images/HomeCard2.png";
import imgProf1 from "../Images/HomeCarouselProfessor1.jpg";
import imgProf2 from "../Images/HomeCarouselProfessor2.jpg";
import imgProf3 from "../Images/HomeCarouselProfessor3.jpg";
import imgProf4 from "../Images/HomeCarouselProfessor4.jpg";
import imgProf5 from "../Images/HomeCarouselProfessor5.jpg";

import imgProf7 from "../Images/HomeCarouselProfessor7.jpg";
import imgProf8 from "../Images/HomeCarouselProfessor8.jpg";
import imgProf9 from "../Images/HomeCarouselProfessor9.jpg";

import "../HomePage/Homepage.css";
export const Homepage = () => {
  return (
    <div>
      <Carousel className="HomeCarousels">
        <Carousel.Item interval={1000}>
          <img src={imgLogo1} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo2} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo3} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo4} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo5} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo6} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo7} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo8} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo9} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo10} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgLogo11} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo12} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={imgLogo13} />
        </Carousel.Item>
      </Carousel>
      <Row>
        <Col lg="3">
          <h6 className="HomeHeader6">NSAKCET</h6>
          <Card className="HomeCards">
            <Card.Img src={cardLogo1}></Card.Img>
          </Card>
          <Nav.Link className="HomeNavLink">NSAKCET</Nav.Link>
          <br></br>
          <p className="HomePTag">
            The synonym for high quality education. We have earned that name for
            the exceptional service provided in all these years.
          </p>
          <Button className="HomeButtonRead">Read More</Button>
        </Col>
        <Col lg="3">
          <Card className="HomeCards" style={{ marginTop: "48px" }}>
            <Card.Img src={cardLogo2}></Card.Img>
          </Card>
          <Nav.Link className="HomeNavLink">LABORATORIES</Nav.Link>
          <br></br>
          <p className="HomePTag">
            Our Laboratories for all the departments are well-equipped and state
            of the art and in sync with the JNTU syllabus taught
          </p>
          <Button className="HomeButtonRead">Read More</Button>
        </Col>
        <Col lg="3">
          <Card className="HomeCarouselProfessor" style={{ marginTop: "48px" }}>
            <Carousel>
              <Carousel.Item interval={2000}>
                <img src={imgProf1} className="HomeCarouselProfImage" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={imgProf2} className="HomeCarouselProfImage" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={imgProf3} className="HomeCarouselProfImage" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={imgProf4} className="HomeCarouselProfImage" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={imgProf5} className="HomeCarouselProfImage" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={imgProf7} className="HomeCarouselProfImage" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={imgProf8} className="HomeCarouselProfImage" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={imgProf9} className="HomeCarouselProfImage" />
              </Carousel.Item>
            </Carousel>
          </Card>
          <Nav.Link className="HomeNavLink">EMINENT PROFESSORS</Nav.Link>
          <br></br>
          <p className="HomePTag">
            Eminent Professors and Research Team at NSAKCET.
          </p>
          <Button
            className="HomeButtonRead"
            style={{
              marginTop: "30px",
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
            <div className="container">
              <Card.Body id="divTAReviews">
                <p>
                  https://payments.billdesk.com/bdcollect/pay?p1=478&amp;p2=1
                </p>
                <hr></hr>
                <p>Nsakcet video https://youtu.be/2gEEAHKGfAQ</p>
                <hr></hr>
                <p>https://youtu.be/mLWRTBgqHuM</p>
              </Card.Body>
            </div>
          </Card>
          <Card
            style={{
              width: "16rem",
              height: "7rem",
            }}
          >
            <Card.Body>
              <Nav.Link className="HomeNavLink">COURSES</Nav.Link>
              <Nav.Link className="HomeNavLink">Study Material</Nav.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="9">
          <h1>hiiiiiiiiii</h1>
        </Col>
        <Col lg="3">
          <Card></Card>
        </Col>
      </Row>
    </div>
  );
};
