import React from "react";
import { Card } from "../../UI/Card.styled";
import cloveLogo from "../../../IMAGES/ICONS/cloveLogo.svg";
import { ImageCard } from "../../../components/UI/ImageCard.styled";
import messageIcon from "../../../IMAGES/Icons/messageIcon.svg";
import dialerIcon from "../../../IMAGES/ICONS/dialerIcon.svg";
import { CardSpan } from "../../UI/CardSpan.styled";
import Image from "next/image";
const SectionOne = () => {
  return (
    <>
      <Card
        // bd={"1px solid white"}
        dp={"grid"}
        bg={"black"}
        // gridC={"15% 25% 25% 10% 13% 0%"}
        // gridC={"7rem 15rem  10rem 10rem"}
        gridC={"auto auto auto auto auto auto auto auto"}
        // gridcgap={"1rem"}
        // gridjc={"space-between"}
        br={"0 0 1.5rem 1.5rem"}
      >
        {/* ----------------LOGO--------------------- */}
        <Card width={"8rem"} bd={"0px solid yellow"}>
          <center>
            <Card
              ps={"relative"}
              pstp={"0.4rem"}
              height={"2.5rem"}
              width={"8rem"}
              //   bd={"1px solid red"}
            >
              <Image layout="fill" objectFit="contain" src={cloveLogo} />
            </Card>
          </center>
        </Card>
        {/* ---------------------NAV ITEMS--------- */}
        <Card
          // bd={"1px solid yellow"}
          dp={"grid"}
          width={"20rem"}
          gridC={"auto auto auto auto auto"}
          cl={"white"}
          pd={"1.2rem 0 0 0"}
          fs={"0.8rem"}
          ps={"relative"}
          // pslf={"-1rem"}
          // mg={"0 0 0 -1rem"}
        >
          <Card>Home</Card>
          <Card>About</Card>
          <Card>Contact</Card>
          <Card>Shop</Card>
          <Card>Blog</Card>
        </Card>
        <Card bd={"0px solid yellow"}></Card>
        <Card bd={"0px solid yellow"}></Card>
        <Card bd={"0px solid yellow"}></Card>
        <Card bd={"0px solid yellow"}></Card>
        <Card bd={"0px solid yellow"}></Card>
        <Card
          // bd={"1px solid yellow"}
          dp={"grid"}
          width={"20rem"}
          // mg={"0 0 0 10rem"}
          // width={"8rem"}
          gridC={"10% 35% 10% 10% 35%"}
          // pd={"0 0 0 4rem"}
        >
          <Card
            // dp={"inline"}
            ps={"relative"}
            height={"1rem"}
            mg={"1.2rem 0 0 0"}
            width={"1rem"}
            // bg={"red"}
          >
            <Image src={messageIcon} layout="fill" objectFit="contain" />
          </Card>
          <CardSpan
            mg={"1.2rem 0 0 0"}
            fs={"0.8rem"}
            dp={"inline"}
            cl={"white"}
          >
            Clovestorepro
          </CardSpan>
          <Card mg={"1rem 0 0 0"} cl={"white"}>
            |
          </Card>

          <Card
            // dp={"inline"}
            ps={"relative"}
            height={"1rem"}
            mg={"1.2rem 0 0 0"}
            width={"1rem"}
            // bg={"red"}
          >
            <Image src={dialerIcon} layout="fill" objectFit="contain" />
          </Card>
          <CardSpan
            mg={"1.2rem 0 0 0"}
            fs={"0.8rem"}
            dp={"inline"}
            cl={"white"}
          >
            234 768 445 222
          </CardSpan>
        </Card>
      </Card>
    </>
  );
};

export default SectionOne;
