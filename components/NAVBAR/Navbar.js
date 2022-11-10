import React from "react";
import { Card } from "../UI/Card.styled";
import { useState } from "react";
import { useEffect } from "react";
import SectionOne from "./SECTIONONE/SectionOne";
import SectionTwo from "./SECTIONTWO/SectionTwo";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const controlBar = () => {
    if (window.scrollY > lastScroll && window.scrollY > 60) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlBar);
    return () => {
      window.removeEventListener("scroll", controlBar);
    };
  }, [lastScroll]);

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
        ps={"fixed"}
        pstp={show ? "0rem" : "-10rem"}
        tr={"600ms"}
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
