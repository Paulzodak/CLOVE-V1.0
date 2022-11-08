import React from "react";
import { Card } from "../UI/Card.styled";
import Image from "next/image";
import laptop from "../../IMAGES/laptop.svg";
import star from "../../IMAGES/star.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../UI/Button.styled";

const ProductItem = ({ item, productItemProps }) => {
  const [iconArray, setIconArray] = useState([]);
  const temp = [];

  // LOGIC FOR THE PRODUCT STARS
  useEffect(() => {
    for (let i = 0; i < item.stars; i++) {
      temp.push("star");
    }
    setIconArray(temp);
  }, []);
  return (
    <Card
      bd={`2px solid ${productItemProps.style.colors.borderGrey}`}
      height={"20rem"}
      br={"1rem"}
      mg={"1rem 0"}
    >
      <Card
        mg={"auto"}
        // bd={"1px solid red"}
        ps={"relative"}
        height={"11rem"}
        width={"11rem"}
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
              <Card ps={"relative"} width={"1.2rem"} height={"1.2rem"}>
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
          >
            Add To Cart
          </Button>
        </Card>
      </Card>
    </Card>
  );
};

export default ProductItem;
