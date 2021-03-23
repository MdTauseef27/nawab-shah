import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbars.css";
import { Homepage } from "../HomePage/Homepage";
import { UGCoursesDetails } from "../LeftNav/A-HomeAllCourses/UGCoursesDetails";
import { MYHome } from "../MYHome";
import { AboutCourse } from "../LeftNav/UGCourses/BE(CSE)/AboutCourse";
import "../LeftNav/A-HomeAllCourses/LeftNav.css";
import { VisionMision } from "../LeftNav/UGCourses/BE(CSE)/VisionMision";
import { SourceOutcome } from "../LeftNav/UGCourses/BE(CSE)/SourceOutcome";
import { PEO } from "../LeftNav/UGCourses/BE(CSE)/PEO";
import { AboutCourseIT } from "../LeftNav/UGCourses/BE(IT)/AboutCourseIT";
import { VisionMisionIT } from "../LeftNav/UGCourses/BE(IT)/VisionMisionIT";
import { SourceOutcomeIT } from "../LeftNav/UGCourses/BE(IT)/SourceOutcomeIT";
import { PEOIT } from "../LeftNav/UGCourses/BE(IT)/PEOIT";
import { AboutCourseCivil } from "../LeftNav/UGCourses/BE(CIVIL)/AboutCourseCivil";
import { VisionMisionCivil } from "../LeftNav/UGCourses/BE(CIVIL)/VisionMisionCivil";
import { SourceOutcomeCivil } from "../LeftNav/UGCourses/BE(CIVIL)/SourceOutcomeCivil";
import { PEOCivil } from "../LeftNav/UGCourses/BE(CIVIL)/PEOCivil";
import { AboutCourseMech } from "../LeftNav/UGCourses/BE(MECH)/AboutCourseMech";
import { VisionMisionMech } from "../LeftNav/UGCourses/BE(MECH)/VisionMisionMech";
import { SourceOutcomeMech } from "../LeftNav/UGCourses/BE(MECH)/SourceOutcomeMech";
import { PEOMech } from "../LeftNav/UGCourses/BE(MECH)/PEOMech";
import { AboutCourseECE } from "../LeftNav/UGCourses/BE(ECE)/AboutCourseECE";
import { VisionMisionECE } from "../LeftNav/UGCourses/BE(ECE)/VisionMisionECE";
import { SourceOutcomeECE } from "../LeftNav/UGCourses/BE(ECE)/SourceOutcomeECE";
import { PEOECE } from "../LeftNav/UGCourses/BE(ECE)/PEOECE";
import { AboutCourseEEE } from "../LeftNav/UGCourses/BE(EEE)/AboutCourseEEE";
import { VisionMisionEEE } from "../LeftNav/UGCourses/BE(EEE)/VisionMisionEEE";
import { SourceOutcomeEEE } from "../LeftNav/UGCourses/BE(EEE)/SourceOutcomeEEE";
import { PEOEEE } from "../LeftNav/UGCourses/BE(EEE)/PEOEEE";
import { MEMech } from "../LeftNav/PGCourses/ME(Mech-Hvac)/MEMech";
import { MEECE } from "../LeftNav/PGCourses/ME(ECE-ES)/MEECE";
import { MECivil } from "../LeftNav/PGCourses/ME(Civil-Struct)/MECivil";
import { MECse } from "../LeftNav/PGCourses/ME(CSE)/MECse";
import { PolyEEE } from "../LeftNav/DiplomaCourses/POLY(EEE)/PolyEEE";
import { PolyECE } from "../LeftNav/DiplomaCourses/POLY(ECE)/PolyECE";
import { PolyMech } from "../LeftNav/DiplomaCourses/POLY(ME)/PolyMech";
import { PolyCivil } from "../LeftNav/DiplomaCourses/POLY(CIVIL)/PolyCivil";
import { CiscoNetworking } from "../LeftNav/CiscoNW/CiscoNetworking";
import { TSAcademy } from "../LeftNav/Task/TSAcademy";
import { CambridgeEnglish } from "../LeftNav/CambridgeEnglish/CambridgeEnglish";
import { HumanValues } from "../LeftNav/HumanValues/HumanValues";
// import { VisionMision } from "../LeftNav/UGCourses/BE(CSE)/VisionMision";
export const Navbars = () => {
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
      {/* <Router>
        <Switch> */}
      {/* <Route path="/CSEBTECH">
            <UGCoursesDetails />
          </Route> */}
      {/* <Route path="/">
            <Homepage />
          </Route> */}
      {/* </Switch>
      </Router> */}
      {/* 
      <Row>
        <Col lg="3">
          <Card>
            <Button>UG Courses</Button>
            <Button onClick={() => setIsShowCse(!isshowCse)}>BE (CSE)</Button>
            {isshowCse && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass" href="/CSEBTECHE">
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
            <Button onClick={() => setISShowAIML(!isShowAIML)}>
              BE (AI & ML)
            </Button>
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
            <Button onClick={() => setISShowCivil(!isShowCivil)}>
              BE (CIVIL)
            </Button>
            {isShowCivil && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass" href="/CIVILBTECH">
                  About Course
                </Nav.Link>

                <Nav.Link
                  className="navlinkclass"
                  href="/B-CIVIL-VisionMission"
                >
                  Vision & Mision
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-CIVIL-POSPSOS">
                  PEO's & PSO's
                </Nav.Link>

                <Nav.Link
                  className="navlinkclass"
                  href="/B-CIVIL-CourseOutcomes"
                >
                  Course OutCome
                </Nav.Link>
              </Nav>
            )}
            <Button onClick={() => setISShowMech(!isShowMech)}>
              BE (MECH)
            </Button>
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

                <Nav.Link
                  className="navlinkclass"
                  href="/B-MECH-CourseOutcomes"
                >
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
            <Button
              onClick={() => setIsShowDiplomaCourses(!isShowDiplomaCourses)}
            >
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
              <Nav.Link
                className="navlinkclass"
                href="/BusinessEnglishCertificate"
              >
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
        </Col> */}

      {/* <Col lg="9"> */}
      <Router>
        <Switch>
          <Route path="/CSEBTECH">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <AboutCourse />
              </Col>
            </Row>
          </Route>
          <Route path="/B-CSE-VisionMission">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <VisionMision />
              </Col>
            </Row>
          </Route>
          <Route path="/B-CSE-POSPSOS">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <PEO />
              </Col>
            </Row>
          </Route>
          <Route path="/B-CSE-CourseOutcomes">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <SourceOutcome />
              </Col>
            </Row>
          </Route>
          <Route path="/ITBTECH">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <AboutCourseIT />
              </Col>
            </Row>
          </Route>
          <Route path="/B-IT-VisionMission">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <VisionMisionIT />
              </Col>
            </Row>
          </Route>
          <Route path="/B-IT-POSPSOS">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <PEOIT />
              </Col>
            </Row>
          </Route>
          <Route path="/B-IT-CourseOutcomes">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <SourceOutcomeIT />
              </Col>
            </Row>
          </Route>
          <Route path="/CIVILBTECH">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <AboutCourseCivil />
              </Col>
            </Row>
          </Route>
          <Route path="/B-CIVIL-VisionMission">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <VisionMisionCivil />
              </Col>
            </Row>
          </Route>
          <Route path="/B-CIVIL-POSPSOS">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <PEOCivil />
              </Col>
            </Row>
          </Route>
          <Route path="/B-CIVIL-CourseOutcomes">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <SourceOutcomeCivil />
              </Col>
            </Row>
          </Route>
          <Route path="/MECHBTECH">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <AboutCourseMech />
              </Col>
            </Row>
          </Route>
          <Route path="/B-MECH-VisionMission">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <VisionMisionMech />
              </Col>
            </Row>
          </Route>
          <Route path="/B-MECH-POSPSOS">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <PEOMech />
              </Col>
            </Row>
          </Route>
          <Route path="/B-MECH-CourseOutcomes">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <SourceOutcomeMech />
              </Col>
            </Row>
          </Route>
          <Route path="/ECEBTECH">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <AboutCourseECE />
              </Col>
            </Row>
          </Route>
          <Route path="/B-ECE-VisionMission">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <VisionMisionECE />
              </Col>
            </Row>
          </Route>
          <Route path="/B-ECE-POSPSOS">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <PEOECE />
              </Col>
            </Row>
          </Route>
          <Route path="/B-ECE-CourseOutcomes">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <SourceOutcomeECE />
              </Col>
            </Row>
          </Route>
          <Route path="/EEEBTECH">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <AboutCourseEEE />
              </Col>
            </Row>
          </Route>
          <Route path="/B-EEE-VisionMission">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <VisionMisionEEE />
              </Col>
            </Row>
          </Route>
          <Route path="/B-EEE-POSPSOS">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <PEOEEE />
              </Col>
            </Row>
          </Route>
          <Route path="/B-EEE-CourseOutcomes">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <SourceOutcomeEEE />
              </Col>
            </Row>
          </Route>
          <Route path="/CSE-MTECH">
            <Row>
              <Col lg="3">
                <UGCoursesDetails />
              </Col>
              <Col lg="9">
                <MECse />
              </Col>
            </Row>
          </Route>
          <Route path="/CIVIL-MTECH">
            <MECivil />
          </Route>
          <Route path="/MECH-MTECH">
            <MEMech />
          </Route>
          <Route path="/ECE-MTECH">
            <MEECE />
          </Route>
          <Route path="/POLYCIVIL">
            <PolyCivil />
          </Route>
          <Route path="/POLYMECH">
            <PolyMech />
          </Route>
          <Route path="/PolyECE">
            <PolyECE />
          </Route>
          <Route path="/PolyEEE">
            <PolyEEE />
          </Route>
          <Route path="/HVPE">
            <HumanValues />
          </Route>
          <Route path="/CISCONetworkingAcademy">
            <CiscoNetworking />
          </Route>
          <Route path="/BusinessEnglishCertificate">
            <CambridgeEnglish />
          </Route>
          <Route path="/Task">
            <TSAcademy />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
