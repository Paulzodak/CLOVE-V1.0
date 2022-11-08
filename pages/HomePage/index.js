import React from "react";
import { Card } from "../../components/UI/Card.styled";
import Navbar from "../../components/NAVBAR/Navbar";
import SectionOne from "../../components/SECTIONONE/SectionOne";
import SectionTwo from "../../components/SECTIONTWO/SectionTwo";
import SectionThree from "../../components/SECTIONTHREE/SectionThree";
import SectionFour from "../../components/SECTIONFOUR/SectionFour";
import SectionSix from "../../components/SECTIONSIX/SectionSix";
import { useState, useEffect } from "react";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(true);
  const controlBar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlBar);
    return () => {
      window.removeEventListener("scroll", controlBar);
    };
  }, []);
  // console.log(window.scrollY);
  console.log(show);
  useEffect(() => {
    // axios.get(`${BASEURL}/Products`).then((res) => {
    //   setProducts(res.data);
    // });

    setProducts([
      {
        id: 0,
        name: "Sony 4k TV",
        src: "https://i.imgur.com/5VmgTnx.jpg",
        category: "Television",
        stars: 1,
        price: 550,
      },
      {
        id: 1,
        name: "Sony Android TV",
        src: "https://i.imgur.com/5VmgTnx.jpg",
        category: "Television",
        stars: 4,
        price: 500,
      },
      {
        id: 2,
        name: "Sony GamePad",
        src: "https://i.imgur.com/115ZlwR.jpg",
        category: "Accesories",
        stars: 2,
        price: 150,
      },
      {
        id: 3,
        name: "Imac 2021",
        src: "https://i.imgur.com/X34Z246.jpg",
        category: "Laptops & Tablets",
        stars: 4,
        price: 670,
      },
      {
        id: 4,
        name: "Nikon Drone",
        src: "https://i.imgur.com/XgxoVOU.jpg",
        category: "Accesories",
        stars: 4,
        price: 1200,
      },
      {
        id: 5,
        name: "Sony Android TV",
        src: "https://i.imgur.com/5VmgTnx.jpg",
        category: "Television",
        stars: 5,
        price: 500,
      },
      {
        id: 6,
        name: "Vaccum Cleaner",
        src: "https://i.imgur.com/dtTQ9IO.jpg",
        category: "Cars, Motorbikes & Industrial",
        stars: 5,
        price: 200,
      },
      {
        id: 7,
        name: "Coffee Maker",
        src: "https://i.imgur.com/AdgvmNC.jpg",
        category: "Smart Home",
        stars: 1,
        price: 300,
      },
      {
        id: 8,
        name: "Canon HD camera",
        src: "https://i.imgur.com/hoPuTXu.jpg",
        category: "Camera,Audio & Videos",
        stars: 3,
        price: 800,
      },
      {
        id: 9,
        name: "Toaster Oven",
        src: "https://i.imgur.com/xSc9MdD.jpg",
        category: "Smart Home",
        stars: 4,
        price: 150,
      },
      {
        id: 10,
        name: "Beats Pro Headset",
        src: "https://i.imgur.com/ZhfQqHz.jpg",
        category: "Camera,Audio & Videos",
        stars: 1,
        price: 420,
      },
      {
        id: 11,
        name: "Dell Inspiron Laptop",
        src: "https://i.imgur.com/cuK9iY9.jpg",
        category: "Laptops & Tablets",
        stars: 2,
        price: 999,
      },
      {
        id: 12,
        name: "Flying Quadcopter",
        src: "https://i.imgur.com/Sg4xG57.jpg",
        category: "Accesories",
        stars: 5,
        price: 1100,
      },
      {
        id: 13,
        name: "Techno Cool Fridge",
        src: "https://i.imgur.com/HWVVDYe.jpg",
        category: "Smart Home",
        stars: 3,
        price: 860,
      },
    ]);
  }, []);

  return (
    <>
      <Card font={"'Poppins', sans-serif"} height={"100rem"} width={"100vw"}>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree products={products} />
        <SectionFour products={products} />
        <SectionSix products={products} />
      </Card>
    </>
  );
};

export default Index;
