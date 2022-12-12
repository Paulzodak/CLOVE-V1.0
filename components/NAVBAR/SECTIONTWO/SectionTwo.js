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
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  height: 100%;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  @media (max-width: 900px) {
    grid-template-columns: auto 2fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    margin: auto;
  }
`;
const ShopIcon = styled.div`
  position: relative;
  margin: 1rem 0 0 0;
  height: 1.5rem;
  width: 1.5rem;
`;
const ShopText = styled.div`
  font-size: 0.8rem;
  margin: 1.2rem 0 0 0;
  color: white;
`;
const SearchContainer = styled.div`
  position: relative;
  width: 25rem;
  /* width: 100%; */
  @media (max-width: 900px) {
    width: 17rem;
  }
  @media (max-width: 450px) {
    width: 14rem;
  }
`;
const SearchBtn = styled.div`
  position: absolute;
  top: -53%;
  left: 70%;
  width: 7rem;
  height: 7rem;
  transition: 0.3s;
  &:hover {
    height: 6.7rem;
    width: 6.7rem;
    top: -49%;
  }
  @media (max-width: 900px) {
    left: 55%;
  }
  @media (max-width: 450px) {
    left: 50%;
  }
`;
const UserIcon = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
`;
const CartIconContainer = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
`;
const ShopByCategory = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 10rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
const LoginSignUp = styled.div`
  font-size: 0.9rem;
  color: white;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Utility = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  /* border: 1px solid green; */

  @media (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;
const SubContainer = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 65% 1% 34%;
  width: 15rem;
  padding: 0.9rem 0 0 0;
  @media (max-width: 900px) {
    grid-template-columns: auto auto;
    justify-content: space-around;
    width: 100%;
  }
  @media (max-width: 450px) {
    grid-template-columns: auto auto;
  }
`;

const SectionTwo = () => {
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.styles);
  const orders = useSelector((state) => state.cart.cartItems);
  const cartOpenHandler = () => {
    dispatch(setShowCart({ showCart: true }));
  };
  return (
    <>
      <Card bd="0px solid red" pd={"0 3.7rem"}>
        <Container>
          <ShopByCategory>
            <ShopIcon>
              <Image src={menuIcon} layout={"fill"} objectFit={"contain"} />
            </ShopIcon>
            <ShopText>Shop By Category</ShopText>
          </ShopByCategory>

          <SearchContainer>
            <Search />
            <SearchBtn>
              <Image src={searchButton} layout={"fill"} objectFit={"contain"} />
            </SearchBtn>
          </SearchContainer>

          <SubContainer>
            <Utility>
              <UserIcon>
                <Image src={userIcon} layout={"fill"} objectFit={"contain"} />
              </UserIcon>
              <LoginSignUp>Login/Signup</LoginSignUp>
            </Utility>
            {/* <Card cl={"white"} bd={"0px solid red"}>
              |
            </Card> */}
            <Card>
              <center>
                <CartIconContainer onClick={cartOpenHandler}>
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
                </CartIconContainer>
              </center>
            </Card>
          </SubContainer>
        </Container>
      </Card>
    </>
  );
};

export default SectionTwo;
