import React from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
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
        </Col>
        <Col lg="3">
          <h6 className="HomeHeader6">LATEST NEWS</h6>
        </Col>
      </Row>
    </div>
  );
};
