import React from "react";
import { UGCoursesDetails } from "../LeftNav/A-HomeAllCourses/UGCoursesDetails";
import { Navbars } from "../Navbar/Navbars";
import { HeaderContent } from "../Header/HeaderContent";
import { Container } from "react-bootstrap";
import { FooterContent } from "../Footer/FooterContent";
export const Landing = () => {
  return (
    <div>
      <Container>
        <HeaderContent />
        <Navbars />
        <FooterContent />
        {/* <UGCoursesDetails /> */}
      </Container>
    </div>
  );
};
