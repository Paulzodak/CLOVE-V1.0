import React from "react";
import { Card } from "../UI/Card.styled";
import CardItem from "./CardItem";

const SectionTwo = () => {
  const items = [
    {
      id: 1,
      color: " #01C9A2 ",
    },
    {
      id: 1,
      color: " black ",
    },

    {
      id: 1,
      color: "  #FC9715 ",
    },
    {
      id: 1,
      color: "#1A7AEC",
    },
  ];
  return (
    <Card height={"6rem"} mg={"2rem 2rem"} bd={"1px solid red"}>
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
  );
};

export default SectionTwo;
