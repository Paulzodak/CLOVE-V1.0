import React from "react";
import { Card } from "../UI/Card.styled";
import { ImageCard } from "../UI/ImageCard.styled";
import Image from "next/image";
import toaster from "../../IMAGES/IMAGES /bread-toaster.jpg";
import { useSelector } from "react-redux";
const CartItem = ({ item }) => {
  const styles = useSelector((state) => state.styles);
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
          <Card bd="0px solid red">-</Card>
          <Card bd="0px solid red">{1}</Card>
          <Card bd="0px solid red">+</Card>
        </Card>
      </Card>
      <Card ta="center" pd="50% 0" bd="0px solid red">{`$${
        item.price * 2
      }`}</Card>
    </Card>
  );
};

export default CartItem;
