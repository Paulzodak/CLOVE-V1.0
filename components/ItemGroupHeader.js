import React from "react";
import { Card } from "./UI/Card.styled";
import { CardSpan } from "./UI/CardSpan.styled";
import { Button } from "./UI/Button.styled";
import { useSelector } from "react-redux";

const ItemGroupHeader = ({ filter, setFilterState, productsListProps }) => {
  return (
    <Card
      //   bd={"1px solid red"}
      //   height={"5rem"}
      dp={"grid"}
      gridC={"auto 4fr auto"}
    >
      <Card bd={"0px solid red"}>
        <Card fs={"1.2rem"} mg={"auto"}>
          <b> {productsListProps.header}</b>
        </Card>
      </Card>
      <Card bd={"0px solid red"}>
        <Card
          bdbm={`1px solid ${productsListProps.style.colors.borderGrey}`}
          ps={"relative"}
          pstp={"1rem"}
          width={"100%"}
          mg={"0rem 0.5rem 0 0.5rem"}
        ></Card>
      </Card>
      <Card mg={"0 0 0 1rem"} bd={"0px solid red"}>
        {/* <center> */}
        <Button
          cl={productsListProps.style.colors.white}
          bg={productsListProps.style.colors.buttonBlue}
          bd={"0px solid red"}
          pd={"0.3rem 0.9rem"}
          br={"1rem"}
          fs={"0.8rem"}
          float={"right"}
          onClick={() => {
            setFilterState((state) => !state);
          }}
        >
          {productsListProps.filterMessage}
        </Button>
        {/* </center> */}
      </Card>
    </Card>
  );
};

export default ItemGroupHeader;
