import React from "react";
import { Item } from "semantic-ui-react";
import { Card } from "../UI/Card.styled";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

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
    <Card
      dp={"relative"}
      height={"100%"}
      width={"100%"}
      bg={item.color}
      br={"1rem"}
      onMouseEnter={handleClickOpen}
      onMouseLeave={handleClose}
      //   bd={"1px solid red"}
    >
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      ></Dialog>
    </Card>
  );
};

export default CardItem;
