import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo1 from "../Images/HomeCarousels1.png";
import imgLogo2 from "../Images/HomeCarousels2.png";
import imgLogo3 from "../Images/HomeCarousels3.png";
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
        <Col lg="8">
          <h6
            style={{ textAlign: "left", marginLeft: "20px", fontSize: "18px" }}
          >
            NSAKCET
          </h6>
        </Col>
        <Col lg="4">
          <h6
            style={{ textAlign: "left", marginLeft: "20px", fontSize: "18px" }}
          >
            LATEST NEWS
          </h6>
        </Col>
      </Row>
    </div>
  );
};
