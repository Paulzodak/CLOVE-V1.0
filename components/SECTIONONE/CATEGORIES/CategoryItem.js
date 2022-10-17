import React from "react";
import { Card } from "../../UI/Card.styled";
import Image from "next/image";

const CategoryItem = ({ item }) => {
  return (
    <Card
      dp={"grid"}
      gridC={"2rem 14rem 1rem"}
      bdbm={"1px solid grey"}
      mg={"1.1rem 1rem 0 1rem"}
      fs={"0.8rem"}
    >
      <Card
        // bd={"1px solid red"}
        ps={"relative"}
        height={"1.5rem"}
        width={"1.5rem"}
        psbt={"0.3rem"}
      >
        <Image src={item.icon} layout={"fill"} objectFit={"contain"} />
      </Card>
      <Card bd={"0px solid red"}> {item.category}</Card>
      <Card bd={"0px solid red"}>
        <Image src={item.arrow} />
      </Card>
    </Card>
  );
};

export default CategoryItem;
