import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbars.css";

import { UGCoursesDetails } from "../LeftNav/A-HomeAllCourses/UGCoursesDetails";
import { MYHome } from "../MYHome";
export const Navbars = () => {
  return (
    <div>
      <h6
        style={{
          content: "",
          height: "3px",
          width: "1260px",
          background: "#EE7C7C",
          position: "absolute",
        }}
      ></h6>
      <Navbar>
        <Nav>
          <Nav.Link className="navbarlink" href="/">
            HOME
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#features">
            ABOUT US
          </Nav.Link>
          <Nav.Link className="navbarlink" href="/CSEBTECH">
            COURSES
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#department">
            DEPARTMENT
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#pricing">
            ADMISSIONS
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#pricing">
            PLACEMENTS
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#pricing">
            FEATURES
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#pricing">
            EVENTS
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#pricing">
            GALLERY
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#pricing">
            EXAMINATION CELL
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#pricing">
            R & D CELL
          </Nav.Link>
          <Nav.Link className="navbarlink" href="#pricing">
            CONTACT US
          </Nav.Link>
        </Nav>
      </Navbar>
      <h6
        style={{
          content: "",
          height: "3px",
          width: "1260px",
          background: "#EE7C7C",
          position: "absolute",
        }}
      ></h6>
      <Router>
        <Switch>
          <Route path="/CSEBTECH">
            <UGCoursesDetails />
          </Route>
          <Route path="/">
            <MYHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
