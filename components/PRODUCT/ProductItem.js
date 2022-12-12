import React from "react";
import { Card } from "../UI/Card.styled";
import Image from "next/image";
import star from "../../IMAGES/Star.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../UI/Button.styled";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/cart";
import styled from "styled-components";
const Container = styled.div`
  border: ${(props) => props.bd};
  height: 20rem;
  border-radius: 1rem;
  margin: 1rem 0;
  transition: 3s;
  @media (max-width: 500px) {
    min-width: 15rem;
  }
`;

const ProductItem = ({ item, productItemProps }) => {
  const [iconArray, setIconArray] = useState([]);
  const dispatch = useDispatch();
  const itemOrderHandler = () => {
    dispatch(setCart({ newOrder: item }));
  };
  // console.log(item);

  // LOGIC FOR THE PRODUCT STARS
  const temp = [];
  useEffect(() => {
    for (let i = 0; i < item.stars; i++) {
      temp.push("star");
    }
    setIconArray(temp);
  }, []);
  return (
    <Container bd={`2px solid ${productItemProps.style.colors.borderGrey}`}>
      <Card
        mg={"auto"}
        // bd={"1px solid red"}
        ps={"relative"}
        height={"11rem"}
        width={"11rem"}
        // height="50%"
        // width="50%"
      >
        <Image
          // loader={"j2e2ji2e"}
          layout={"fill"}
          src={item.src}
          // src={laptop}
        />
      </Card>
      <Card mg={"1rem"}>
        <Card>
          <b>{item.name}</b>
        </Card>
        <Card>Black leathered Pro 16</Card>
        <Card dp={"grid"} gridC={"2rem 2rem 2rem 2rem 2rem 2rem"}>
          {iconArray.map((item) => {
            return (
              <Card
                key={Math.random()}
                ps={"relative"}
                width={"1.2rem"}
                height={"1.2rem"}
              >
                <Image layout={"fill"} src={star} />
              </Card>
            );
          })}
        </Card>
        <Card mg={"0.3rem 0"} dp={"grid"} gridC={"50% 50%"}>
          <Card fs={"1.2rem"}>
            <b>{`$${item.price}`}</b>
          </Card>
          <Button
            cl={productItemProps.style.colors.buttonBlue}
            bd={`2px solid ${productItemProps.style.colors.buttonBlue}`}
            bg={"transparent"}
            hvcl={"white"}
            hvbg={productItemProps.style.colors.buttonBlue}
            br={"1rem"}
            fs={"0.8rem"}
            float={"right"}
            pd={"0.4rem"}
            onClick={itemOrderHandler}
          >
            Add To Cart
          </Button>
        </Card>
      </Card>
    </Container>
  );
};

export default ProductItem;
