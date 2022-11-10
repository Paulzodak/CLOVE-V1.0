import React from "react";
import { Card } from "./UI/Card.styled";
import ProductList from "./PRODUCT/ProductList";
import { useSelector } from "react-redux";
const Search = ({ products }) => {
  const styles = useSelector((state) => state.styles);
  const productsListProps = {
    products: products,
    style: styles,
    filter: "item.name.toLowerCase().includes(inputs.toLowerCase())",
  };
  return (
    <>
      <ProductList search productsListProps={productsListProps} />
    </>
  );
};

export default Search;
