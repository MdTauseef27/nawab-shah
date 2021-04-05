import React from "react";
import { Navbars } from "../Navbar/Navbars";
import { HeaderContent } from "../Header/HeaderContent";
import { FooterContent } from "../Footer/FooterContent";
import { Card } from "react-bootstrap";
import { NavbarMain } from "../Navbar/NavbarMain";
export const Landing = () => {
  return (
    <div>
      <Card>
        <NavbarMain />
        <HeaderContent />
        <Navbars />
        <FooterContent />
      </Card>
    </div>
  );
};
