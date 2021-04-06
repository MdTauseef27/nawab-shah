import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export const NavbarMain = () => {
  return (
    <div>
      <Navbar className="navbarmain">
        <Nav>
          <Nav.Link className="navbarmainlink" href="/">
            AICTE Approvals
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="#features">
            OU & JNTUH Approvals
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="/CSEBTECH">
            SBTET Approvals
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="#department">
            Grievence Redressel cell
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="#pricing">
            NSAKCET News Blog
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="#pricing">
            Campus Placements
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="#pricing">
            Student Corner
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="#pricing">
            Alumini
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="#pricing">
            NAAC
          </Nav.Link>
          <Nav.Link className="navbarmainlink" href="#pricing">
            IQAC
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
