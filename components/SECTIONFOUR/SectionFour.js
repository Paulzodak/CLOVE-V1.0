import React from "react";
import { Card } from "../UI/Card.styled";
import ProductList from "../PRODUCT/ProductList";
import ItemGroupHeader from "../ItemGroupHeader";
import { useSelector } from "react-redux";
import { useState } from "react";
const SectionFour = ({ products }) => {
  const [filterState, setFilterState] = useState(true);
  const styles = useSelector((state) => state.styles);
  const filter = "item.price > 500";
  const props = {
    header: "Most Popular",
  };
  const productsListProps = {
    products: products,
    style: styles,
    header: "Our Featured Offers",
    filterMessage: filterState ? "View All" : "Hide",
    filter: "item.price > 500",
  };
  return (
    <>
      <section>
        <Card pd={"1rem 0"} mg={"1rem 2rem"}>
          <ItemGroupHeader
            // filter={filter}
            setFilterState={setFilterState}
            productsListProps={productsListProps}
          />
          <ProductList productsListProps={productsListProps} />
        </Card>
      </section>
    </>
  );
};

export default SectionFour;
