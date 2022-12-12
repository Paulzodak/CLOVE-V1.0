import React from "react";
import { Card } from "../UI/Card.styled";
import { Button } from "../../components/UI/Button.styled";
import { useSelector } from "react-redux";
import ItemGroupHeader from "../ItemGroupHeader";
import ProductList from "../PRODUCT/ProductList";
// import products from "../../Products.json";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 1rem 0;
  position: relative;
  margin: 1rem 2rem;
`;
const BASEURL = "https://6350076278563c1d82b6dafc.mockapi.io/";
const SectionThree = ({ products }) => {
  const styles = useSelector((state) => state.styles);

  const [filterState, setFilterState] = useState(true);

  const filter = "item.stars > 4";

  const productsListProps = {
    products: products,
    style: styles,
    header: "Most Popular",
    filterMessage: filterState ? "View All" : "Hide",
    filter: filter,
  };
  return (
    <section>
      <Container>
        <ItemGroupHeader productsListProps={productsListProps} />
        <ProductList productsListProps={productsListProps} />
      </Container>
    </section>
  );
};

export default SectionThree;
