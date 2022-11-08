import React from "react";
import { Card } from "../UI/Card.styled";
import ProductItem from "./ProductItem";
// import products from "../../Products.json";
const ProductList = ({ filter, productsListProps }) => {
  const productItemProps = {
    style: productsListProps.style,
  };

  return (
    <Card
      dp={"grid"}
      gridC={"15rem 15rem 15rem 15rem"}
      gridjc={"space-between"}
      mg={"1rem 0"}
      // bd={"1px solid red"}
    >
      {productsListProps.products.map((item) => {
        if (eval(productsListProps.filter)) {
          return (
            <ProductItem item={item} productItemProps={productItemProps} />
          );
        }
      })}
    </Card>
  );
};

export default ProductList;
