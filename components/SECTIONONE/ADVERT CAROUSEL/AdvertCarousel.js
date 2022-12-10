import React from "react";
import { Card } from "../../UI/Card.styled";
import { Carousel } from "react-bootstrap";
import Television from "../../../IMAGES/CAROUSEL/television.svg";
import Television2 from "../../../IMAGES/CAROUSEL/television2.svg";
import Image from "next/image";
import { Button } from "../../UI/Button.styled";
import truck from "../../../IMAGES/ICONS/truck.svg";
import phone from "../../../IMAGES/ICONS/phone.svg";
import piggy from "../../../IMAGES/ICONS/piggy.svg";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 72% 23%;
  /* border: 1px solid red; */
  background-color: white;
  width: 100%;
  height: 100%;
  align-content: space-between;
  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 500px) {
    width: 90vw;
    height: 90%;
  }
`;
const AdvertText = styled.div`
  font-size: 2rem;
  padding: 5rem 0 0 1rem;
  /* border: 1px solid blue; */
  color: white;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
const ShopBtn = styled.button`
  font-size: 1rem;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 2rem;
  background-color: black;
  border: 1px solid white;
  box-sizing: border-box;
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;
const CarouselSection = styled.div`
  height: 17rem;
  /* border: 1px solid blue; */
  width: 17rem;
  @media (max-width: 500px) {
    height: 10rem;
    width: 10rem;
    margin-top: 1.7rem;
  }
`;

const FreeShippingContainer = styled.div`
  border-right: 2px solid grey;
`;
const Icon = styled.div`
  height: 2rem;
  width: 2rem;
  position: relative;
  margin: auto;
  @media (max-width: 500px) {
    height: 1.2rem;
    width: 1.2rem;
  }
`;
const OnlineSupportContainer = styled.div`
  border-right: 2px solid grey;
`;
const TextHeader = styled.div`
  font-size: 0.7rem;
  @media (max-width: 500px) {
    font-size: 0.55rem;
  }
`;
const Text = styled.div`
  margin: 0.2rem 0 0 0;
  font-size: 0.6rem;
  @media (max-width: 500px) {
    font-size: 0.45rem;
  }
`;

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 3rem 6rem 3rem 6rem 3rem 6rem;
  justify-content: space-between;
  height: 2.5rem;
  margin: 1.75rem 2rem 0 2rem;
  @media (max-width: 500px) {
    margin: 1.5rem 1rem 0 1rem;
    grid-template-columns: 2rem 5rem 2rem 5rem 2rem 5rem;
  }
`;
const AdvertCarousel = () => {
  return (
    <Container>
      <Card
        br={"1rem"}
        // bd={"1px solid red"}
        bg={"black"}
        width="inherit"
        // height={"10rem"}
        // width={"10rem"}

        dp={"grid"}
        gridC={"40% 60%"}
      >
        <AdvertText>
          TV
          <br />
          Shop
          <ShopBtn>Shop By Category</ShopBtn>
        </AdvertText>
        <center>
          <CarouselSection>
            <Carousel indicators={false} controls={false} interval={1000}>
              <Carousel.Item>
                <Card>
                  <Image
                    className="d-block w-50"
                    src={Television}
                    alt="First slide"
                  />
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Image
                    className="d-block w-50"
                    src={Television2}
                    alt="First slide"
                  />
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Image
                    className="d-block w-50"
                    src={Television}
                    alt="First slide"
                  />
                </Card>
              </Carousel.Item>
            </Carousel>
          </CarouselSection>
        </center>
      </Card>
      <Card width="inherit" bg={"#F5F5F5"} br={"1rem"} bd={"0px solid yellow"}>
        <DetailContainer>
          <Icon>
            <Image layout={"fill"} objectFit={"contain"} src={truck} />
          </Icon>
          <FreeShippingContainer>
            <TextHeader>
              <b>Free Shipping </b>
            </TextHeader>
            <Text>On all Shopping</Text>
          </FreeShippingContainer>

          <Icon>
            <Image layout={"fill"} objectFit={"contain"} src={phone} />
          </Icon>
          <OnlineSupportContainer>
            <TextHeader>
              <b>Online Support </b>
            </TextHeader>
            <Text>Technical 24/7</Text>
          </OnlineSupportContainer>

          <Icon>
            <Image layout={"fill"} objectFit={"contain"} src={piggy} />
          </Icon>
          <Card>
            <TextHeader>
              <b>Big Saving </b>
            </TextHeader>
            <Text>Weekend Sales</Text>
          </Card>
        </DetailContainer>
      </Card>
    </Container>
  );
};

export default AdvertCarousel;
