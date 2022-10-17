import React from "react";
import { Card } from "../UI/Card.styled";

import SectionOne from "./SECTIONONE/SectionOne";
import SectionTwo from "./SECTIONTWO/SectionTwo";

const Navbar = () => {
  return (
    <>
      <Card
        height={"7rem"}
        // width={"100vw"}
        br={"0 0 3rem 3rem"}
        dp={"grid"}
        gridR={"50% 50%"}
        ovfy={"hidden"}
        ovfx={"hidden"}
        bg={"#2A2A36"}
      >
        <SectionOne />
        <SectionTwo />
      </Card>
    </>
  );
};

export default Navbar;
