import React from "react";
import { Card } from "../UI/Card.styled";
import CartIcon from "../UI/fonts/CartIcon";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Button } from "../UI/Button.styled";

import OrderSummary from "./OrderSummary";

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
    <Card
      height="100vh"
      width="100vw"
      zindex="10"
      ps="fixed"
      bg="rgba(0, 0, 0, 0.512)"
      //   bdft="blur(1px)"
      pstp="0rem"
    >
      <Card
        ovfy="hidden"
        ovfx="hidden"
        br="1rem"
        mg="20vh auto"
        bg="white"
        height="30rem"
        width="45rem"
      >
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
        <Card dp="grid" gridC="65% 35%">
          <Card ovfy="scroll" height="27rem" bd="0px solid red" pd="1rem">
            <Card
              bdbm={`2px solid ${styles.colors.borderGrey}`}
              //   bd="0px solid red"
              dp="grid"
              gridC="40% 10% 20% 10% 7%"
              gridjc="space-between"
              fs="0.8rem"
              cl={styles.colors.darkGrey}
            >
              <Card>PRODUCT</Card>
              <Card>PRICE</Card>
              <Card>QUANTITY</Card>
              <Card>TOTAL</Card>
            </Card>
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
            <Button fs="0.8rem" bd="none" width="100%" height="3rem">
              CHECKOUT
            </Button>
          </Card>
        </Card>
      </Card>
    </Card>
  );
};

export default Cart;
