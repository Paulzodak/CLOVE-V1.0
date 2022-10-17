import React, { Fragment } from "react";
import { Card } from "../../UI/Card.styled";
import { Button } from "../../UI/Button.styled";
import gamePad from "../../../IMAGES/gamePad.svg";
import Image from "next/image";
import { ImageCard } from "../../UI/ImageCard.styled";
import LinearBar from "./LinearLoad";
const SpecialOffer = () => {
  return (
    <Card width={"18rem"} bd={"0px solid red"}>
      <Card
        bd={"1px solid grey"}
        height={"100%"}
        width={"90%"}
        mg={"0 5%"}
        br={"1rem"}
        pd={"1rem"}
      >
        <Card
          // height={"2rem"}
          // bd={"1px solid red"}
          dp={"grid"}
          gridC={"50% 50% "}
        >
          <Card fs={"0.8rem"}>
            <Card>Special</Card>
            <Card>OFFER</Card>
          </Card>
          <Card>
            <Button
              cl={"white"}
              float={"right"}
              bg={"#1A7AEC"}
              bd={"none"}
              br={"2rem"}
              pd={"0.2rem"}
              fs={"0.8rem"}
            >
              20% OFF
            </Button>
          </Card>
        </Card>
        <Card>
          <Card
            mg={"auto"}
            height={"8rem"}
            width={"8rem"}
            // bd={"1px solid red"}
            pd={"1rem 0 0 0"}
          >
            <Image src={gamePad} />
          </Card>
        </Card>
        <Card mg={"0.5rem"} fs={"0.8rem"} pd={"0rem 1rem"} bd={"0px solid red"}>
          <center> Sony Dualsense Controller + USB 3.0 Cable</center>
        </Card>
        <Card bd={"0px solid red"}>
          <center>
            <del>$130.00</del> <b>$95.00</b>
          </center>
        </Card>
        <Card
          // bd={"1px solid red"}
          mg={" 0.5rem 0"}
          fs={"0.7rem"}
          dp={"grid"}
          gridC={"50% 50%"}
        >
          <Card>
            Available <b>6</b>
          </Card>
          <Card>
            <Card float={"right"}>
              Already Sold <b>18</b>
            </Card>
          </Card>
        </Card>
        <Card mg={"0.5rem 0"} bd={"0px solid red"}>
          <LinearBar value={23} />
        </Card>
        <Card mg={"0.5rem 0"} fs={"0.7rem"} bd={"0px solid red"}>
          <center>Hurry Up Offer Ends in </center>
        </Card>
        <Card
          ta={"center"}
          pd={"0rem 1rem"}
          dp={"grid"}
          gridC={"28% 8% 28% 8% 28%"}
          fs={"0.8rem"}
        >
          <Card>
            <Card
              fw={"700"}
              br={"0.5rem"}
              fs={"1.3rem"}
              pd={"0.5rem"}
              bg={"#F5F5F5"}
            >
              11
            </Card>
            HOURS
          </Card>
          <Card ps={"relative"} pstp={"0.5rem"}>
            :
          </Card>
          <Card>
            <Card
              fw={"700"}
              br={"0.5rem"}
              fs={"1.3rem"}
              pd={"0.5rem"}
              bg={"#F5F5F5"}
            >
              20
            </Card>
            <center> MINS</center>
          </Card>
          <Card ps={"relative"} pstp={"0.5rem"}>
            :
          </Card>
          <Card>
            {" "}
            <Card
              fw={"700"}
              br={"0.5rem"}
              fs={"1.3rem"}
              pd={"0.5rem"}
              bg={"#F5F5F5"}
            >
              55
            </Card>
            SECS
          </Card>
        </Card>
      </Card>
    </Card>
  );
};

export default SpecialOffer;
