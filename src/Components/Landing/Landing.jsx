import React from "react";
import { UGCoursesDetails } from "../LeftNav/A-HomeAllCourses/UGCoursesDetails";
import { Navbars } from "../Navbar/Navbars";
import { HeaderContent } from "../Header/HeaderContent";
import { Container } from "react-bootstrap";
import { FooterContent } from "../Footer/FooterContent";
import { Card } from "react-bootstrap";
export const Landing = () => {
  return (
    <div>
      <Card>
        <HeaderContent />
        <Navbars />
        <FooterContent />
        {/* <UGCoursesDetails /> */}
      </Card>
    </div>
  );
};
