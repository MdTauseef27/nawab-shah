import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import imgLogo from "../Images/NawabLogo.png";
import imgLogo1 from "../Images/Logo1.png";
import imgLogo2 from "../Images/Logo2.png";
import imgLogo3 from "../Images/Logo3.png";

import "../Header/HeaderContent.css";
export const HeaderContent = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col lg="6">
            <img className="Logoclass" src={imgLogo}></img>
          </Col>
          <Col lg="6">
            <img className="HeaderLogo" src={imgLogo1}></img>
            <img className="HeaderLogo" src={imgLogo2}></img>

            <img className="HeaderLogo" src={imgLogo3}></img>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
