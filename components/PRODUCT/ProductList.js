import React from "react";
import { Card } from "../UI/Card.styled";
import ProductItem from "./ProductItem";
// import products from "../../Products.json";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin: ${(props) => props.mg};
  @media (max-width: 1300px) {
    grid-template-columns: 28% 28% 28%;
  }
  @media (max-width: 900px) {
    grid-template-columns: 48% 48%;
  }
  @media (max-width: 500px) {
    grid-template-columns: 90%;

    justify-content: space-around;
  }
`;
const ProductList = ({ search, productsListProps }) => {
  const inputs = useSelector((state) => state.search.userInput);
  console.log();
  const productItemProps = {
    style: productsListProps.style,
  };

  return (
    <Container mg={search ? "8rem 0" : "1rem 0"}>
      {productsListProps.products.map((item) => {
        if (productsListProps.filter) {
          return (
            <ProductItem
              key={item.id}
              item={item}
              productItemProps={productItemProps}
            />
          );
        }
      })}
    </Container>
  );
};

export default ProductList;
