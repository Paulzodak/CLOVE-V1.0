import React from "react";
import { Card } from "../../components/UI/Card.styled";
import Navbar from "../../components/NAVBAR/Navbar";
import SectionOne from "../../components/SECTIONONE/SectionOne";
import SectionTwo from "../../components/SECTIONTWO/SectionTwo";
const Index = () => {
  return (
    <>
      <Card font={"'Poppins', sans-serif"} height={"100rem"} width={"100vw"}>
        <Navbar />
        <SectionOne />
        <SectionTwo />
      </Card>
    </>
  );
};

export default Index;
