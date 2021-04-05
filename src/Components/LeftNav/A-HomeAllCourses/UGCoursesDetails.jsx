import React, { useState } from "react";
import { Card, Row, Col, Button, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "..//A-HomeAllCourses/LeftNav.css";

export const UGCoursesDetails = () => {
  const [isshowCse, setIsShowCse] = useState(false);
  const [isShowIT, setISShowIT] = useState(false);
  const [isShowDS, setISShowDS] = useState(false);
  const [isShowAIML, setISShowAIML] = useState(false);
  const [isShowCyber, setISShowCyber] = useState(false);
  const [isShowCivil, setISShowCivil] = useState(false);
  const [isShowMech, setISShowMech] = useState(false);
  const [isShowECE, setISShowECE] = useState(false);
  const [isShowEEE, setISShowEEE] = useState(false);
  const [isShowPGCourses, setIsShowPGCourses] = useState(false);
  const [isShowDiplomaCourses, setIsShowDiplomaCourses] = useState(false);

  return (
    <div style={{ marginTop: "20px" }}>
      <Card>
        <Button>UG Courses</Button>
        <Button onClick={() => setIsShowCse(!isshowCse)}>BE (CSE)</Button>
        {isshowCse && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass" href="/CSEBTECH">
              About Course
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-CSE-VisionMission">
              Vision & Mission
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-CSE-POSPSOS">
              PEO's & PSO's
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-CSE-CourseOutcomes">
              Course OutCome
            </Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setISShowIT(!isShowIT)}>BE (IT)</Button>
        {isShowIT && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass" href="/ITBTECH">
              About Course
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-IT-VisionMission">
              Vision & Mision
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-IT-POSPSOS">
              PEO's & PSO's
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-IT-CourseOutcomes">
              Course OutCome
            </Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setISShowDS(!isShowDS)}>BE (DS)</Button>
        {isShowDS && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass">About Course</Nav.Link>

            <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

            <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

            <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setISShowAIML(!isShowAIML)}>BE (AI & ML)</Button>
        {isShowAIML && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass">About Course</Nav.Link>

            <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

            <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

            <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setISShowCyber(!isShowCyber)}>
          BE (IOT,CYBER SECURITY,BLOCK CHAIN)
        </Button>
        {isShowCyber && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass">About Course</Nav.Link>

            <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

            <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

            <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setISShowCivil(!isShowCivil)}>BE (CIVIL)</Button>
        {isShowCivil && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass" href="/CIVILBTECH">
              About Course
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-CIVIL-VisionMission">
              Vision & Mision
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-CIVIL-POSPSOS">
              PEO's & PSO's
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-CIVIL-CourseOutcomes">
              Course OutCome
            </Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setISShowMech(!isShowMech)}>BE (MECH)</Button>
        {isShowMech && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass" href="/MECHBTECH">
              About Course
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-MECH-VisionMission">
              Vision & Mision
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-MECH-POSPSOS">
              PEO's & PSO's
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-MECH-CourseOutcomes">
              Course OutCome
            </Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setISShowECE(!isShowECE)}>BE (ECE)</Button>
        {isShowECE && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass" href="/ECEBTECH">
              About Course
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-ECE-VisionMission">
              Vision & Mision
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-ECE-POSPSOS">
              PEO's & PSO's
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-ECE-CourseOutcomes">
              Course OutCome
            </Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setISShowEEE(!isShowEEE)}>BE (EEE)</Button>
        {isShowEEE && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass" href="/EEEBTECH">
              {" "}
              About Course
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-EEE-VisionMission">
              Vision & Mision
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-EEE-POSPSOS">
              PEO's & PSO's
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/B-ECE-CourseOutcomes">
              Course OutCome
            </Nav.Link>
          </Nav>
        )}

        <Button onClick={() => setIsShowPGCourses(!isShowPGCourses)}>
          PG Courses
        </Button>
        {isShowPGCourses && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass" href="/CSE-MTECH">
              ME (CSE)
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/CIVIL-MTECH">
              ME (CIVIL STRUCTURE)
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/MECH-MTECH">
              ME (MECH-HVAC)
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/ECE-MTECH">
              ME (ECE-ES)
            </Nav.Link>
          </Nav>
        )}
        <Button onClick={() => setIsShowDiplomaCourses(!isShowDiplomaCourses)}>
          DIPLOMA COURSES
        </Button>

        {isShowDiplomaCourses && (
          <Nav className="navmainclass">
            <Nav.Link className="navlinkclass" href="/POLYCIVIL">
              POLYTECHNIC (CIVIL)
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/POLYMECH">
              POLYTECHNIC (ME)
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/POLYECE">
              POLYTECHNIC (ECE)
            </Nav.Link>

            <Nav.Link className="navlinkclass" href="/POLYEEE">
              POLYTECHNIC (EEE)
            </Nav.Link>
          </Nav>
        )}

        <Button>HUMAN VALUES & PROFESSIONAL ETHICS</Button>
        <Nav className="navmainclass">
          <Nav.Link className="navlinkclass" href="/HVPE">
            Human Values & Professional Ethics
          </Nav.Link>
        </Nav>
        <Button>CISCO NETWORKING ACADEMY</Button>
        <Nav className="navmainclass">
          <Nav.Link className="navlinkclass" href="/CISCONetworkingAcademy">
            Cisco Networking Academy
          </Nav.Link>
        </Nav>
        <Button>CAMBRIDGE ENGLISH</Button>
        <Nav className="navmainclass">
          <Nav.Link className="navlinkclass" href="/BusinessEnglishCertificate">
            Cambridge English
          </Nav.Link>
        </Nav>
        <Button>TASK</Button>
        <Nav className="navmainclass">
          <Nav.Link className="navlinkclass" href="/TASK">
            TS Academy For Skill & Knowledge
          </Nav.Link>
        </Nav>
      </Card>
    </div>
  );
};
