import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo1 from "../Images/HomeCarousels1.png";
import imgLogo2 from "../Images/HomeCarousels2.png";
import imgLogo3 from "../Images/HomeCarousels3.png";

export const Homepage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={imgLogo1} />
        </Carousel.Item>
        <Carousel.Item>
          {" "}
          <img src={imgLogo2} />{" "}
        </Carousel.Item>
        <Carousel.Item>
          {" "}
          <img src={imgLogo3} />{" "}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
