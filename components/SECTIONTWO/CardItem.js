import React from "react";
import { Card } from "../UI/Card.styled";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Button } from "../../components/UI/Button.styled";
import Image from "next/image";

const CardItem = ({ item }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section>
      <Card
        dp={"grid"}
        gridC={"50% 50%"}
        height={"100%"}
        pd={"1.4rem 1rem 1rem 1rem"}
        width={"100%"}
        bg={item.color}
        br={"1rem"}
        onMouseEnter={handleClickOpen}
        onMouseLeave={handleClose}

        //   bd={"1px solid red"}
      >
        <Card cl={"white"} bd={"0px solid red"}>
          <Card>Apple</Card>
          <Card>New Product</Card>
          <Button
            fs={"0.8rem"}
            cl={"white"}
            pd={"0.1rem 1rem"}
            bg={"transparent"}
            bd={"1px solid white"}
            br={"1rem"}
          >
            Shop
          </Button>
        </Card>
        <Card ps={"relative"} bd={"0px solid red"}>
          <Image layout={"fill"} objectFit={"contain"} src={item.image} />
        </Card>
        {/* <Card
        hvbdft={"blur(1px)"}
        zindex={"1000"}
        // bg={" rgba(255, 255, 255, 0.5)"}
        ps={"absolute"}
        width={"100%"}
        height={"100%"}
        tr={"1s"}
      >
        b
      </Card> */}
        {/* <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      ></Dialog> */}
      </Card>
    </section>
  );
};

export default CardItem;
