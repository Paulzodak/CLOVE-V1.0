import React from "react";
import Categories from "../../SECTIONONE/CATEGORIES/Categories";
import { Card } from "../../UI/Card.styled";
import ProductList from "../../PRODUCT/ProductList";
import { useSelector } from "react-redux";
const SectionOne = ({ products }) => {
  const styles = useSelector((state) => state.styles);
  const { currentCategory } = useSelector((state) => state.Categories);
  const currentCategoryString = String(currentCategory);
  const filter = `item.category === ${currentCategoryString}`;
  // console.log(filter);

  const productsListProps = {
    products: products,
    style: styles,
    filter: filter,
  };
  return (
    <Card mg="8rem 0" dp="grid" gridC="auto auto auto">
      <Categories />
      <ProductList productsListProps={productsListProps} />
    </Card>
  );
};

export default SectionOne;
