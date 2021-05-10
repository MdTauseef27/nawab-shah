import React from "react";
import { Form, Row, Col, Button, Nav } from "react-bootstrap";
import "../Footer/FooterContent.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
export const FooterContent = () => {
  return (
    <div>
      <div className=" maindiv">
        <Row>
          <Col lg="4">
            <h6 className="Contenth6" style={{marginLeft:"20px"}}>
              <MailOutlineIcon
                style={{ marginBottom: "2px", marginRight: "10px" }}
              />
              Subscribe Our NewsLetter
            </h6>
          </Col>
          <Col lg="2">
            <Form>
              <Form.Row>
                <Form.Group>
                  <Form.Control
                    className="formControls"
                    type="text"
                    placeholder="Enter Your Email"
                  ></Form.Control>
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
          <Col lg="2">
            <Button className="submitButton">SUBMIT NOW </Button>
          </Col>
          <Col lg="4">
            <Button className="ButtonIcons">
              <FacebookIcon />
            </Button>
            <Button className="ButtonTwitter">
              <TwitterIcon />
            </Button>
            <Button className="ButtonWhatsapp">
              <WhatsAppIcon />
            </Button>
            <Button className="ButtonIcons">
              <LinkedInIcon />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="linkstextcolor">
        <Row>
          <Col lg="3">
            <h6
              style={{
                content: "",
                height: "3px",
                width: "30px",
                background: "#EE7C7C",
                position: "absolute",
                marginTop: "20px",
                marginLeft: "55px",
              }}
            ></h6>
            <h6 className="h6tag">QUICK LINKS</h6>

            <Nav.Link className="navlinkcontent">About NSAKCET</Nav.Link>
            <Nav.Link className="navlinkcontent">Honorary Chairman</Nav.Link>
            <Nav.Link className="navlinkcontent">Honorary Secretary</Nav.Link>
            <Nav.Link className="navlinkcontent">Principal</Nav.Link>
            <Nav.Link className="navlinkcontent">Photo Gallery</Nav.Link>
            <Nav.Link className="navlinkcontent">Application Form</Nav.Link>
            <Nav.Link className="navlinkcontent">Solar Panel</Nav.Link>
            <Nav.Link className="navlinkcontent">Login</Nav.Link>
          </Col>
          <Col lg="2">
            <h6 className="h6tagline"></h6>
            <h6 className="h6tag">COURSES</h6>
            <Nav.Link className="navlinkcontent">UG Courses</Nav.Link>
            <Nav.Link className="navlinkcontent">PG Courses</Nav.Link>
            <Nav.Link className="navlinkcontent">Polytechnic Courses</Nav.Link>
          </Col>
          <Col lg="2">
            <h6 className="h6tagline"></h6>
            <h6 className="h6tag">FACULTY</h6>
            <Nav.Link className="navlinkcontent">CSE</Nav.Link>
            <Nav.Link className="navlinkcontent">IT</Nav.Link>
            <Nav.Link className="navlinkcontent">CIVIL</Nav.Link>
            <Nav.Link className="navlinkcontent">ME</Nav.Link>
            <Nav.Link className="navlinkcontent">ECE</Nav.Link>
            <Nav.Link className="navlinkcontent">EEE</Nav.Link>
            <Nav.Link className="navlinkcontent">H & BS</Nav.Link>
          </Col>
          <Col lg="2">
            <h6 className="h6tagline"></h6>
            <h6 className="h6tag">FEATURES</h6>
            <Nav.Link className="navlinkcontent">Laboratory</Nav.Link>
            <Nav.Link className="navlinkcontent">Library</Nav.Link>
            <Nav.Link className="navlinkcontent">Scholership</Nav.Link>
            <Nav.Link className="navlinkcontent">Events</Nav.Link>
            <Nav.Link className="navlinkcontent">Placements</Nav.Link>
            <Nav.Link className="navlinkcontent">Sports Games</Nav.Link>
          </Col>
          <Col lg="3">
            <h6 className="h6tagline"></h6>
            <h6 className="h6tag">GET IN TOUCH</h6>
            <p className="paratag">Add:16-4-1 New Malakpet</p>
            <p className="paratag">Near Railway Station</p>
            <p className="paratag">Malakpet,Hyderabad,INDIA.</p>
            <p className="paratag">Tel: 040-24561118,24066894</p>
            <p className="paratag">Email:info@nsakcet.ac.in</p>
          </Col>
        </Row>
      </div>
      <div className="copyrightcontent">
        Copyright © 2008 - 2021
        <a className="atag" href="http://nsakcet.ac.in">
          Nawab Shah Alam Khan College of Engineering &amp; Technology
        </a>
        Designed By
        <a className="atag">Md Tauseef Iqbal</a>
      </div>
    </div>
  );
};
