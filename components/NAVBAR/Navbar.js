import React from "react";
import { Card } from "../UI/Card.styled";

import SectionOne from "./SECTIONONE/SectionOne";
import SectionTwo from "./SECTIONTWO/SectionTwo";

const Navbar = () => {
  return (
    <>
      <Card
        height={"7rem"}
        width={"100%"}
        br={"0 0 3rem 3rem"}
        dp={"grid"}
        gridR={"50% 50%"}
        ovfy={"hidden"}
        ovfx={"hidden"}
        bg={"#2A2A36"}
        ps={"sticky"}
        pstp={"0rem"}
        zindex={"10"}
        // bd={"1px solid red"}
      >
        <SectionOne />
        <SectionTwo />
      </Card>
    </>
  );
};

export default Navbar;
