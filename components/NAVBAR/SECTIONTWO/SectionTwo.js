import React from "react";
import { Card } from "../../UI/Card.styled";
import menuIcon from "../../../IMAGES/ICONS/menuIcon.svg";
import Image from "next/image";
import Search from "../Search";
import userIcon from "../../../IMAGES/ICONS/userIcon.svg";
import cartIcon from "../../../IMAGES/ICONS/cartIcon.svg";
import searchButton from "../../../IMAGES/ICONS/searchButton.svg";
import { Button } from "../../UI/Button.styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowCart } from "../../redux/ui";
const SectionTwo = () => {
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.styles);
  const orders = useSelector((state) => state.cart.cartItems);
  const cartOpenHandler = () => {
    dispatch(setShowCart({ showCart: true }));
  };
  return (
    <>
      <Card pd={"0 3.7rem"}>
        <Card
          dp={"grid"}
          height={"100%"}
          gridC={"auto auto auto "}
          gridjc={"space-between"}
        >
          {/*  */}
          <Card
            dp={"grid"}
            gridC={"20% 80%"}
            bd={"0px solid red"}
            width={"10rem"}
          >
            <Card
              mg={"1rem 0 0 0"}
              ps={"relative"}
              width={"1.5rem"}
              height={"1.5rem"}
            >
              <Image src={menuIcon} layout={"fill"} objectFit={"contain"} />
            </Card>
            <Card fs={"0.8rem"} mg={"1.2rem 0 0 0"} cl={"white"}>
              Shop By Category
            </Card>
          </Card>
          {/*  */}
          <Card ps={"relative"} width={"25rem"} bd={"0px solid red"}>
            <Search />
            <Card
              ps={"absolute"}
              pstp={"-53%"}
              pslf={"70%"}
              width={"7rem"}
              height={"7rem"}
              hvheight={"6.7rem"}
              hvwidth={"6.7rem"}
              hvpstp={"-49%"}
              tr={"0.3s"}
            >
              <Image src={searchButton} layout={"fill"} objectFit={"contain"} />
            </Card>
          </Card>

          <Card
            bd={"0px solid red"}
            dp={"grid"}
            gridC={"65% 1% 34%"}
            width={"15rem"}
            pd={"0.9rem 0 0 0 "}
          >
            <Card bd={"0px solid red"} dp={"grid"} gridC={"20% 80%"}>
              <Card
                mg={"0rem 0 0 0"}
                ps={"relative"}
                height={"1.5rem"}
                width={"1.5rem"}
              >
                <Image src={userIcon} layout={"fill"} objectFit={"contain"} />
              </Card>
              <Card fs={"0.9rem"} cl={"white"}>
                Login/Signup
              </Card>
            </Card>
            <Card mg={"0rem 0 0 0"} cl={"white"} bd={"0px solid red"}>
              |
            </Card>
            <Card bd={"0px solid red"}>
              <center>
                <Card
                  onClick={cartOpenHandler}
                  ps={"relative"}
                  height={"1.5rem"}
                  width={"1.5rem"}
                >
                  <Image src={cartIcon} layout={"fill"} objectFit={"contain"} />
                  <Button
                    ps="relative"
                    pstp="0.7rem"
                    pslf="0.6rem"
                    bg={styles.colors.buttonBlue}
                    cl="white"
                    fs="0.7rem"
                    bd="none"
                    br="2rem"
                  >
                    {orders.length}
                  </Button>
                </Card>
              </center>
            </Card>
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default SectionTwo;
