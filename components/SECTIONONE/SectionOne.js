import React from "react";
import { Card } from "../UI/Card.styled";

import Categories from "./CATEGORIES/Categories";
import SpecialOffer from "./SPECIAL OFFER/SpecialOffer";
import AdvertCarousel from "./ADVERT CAROUSEL/AdvertCarousel";
import { CardLink } from "../UI/Link.styled";
const SectionOne = () => {
  return (
    <Card
      //   width={"100vw"}
      // height={"25rem"}
      mg={"8rem 1rem 1rem 1rem"}
      ps={"relative"}
      // ps={"relative"}
      // pstp={"7rem"}
      // bd={"1px solid red"}
      dp={"grid"}
      gridC={"auto auto auto"}
      gridjc={"space-between"}
    >
      <CardLink hvcl="black" cl="none" href="/Categories">
        <Categories />
      </CardLink>
      <AdvertCarousel />
      <SpecialOffer />
    </Card>
  );
};

export default SectionOne;
