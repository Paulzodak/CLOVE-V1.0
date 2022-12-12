import React from "react";
import { Card } from "../UI/Card.styled";
import CartIcon from "../UI/fonts/CartIcon";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Button } from "../UI/Button.styled";

import OrderSummary from "./OrderSummary";
import styled from "styled-components";

const BackdropContainer = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 10;
  position: fixed;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.512);
`;
const Container = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  border-radius: 1rem;
  margin: 20vh auto;
  background-color: white;
  /* height: 30rem; */
  width: 45rem;
  @media (max-width: 900px) {
    margin: 15vh auto;
    width: 27rem;
  }
  @media (max-width: 500px) {
    margin: 10vh auto;
    width: 80%;
  }
`;
const ContentArea = styled.div`
  display: grid;
  overflow-y: scroll;
  grid-template-columns: 65% 35%;
  /* border: 1px solid red; */
  overflow: scroll;
  height: 30rem;
  @media (max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-rows: 50%;
  }
`;
const LabelContainer = styled.div`
  border-bottom: ${(props) => props.bdbm};
  display: grid;
  grid-template-columns: 45% 15% 20% 10% 7%;
  font-size: 0.8rem;
  color: ${(props) => props.cl};
  @media (max-width: 500px) {
    grid-template-columns: 42% 15% 25% 10% 5%;
    font-size: 0.6rem;
  }
`;
const CheckoutBtn = styled.button`
  font-size: 0.8rem;
  border: none;
  background-color: black;
  width: 100%;
  height: 3rem;
  color: white;
  transition: 1s;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;
const Cart = () => {
  const styles = useSelector((state) => state.styles);
  const { cartItems } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const { vat } = useSelector((state) => state.cart);
  console.log(cartItems);

  const items = [
    { name: "Sony Gamepad Gamepad", price: 300, quantity: 1, total: 300 },
    { name: "Sony Gamepad", price: 300, quantity: 1, total: 300 },
    { name: "Sony Gamepad", price: 300, quantity: 1, total: 300 },
    { name: "Sony Gamepad", price: 300, quantity: 1, total: 300 },
    { name: "Sony Gamepad", price: 300, quantity: 1, total: 300 },
    { name: "Sony Gamepad", price: 300, quantity: 1, total: 300 },
  ];
  const OrderSummaryLabels = [
    {
      name: "Subtotal",
      price: `$${total}`,
    },
    {
      name: "Shipping",
      price: `free`,
    },
    {
      name: "VAT",
      price: `$${vat}`,
    },
    {
      name: "Add Coupon code - ",
      color: "rgb(113, 218, 113)",
    },
  ];
  return (
    <BackdropContainer>
      <Container>
        <Card bg="black" height="3.5rem" cl="white" width="100%">
          <center>
            <Card
              ps="relative"
              pstp="0.5rem"
              psrt="0.8rem"
              dp="inline"
              fs="1.5rem"
            >
              YOUR CART
            </Card>
            <CartIcon height="2rem" width="2rem" />
          </center>
        </Card>
        <ContentArea>
          <Card ovfy="scroll" bd="0px solid red" pd="1rem">
            <LabelContainer
              bdbm={`2px solid ${styles.colors.borderGrey}`}
              cl={styles.colors.darkGrey}
            >
              <Card>PRODUCT</Card>
              <Card>PRICE</Card>
              <Card>QUANTITY</Card>
              <Card>TOTAL</Card>
            </LabelContainer>
            {cartItems.map((item) => {
              return <CartItem item={item} />;
            })}
          </Card>
          <Card height="100%" pd="1rem" bd="0px solid red">
            <Card
              bg={styles.colors.lightGrey}
              width="100%"
              height="16rem"
              mg="1rem auto"
            >
              <Card pd="1rem 0 0 1rem">Order Summary</Card>
              <hr />
              <Card fs="0.6rem" pd="0 1rem">
                {OrderSummaryLabels.map((item) => {
                  return <OrderSummary item={item} />;
                })}
              </Card>
              <hr />
              <Card
                fs="0.8rem"
                pd="0 1rem"
                mg="1rem 0"
                dp="grid"
                gridC="70% 30%"
              >
                <Card>Total</Card>
                <Card ta="center">{`$${total}`}</Card>
              </Card>
            </Card>
            <CheckoutBtn>CHECKOUT</CheckoutBtn>
          </Card>
        </ContentArea>
      </Container>
    </BackdropContainer>
  );
};

export default Cart;
