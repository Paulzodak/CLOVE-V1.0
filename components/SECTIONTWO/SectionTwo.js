import React from "react";
import { Card } from "../UI/Card.styled";
import CardItem from "./CardItem";

import imac from "../../IMAGES/imac.svg";
import drone from "../../IMAGES/drone.svg";
import vaccumCleaner from "../../IMAGES/vaccum cleaner.svg";
import coffeeMaker from "../../IMAGES/coffeeMaker.svg";

const SectionTwo = () => {
  const items = [
    {
      id: 1,
      color: " #01C9A2 ",
      image: imac,
    },
    {
      id: 1,
      color: " black ",
      image: drone,
    },

    {
      id: 1,
      color: "  #FC9715 ",
      image: vaccumCleaner,
    },
    {
      id: 1,
      color: "#1A7AEC",
      image: coffeeMaker,
    },
  ];
  return (
    <section>
      <Card height={"8rem"} mg={"2rem 2rem"} bd={"0px solid red"}>
        <Card
          width={"100%"}
          height={"100%"}
          dp={"grid"}
          gridC={"15rem 15rem 15rem 15rem"}
          gridjc={"space-between"}
        >
          {items.map((item) => {
            return <CardItem item={item} />;
          })}
        </Card>
      </Card>
    </section>
  );
};

export default SectionTwo;
