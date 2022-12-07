import React from "react";
import Navbar from "../../components/NAVBAR/Navbar";
import { useState, useEffect } from "react";
import SectionOne from "../../components/CATEGORIES/SECTIONONE/SectionOne";
const Categories = () => {
  const [products, setProducts] = useState([]);
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
        quantity: 1,
        total: 0,
      },
      {
        id: 1,
        name: "Sony Android TV",
        src: "https://i.imgur.com/5VmgTnx.jpg",
        category: "Television",
        stars: 4,
        price: 500,
        quantity: 1,
        total: 0,
      },
      {
        id: 2,
        name: "Sony GamePad",
        src: "https://i.imgur.com/115ZlwR.jpg",
        category: "Accesories",
        stars: 2,
        price: 150,
        quantity: 1,
        total: 0,
      },
      {
        id: 3,
        name: "Imac 2021",
        src: "https://i.imgur.com/X34Z246.jpg",
        category: "Laptops & Tablets",
        stars: 4,
        price: 670,
        quantity: 1,
        total: 0,
      },
      {
        id: 4,
        name: "Nikon Drone",
        src: "https://i.imgur.com/XgxoVOU.jpg",
        category: "Accesories",
        stars: 4,
        price: 1200,
        quantity: 1,
        total: 0,
      },
      {
        id: 5,
        name: "Sony Android TV",
        src: "https://i.imgur.com/5VmgTnx.jpg",
        category: "Television",
        stars: 5,
        price: 500,
        quantity: 1,
        total: 0,
      },
      {
        id: 6,
        name: "Vaccum Cleaner",
        src: "https://i.imgur.com/dtTQ9IO.jpg",
        category: "Cars, Motorbikes & Industrial",
        stars: 5,
        price: 200,
        quantity: 1,
        total: 0,
      },
      {
        id: 7,
        name: "Coffee Maker",
        src: "https://i.imgur.com/AdgvmNC.jpg",
        category: "Smart Home",
        stars: 1,
        price: 300,
        quantity: 1,
        total: 0,
      },
      {
        id: 8,
        name: "Canon HD camera",
        src: "https://i.imgur.com/hoPuTXu.jpg",
        category: "Camera,Audio & Videos",
        stars: 3,
        price: 800,
        quantity: 1,
        total: 0,
      },
      {
        id: 9,
        name: "Toaster Oven",
        src: "https://i.imgur.com/xSc9MdD.jpg",
        category: "Smart Home",
        stars: 4,
        price: 150,
        quantity: 1,
        total: 0,
      },
      {
        id: 10,
        name: "Beats Pro Headset",
        src: "https://i.imgur.com/ZhfQqHz.jpg",
        category: "Camera,Audio & Videos",
        stars: 1,
        price: 420,
        quantity: 1,
        total: 0,
      },
      {
        id: 11,
        name: "Dell Inspiron Laptop",
        src: "https://i.imgur.com/cuK9iY9.jpg",
        category: "Laptops & Tablets",
        stars: 2,
        price: 999,
        quantity: 1,
        total: 0,
      },
      {
        id: 12,
        name: "Flying Quadcopter",
        src: "https://i.imgur.com/Sg4xG57.jpg",
        category: "Accesories",
        stars: 5,
        price: 1100,
        quantity: 1,
        total: 0,
      },
      {
        id: 13,
        name: "Techno Cool Fridge",
        src: "https://i.imgur.com/HWVVDYe.jpg",
        category: "Smart Home",
        stars: 3,
        price: 860,
        quantity: 1,
        total: 0,
      },
    ]);
  }, []);
  return (
    <>
      <Navbar />

      <SectionOne products={products} />
    </>
  );
};

export default Categories;
