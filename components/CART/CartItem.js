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
    <Card
      bdbm={`2px solid ${styles.colors.borderGrey}`}
      //   bd="1px solid red"
      dp="grid"
      gridC="15% 25%  10% 20% 10% 7%"
      gridjc="space-between"
      fs="1rem"
      pd="1rem 0"
    >
      <Card
        // bd={`2px solid ${styles.colors.borderGrey}`}
        br="1rem"
        height="100%"
        width="100%"
      >
        <Image height="100%" width="100%" src={item.src} />
      </Card>
      <Card mg="20% 0 0 0" fs="0.9rem">
        {item.name}
      </Card>
      <Card ta="centeer" pd="50% 0" bd="0px solid red">{`$${item.price}`}</Card>
      <Card ta="centekr" pd="25% 0" bd="0px solid red">
        <Card
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
          <Card cursor="pointer" onClick={decrementHandler} bd="0px solid red">
            -
          </Card>
          <Card bd="0px solid red">{item.quantity}</Card>
          <Card cursor="pointer" onClick={incrementHandler} bd="0px solid red">
            +
          </Card>
        </Card>
      </Card>
      <Card ta="center" pd="50% 0" bd="0px solid red">{`$${total}`}</Card>
    </Card>
  );
};

export default CartItem;
