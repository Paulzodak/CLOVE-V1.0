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

const BASEURL = "https://6350076278563c1d82b6dafc.mockapi.io/";
const SectionThree = ({ products }) => {
  const styles = useSelector((state) => state.styles);

  const filter = "item.stars > 4";

  const productsListProps = {
    products: products,
    style: styles,
    header: "Most Popular",
    filter: filter,
  };
  return (
    <section>
      <Card
        pd={"1rem 0"}
        // bd={"1px solid red"}
        ps={"relative"}
        mg={"1rem 2rem"}
      >
        <ItemGroupHeader productsListProps={productsListProps} />
        <ProductList productsListProps={productsListProps} />
      </Card>
    </section>
  );
};

export default SectionThree;
