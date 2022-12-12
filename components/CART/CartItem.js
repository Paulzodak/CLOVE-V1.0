import React from "react";
import { Card } from "../UI/Card.styled";
import { ImageCard } from "../UI/ImageCard.styled";
import { useEffect } from "react";
import Image from "next/image";
import toaster from "../../IMAGES/IMAGES /bread-toaster.jpg";
import { useSelector } from "react-redux";
import { incrementQuantity } from "../redux/cart";
import { decrementQuantity } from "../redux/cart";
import { useDispatch } from "react-redux";
import { setTotalForEach } from "../redux/cart";
import { setTotal } from "../redux/cart";
import styled from "styled-components";
const Container = styled.div`
  border: ${(props) => props.bdbm};
  display: grid;
  grid-template-columns: 15% 25% 10% 20% 10% 7%;
  justify-content: space-between;
  font-size: 1rem;
  padding: 1rem 0;
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
const Name = styled.div`
  margin: 20% 0 0 0;
  font-size: calc(1em + 0.1em);
`;

const Quantity = styled.div`
  background-color: ${(props) => props.bg};
  width: 100%;
  height: calc(1em + 0.5em);
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 20% 30% 20%;
  justify-content: space-between;
  padding: 0rem 0.4rem;
  text-align: center;
  font-size: calc(1em + 0.2em);
`;
const UtilityBtn = styled.div`
  cursor: pointer;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.styles);
  const { total } = useSelector((state) => state.cart);
  dispatch(setTotalForEach({ id: item.id }));
  useEffect(() => {
    dispatch(setTotal());
  });

  const decrementHandler = () => {
    dispatch(decrementQuantity({ id: item.id }));
    // dispatch(setTotal());
  };
  const incrementHandler = () => {
    dispatch(incrementQuantity({ id: item.id }));
    // dispatch(setTotal());
  };
  return (
    <Container bdbm={`2px solid ${styles.colors.borderGrey}`}>
      <Card
        // bd={`2px solid ${styles.colors.borderGrey}`}
        br="1rem"
        pd="0.5rem 0"
        height="100%"
        width="100%"
      >
        <Image height="100%" width="100%" src={item.src} />
      </Card>
      <Name>{item.name}</Name>
      <Card ta="centeer" pd="50% 0" bd="0px solid red">{`$${item.price}`}</Card>
      <Card ta="centekr" pd="25% 0" bd="0px solid red">
        <Quantity
          bg={styles.colors.lightGrey}
          width="100%"
          height="1.7rem"
          br="1rem"
          dp="grid"
          gridC="20% 30% 20%"
          gridjc="space-between"
          pd="0.1rem 0.4rem"
          ta="center"
          fs="1rem"
        >
          <UtilityBtn onClick={decrementHandler}>-</UtilityBtn>
          <Card bd="0px solid red">{item.quantity}</Card>
          <UtilityBtn onClick={incrementHandler}>+</UtilityBtn>
        </Quantity>
      </Card>
      <Card ta="center" pd="50% 0" bd="0px solid red">{`$${item.total}`}</Card>
    </Container>
  );
};

export default CartItem;
