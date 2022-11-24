import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import camera from "../IMAGES/camera.svg";
import { Card } from "../components/UI/Card.styled";
import Cart from "../components/CART/Cart";
import { useSelector } from "react-redux";

import Index from "./HomePage";
export default function Home() {
  const { showCart } = useSelector((state) => state.ui);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </Head>
      <Index />
      {showCart ? <Cart /> : <></>}
    </>
  );
}
