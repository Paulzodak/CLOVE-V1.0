import React from "react";
import { Card } from "../../UI/Card.styled";
import cloveLogo from "../../../IMAGES/ICONS/cloveLogo.svg";
import { ImageCard } from "../../../components/UI/ImageCard.styled";
import styled from "styled-components";
import messageIcon from "../../../IMAGES/ICONS/messageIcon.svg";
import dialerIcon from "../../../IMAGES/ICONS/dialerIcon.svg";
import { CardSpan } from "../../UI/CardSpan.styled";
import Image from "next/image";
import { Item } from "semantic-ui-react";
// ---------------STYLED COMPONENTS------------------------
const Container = styled.div`
  display: grid;
  /* border: 1px solid red; */
  background: black;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  border-radius: 0 0 1.5rem 1.5rem;
  box-sizing: border-box;
  width: 100vw;
  @media (max-width: 900px) {
    grid-template-columns: 0.5fr 2fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 0.5fr 5fr;
  }
`;
const Clove = styled.div`
  position: relative;
  top: 0.4rem;
  height: 2.5rem;
  width: 8rem;
  @media (max-width: 450px) {
    height: 2rem;
    top: 0.6rem;
    width: 6rem;
  }
`;
const CloveContainer = styled.div`
  width: 100%;
  /* border: 1px solid yellow; */
`;
const Nav = styled.nav`
  display: grid;
  /* border: 1px solid red; */
  width: 20rem;
  grid-template-columns: auto auto auto auto auto;
  color: white;
  padding: 1.2rem 0 0 0;
  font-size: 0.8rem;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;
const NavItem = styled.nav``;
const ContactSection = styled.div`
  display: grid;
  width: 20rem;
  grid-template-columns: 10% 35% 10% 10% 35%;
  @media (max-width: 900px) {
    display: none;
  }
`;
const MessageIconContainer = styled.div`
  position: relative;
  height: 1rem;
  margin: 1.2rem 0 0 0;
  width: 1rem;
`;
const CloveStore = styled.span`
  margin: 1.2rem 0 0 0;
  font-size: 0.8rem;
  color: white;
`;
const Phone = styled.div`
  position: relative;
  height: 1rem;
  width: 1rem;
  margin: 1.2rem 0 0 0;
`;
const PhoneNumber = styled.span`
  margin: 1.2rem 0 0 0;
  font-size: 0.8rem;
  color: white;
`;
const EmptyContainer = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
const SectionOne = () => {
  const navItems = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Contact",
    },
    {
      name: "Shop",
    },
    {
      name: "Blog",
    },
  ];
  return (
    <>
      <Container>
        {/* ----------------LOGO--------------------- */}
        <CloveContainer>
          <center>
            <Clove>
              <Image layout="fill" objectFit="contain" src={cloveLogo} />
            </Clove>
          </center>
        </CloveContainer>
        {/* ---------------------NAV ITEMS--------- */}
        <Nav>
          {navItems.map((item) => {
            return <NavItem>{item.name}</NavItem>;
          })}
        </Nav>
        <EmptyContainer></EmptyContainer>
        <EmptyContainer></EmptyContainer>
        <EmptyContainer></EmptyContainer>
        <EmptyContainer></EmptyContainer>
        <EmptyContainer></EmptyContainer>
        <ContactSection>
          <MessageIconContainer>
            <Image src={messageIcon} layout="fill" objectFit="contain" />
          </MessageIconContainer>
          <CloveStore>Clovestorepro</CloveStore>
          <Card mg={"1rem 0 0 0"} cl={"white"}>
            |
          </Card>

          <Phone>
            <Image src={dialerIcon} layout="fill" objectFit="contain" />
          </Phone>
          <PhoneNumber>234 768 445 222</PhoneNumber>
        </ContactSection>
      </Container>
    </>
  );
};

export default SectionOne;
