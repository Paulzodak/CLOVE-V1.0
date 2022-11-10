import React, { useEffect, useState } from "react";

import { Card } from "../UI/Card.styled";
import ProductList from "../PRODUCT/ProductList";
import ItemGroupHeader from "../ItemGroupHeader";
import { useSelector } from "react-redux";

const SectionSix = ({ products }) => {
  const [filterState, setFilterState] = useState(true);
  const styles = useSelector((state) => state.styles);

  const props = {
    header: "Most Popular",
  };
  const [tempProducts, setTempProducts] = useState([]);
  const filter = filterState ? "item.id < 5" : "item";
  const productsListProps = {
    products: products,
    style: styles,
    header: "All products",
    filterMessage: filterState ? "Show all" : "hide",
    filter: filterState ? "item.id < 5" : "item",
  };
  return (
    <>
      <section>
        <Card
          pd={"1rem 0"}
          //   bd={"1px solid red"}
          // height={"30rem"}
          mg={"1rem 2rem"}
        >
          <ItemGroupHeader
            filter={filter}
            setFilterState={setFilterState}
            productsListProps={productsListProps}
          />
          <ProductList productsListProps={productsListProps} />
        </Card>
      </section>
    </>
  );
};

export default SectionSix;
