import React from "react";
import { Card } from "../../UI/Card.styled";
import CategoryItem from "./CategoryItem";
import arrow from "../../../IMAGES/ICONS/CATEGORIES ICONS/arrow.svg";
import { CardLink } from "../../UI/Link.styled";

// ICONS IMPORT
import mouse from "../../../IMAGES/ICONS/CATEGORIES ICONS/mouse.svg";
import camera from "../../../IMAGES/ICONS/CATEGORIES ICONS/camera.svg";
import phone from "../../../IMAGES/ICONS/CATEGORIES ICONS/phone.svg";
import laptop from "../../../IMAGES/ICONS/CATEGORIES ICONS/laptop.svg";
import tv from "../../../IMAGES/ICONS/CATEGORIES ICONS/tv.svg";
import home from "../../../IMAGES/ICONS/CATEGORIES ICONS/home.svg";
import watch from "../../../IMAGES/ICONS/CATEGORIES ICONS/watch.svg";
import headphone from "../../../IMAGES/ICONS/CATEGORIES ICONS/headphone.svg";
import glasses from "../../../IMAGES/ICONS/CATEGORIES ICONS/glasses.svg";

const Categories = () => {
  const categories = [
    { id: 0, icon: mouse, category: "Computer & Accesories", arrow: arrow },
    { id: 1, icon: camera, category: "Cameras, Audio & Video", arrow: arrow },
    { id: 2, icon: phone, category: "Smartphone & Gadgets", arrow: arrow },
    { id: 3, icon: laptop, category: "Laptops & Tablets", arrow: arrow },
    { id: 4, icon: tv, category: "TV & Display", arrow: arrow },
    { id: 5, icon: home, category: "Smart Home", arrow: arrow },
    { id: 6, icon: watch, category: "Watches & Eyewear", arrow: arrow },
    { id: 7, icon: headphone, category: "Headphones & Speakers", arrow: arrow },
    {
      id: 8,
      icon: glasses,
      category: "Cars , Automobiles & Industrial",
      arrow: arrow,
    },
    { id: 9, icon: mouse, category: "Accesories", arrow: arrow },
  ];
  // const rendered = categories.map((item)=)
  return (
    <Card
    // dp={"grid"}
    // gridR={"auto auto auto auto auto auto auto auto auto auto"}
    // gridac={"space-evenly"}

    // width={"18rem"}
    // bd={"1px solid red"}
    >
      <Card bd={"0px solid red"}>
        {categories.map((item) => {
          return <CategoryItem key={item.id} item={item} />;
        })}
      </Card>
    </Card>
  );
};

export default Categories;
1;
