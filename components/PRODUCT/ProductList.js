import React from "react";
import { Card } from "../UI/Card.styled";
import ProductItem from "./ProductItem";
// import products from "../../Products.json";
import { useSelector } from "react-redux";
const ProductList = ({ search, productsListProps }) => {
  const inputs = useSelector((state) => state.search.userInput);
  console.log(inputs);
  const productItemProps = {
    style: productsListProps.style,
  };

  return (
    <Card
      dp={"grid"}
      gridC={"15rem 15rem 15rem 15rem"}
      gridjc={"space-between"}
      mg={search ? "8rem 0" : "1rem 0"}
      // bd={"1px solid red"}
    >
      {productsListProps.products.map((item) => {
        if (eval(productsListProps.filter)) {
          return (
            <ProductItem
              key={item.id}
              item={item}
              productItemProps={productItemProps}
            />
          );
        }
      })}
    </Card>
  );
};

export default ProductList;
