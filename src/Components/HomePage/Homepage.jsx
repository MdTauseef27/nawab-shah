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
import eventsLogo1 from "../Images/HomeCarouselEvents1.png";
import eventsLogo2 from "../Images/HomeCarouselEvents2.jpg";
import eventsLogo3 from "../Images/HomeCarouselEvents3.jpg";
import eventsLogo4 from "../Images/HomeCarouselEvents4.png";
import eventsLogo5 from "../Images/HomeCarouselEvents5.jpg";
import eventsLogo6 from "../Images/HomeCarouselEvents6.jpg";
import eventsLogo7 from "../Images/HomeCarouselEvents7.jpg";
import eventsLogo8 from "../Images/HomeCarouselEvents8.jpg";
import eventsLogo9 from "../Images/HomeCarouselEvents9.png";

import LatestEventsLogo from "../Images/LatestEventsLogo.png";
import "../HomePage/Homepage.css";
export const Homepage = () => {
  return (
    <div>
      <Carousel controls={false} className="HomeCarousels">
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
            <Carousel controls={false}>
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
          <img
            src={LatestEventsLogo}
            style={{
              marginBottom: "50px",
              marginTop: "30px",
              float: "left",
              marginLeft: "20px",
            }}
          ></img>
        </Col>
        <Col lg="3">
          <Card className="HomeEventsPlacementCard">
            <Carousel controls={false}>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>
                <img src={eventsLogo1} className="HomeEventsPlacementImage" />
                <p className="HomeEventsPlacementP1">Congratulations</p>
                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  Congratulations to Associate Professor, Mohammed Abdul Sattar
                  from ECE Department for achieving Senior Membership status and
                  for receiving a Plaque from IEEE (The highest standard
                  Institute at International level defining Electrical and
                  Electronics). Mr. Sattar is among the lucky 9% IEEE members
                  who earned the Senior Membership.
                </p>
              </Carousel.Item>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>

                <img src={eventsLogo2} className="HomeEventsPlacementImage" />
                <p className="HomeEventsPlacementP1">
                  International Conference ICSTM - 2017
                </p>
                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  Vice Principal Mr. Farrukh Anwar, presented his joint paper
                  along with Dr.Asthana at an International conf., ICSTM-2017
                </p>
              </Carousel.Item>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>

                <img src={eventsLogo3} className="HomeEventsPlacementImage" />
                <p className="HomeEventsPlacementP1">
                  ISHRAE BIZQUIZ Competitions
                </p>
                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  Vice Principal Mr. Raza Ahmed Khan receiving prize in Quiz
                  Competitions for NSAKCET ISHRAE Students Chapter in ISHRAE
                  BIZQUIZ Competitions at Hotel Green Park on Saturday 2-Dec-17.
                </p>
              </Carousel.Item>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>

                <img src={eventsLogo4} className="HomeEventsPlacementImage" />
                <p className="HomeEventsPlacementP1">
                  Seminar on Embedded Software Safety & Security
                </p>
                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  Faculties of ECE, NSAKCET attended One day Seminar on Embedded
                  Software Safety &amp; Security organised by LDRA at Taj Deccan
                  on 10-Nov-2017.
                </p>
              </Carousel.Item>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>

                <img src={eventsLogo5} className="HomeEventsPlacementImage" />
                <h6 className="HomeEventsPlacementH6">
                  Mohammed Saifullah Shareef
                </h6>
                <p className="HomeEventsPlacementP1">Mechanical Department</p>
                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  He is selected in Chinese Plant Manufacturing Company as
                  "Technical Service Engineer". He got selected before
                  convocation and presently working in Hyderabad.
                </p>
              </Carousel.Item>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>

                <img src={eventsLogo6} className="HomeEventsPlacementImage" />
                <h6 className="HomeEventsPlacementH6">Syed Rafeeq ul Haque</h6>
                <p className="HomeEventsPlacementP1">Mechanical Department</p>
                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  He is selected in Chinese Plant Manufacturing Company as
                  "Technical Service Engineer". He got selected before
                  convocation and presently working in West Bengal.
                </p>
              </Carousel.Item>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>

                <img src={eventsLogo7} className="HomeEventsPlacementImage" />
                <h6 className="HomeEventsPlacementH6">
                  Abdullah Abdul Basith Qureshi
                </h6>
                <p className="HomeEventsPlacementP1">Mechanical Department</p>
                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  He is selected in Chinese Plant Manufacturing Company as
                  "Technical Service Engineer". He got selected before
                  convocation and presently working in Chhattisgarh.
                </p>
              </Carousel.Item>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>

                <img src={eventsLogo8} className="HomeEventsPlacementImage" />
                <h6 className="HomeEventsPlacementH6">Syed Sameer</h6>
                <p className="HomeEventsPlacementP1">Mechanical Department</p>
                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  He is selected in Chinese Plant Manufacturing Company as
                  "Technical Service Engineer". He got selected before
                  convocation.
                </p>
              </Carousel.Item>
              <Carousel.Item
                interval={2000}
                className="HomeEventsPlacementCarouselItem"
              >
                <h6 className="HomeEventsPlacementH6">EVENTS & PLACEMENTS</h6>

                <img src={eventsLogo9} className="HomeEventsPlacementImage" />
                <h6 className="HomeEventsPlacementH6">
                  Md. Sameer & Md. Sohail
                </h6>

                <h3 className="HomeEventsPlacementH3"></h3>
                <p className="HomeEventsPlacementP2">
                  Mr.Mujahed Alam Khan congratulating students Md. Sameer & Md.
                  Sohail for winning Duet Singing Competition wtih First Place
                  out of 150 singers in Udbhav Fest 2016, Aurora Engg College.
                </p>
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
