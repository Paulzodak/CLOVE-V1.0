import React from "react";
import { Card } from "../UI/Card.styled";
import CardItem from "./CardItem";

import imac from "../../IMAGES/imac.svg";
import drone from "../../IMAGES/drone.svg";
import vaccumCleaner from "../../IMAGES/vaccum cleaner.svg";
import coffeeMaker from "../../IMAGES/coffeeMaker.svg";
import styled from "styled-components";
const CardList = styled.div`
  width: 100%;
  display: grid;
  height: 10rem;
  grid-template-columns: 19rem 19rem 19rem 19rem;
  /* grid-template-rows: 10rem 10rem; */
  justify-content: space-between;
  @media (max-width: 1300px) {
    grid-template-columns: 17rem 17rem 17rem;
    height: 23rem;
    grid-template-rows: 10rem 10rem;
    align-content: space-between;
  }
  @media (max-width: 900px) {
    grid-template-columns: 45% 45%;
    align-content: space-around;
  }
  @media (max-width: 500px) {
    /* border: 1px solid red; */
    height: 50rem;
    grid-template-columns: 90%;
    grid-template-rows: 10rem 10rem 10rem 10rem;
    justify-content: space-around;
    align-content: space-between;
  }
`;
const SectionTwo = () => {
  const items = [
    {
      id: 0,
      color: " #01C9A2 ",
      image: imac,
    },
    {
      id: 1,
      color: " black ",
      image: drone,
    },

    {
      id: 2,
      color: "  #FC9715 ",
      image: vaccumCleaner,
    },
    {
      id: 3,
      color: "#1A7AEC",
      image: coffeeMaker,
    },
  ];
  return (
    <section>
      <Card mg={"2rem 2rem"} bd={"0px solid red"}>
        <CardList>
          {items.map((item) => {
            return <CardItem key={item.id} item={item} />;
          })}
        </CardList>
      </Card>
    </section>
  );
};

export default SectionTwo;
