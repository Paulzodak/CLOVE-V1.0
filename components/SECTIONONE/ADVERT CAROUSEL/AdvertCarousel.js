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

const AdvertCarousel = () => {
  return (
    <Card
      dp={"grid"}
      gridR={"72% 23%"}
      bg={"white"}
      width={"30rem"}
      height={"100%"}
      bd={"0px solid red"}
      gridac={"space-between"}
    >
      <Card
        br={"1rem"}
        // bd={"1px solid red"}
        bg={"black"}
        // height={"10rem"}
        // width={"10rem"}

        dp={"grid"}
        gridC={"40% 60%"}
      >
        <Card bd={"0px solid pink"}>
          <Card fs={"2rem"} pd={"5rem 0 0 1rem"} cl={"white"}>
            TV
            <br />
            Shop
            <Button
              fs={"1rem"}
              cl={"white"}
              pd={"0.3rem 0.5rem"}
              br={"2rem"}
              bg={"black"}
              bd={"1px solid white"}
            >
              Shop By Category
            </Button>
          </Card>
        </Card>
        <center>
          <Card bd={"0px solid green"} height={"17rem"} width={"17rem"}>
            <Carousel controls={false} interval={1000}>
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
          </Card>
        </center>
      </Card>
      <Card bg={"#F5F5F5"} br={"1rem"} bd={"0px solid yellow"}>
        <Card
          dp={"grid"}
          // bd={"1px solid red"}
          // gridC={"10% 20%  10% 20%  10% 20%"}
          gridC={"3rem 6rem 3rem 6rem 3rem 6rem"}
          gridjc={"space-between"}
          height={"2.5rem"}
          mg={"1.75rem 2rem 0 2rem"}
        >
          <Card
            height={"2rem"}
            width={"2rem"}
            ps={"relative"}
            // bd={"1px solid red"}

            mg={"auto"}
          >
            <Image layout={"fill"} objectFit={"contain"} src={truck} />
          </Card>
          <Card bdrt={"2px solid grey"}>
            <Card fs={"0.7rem"}>
              <b>Free Shipping </b>
            </Card>
            <Card mg={"0.2rem 0 0 0"} fs={"0.6rem"}>
              On all Shopping
            </Card>
          </Card>

          <Card
            height={"2rem"}
            width={"2rem"}
            ps={"relative"}
            // bd={"1px solid red"}
            mg={"auto"}
          >
            <Image layout={"fill"} objectFit={"contain"} src={phone} />
          </Card>
          <Card bdrt={"2px solid grey"}>
            <Card fs={"0.7rem"}>
              <b>Online Support </b>
            </Card>
            <Card mg={"0.2rem 0 0 0"} fs={"0.6rem"}>
              Technical 24/7
            </Card>
          </Card>

          <Card
            height={"2rem"}
            width={"2rem"}
            ps={"relative"}
            // bd={"1px solid red"}
            mg={"auto"}
          >
            <Image layout={"fill"} objectFit={"contain"} src={piggy} />
          </Card>
          <Card>
            <Card fs={"0.7rem"}>
              <b>Big Saving </b>
            </Card>
            <Card mg={"0.2rem 0 0 0"} fs={"0.6rem"}>
              Weekend Sales
            </Card>
          </Card>
        </Card>
      </Card>
    </Card>
  );
};

export default AdvertCarousel;
