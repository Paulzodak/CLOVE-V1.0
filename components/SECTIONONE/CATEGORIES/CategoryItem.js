import React from "react";
import { Card } from "../../UI/Card.styled";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setCategories } from "../../redux/Categories";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 2rem auto 1rem;
  border-bottom: 1px solid grey;
  margin: 1.1rem 1rem 0 1rem;
  font-size: 0.9rem;
`;
const CategoryItem = ({ item }) => {
  const currentCategory = useSelector((state) => state.Categories);
  console.log(currentCategory);
  const dispatch = useDispatch();
  const categoryStateHandler = () => {
    dispatch(setCategories({ newCategory: item.category }));
  };

  return (
    <Container onClick={categoryStateHandler}>
      <Card
        // bd={"1px solid red"}
        ps={"relative"}
        height={"1.5rem"}
        width={"1.5rem"}
        psbt={"0.3rem"}
      >
        <Image src={item.icon} layout={"fill"} objectFit={"contain"} />
      </Card>
      <Card bd={"0px solid red"}> {item.category}</Card>
      <Card bd={"0px solid red"}>
        <Image src={item.arrow} />
      </Card>
    </Container>
  );
};

export default CategoryItem;
