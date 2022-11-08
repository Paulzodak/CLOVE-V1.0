import React from "react";
import { Card } from "../UI/Card.styled";

import Categories from "./CATEGORIES/Categories";
import SpecialOffer from "./SPECIAL OFFER/SpecialOffer";
import AdvertCarousel from "./ADVERT CAROUSEL/AdvertCarousel";
const SectionOne = () => {
  return (
    <Card
      //   width={"100vw"}
      // height={"25rem"}
      mg={"1rem 1rem 1rem 1rem"}
      ps={"relative"}
      pstp={"1rem"}
      // bd={"1px solid red"}
      dp={"grid"}
      gridC={"auto auto auto"}
      gridjc={"space-between"}
    >
      <Categories />
      <AdvertCarousel />
      <SpecialOffer />
    </Card>
  );
};

export default SectionOne;
