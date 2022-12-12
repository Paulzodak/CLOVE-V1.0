import React from "react";
import { Card } from "../UI/Card.styled";

import Categories from "./CATEGORIES/Categories";
import SpecialOffer from "./SPECIAL OFFER/SpecialOffer";
import AdvertCarousel from "./ADVERT CAROUSEL/AdvertCarousel";
import { CardLink } from "../UI/Link.styled";
import styled from "styled-components";
const Container = styled.div`
  margin: 8rem 1rem 1rem 1rem;
  /* border: 1px solid red; */
  display: grid;
  height: 27rem;
  grid-template-columns: 1fr 1.3fr 1fr;
  column-gap: 2rem;
  justify-content: space-between;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1.5fr;
    justify-content: space-between;
    column-gap: 4rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: auto;
    justify-content: space-around;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
    justify-content: space-around;
    /* height: 25rem; */
  }
`;
const SectionOne = () => {
  return (
    <Container>
      {/* <CardLink hvcl="black" cl="none" href="/Categories"> */}
      <Categories />
      {/* </CardLink> */}
      <AdvertCarousel />
      <SpecialOffer />
    </Container>
  );
};

export default SectionOne;
