import React from "react";
import { Item } from "semantic-ui-react";
import { Card } from "../UI/Card.styled";
const OrderSummary = ({ item }) => {
  return (
    <Card mg="1rem 0" dp="grid" gridC="80% 20%">
      <Card cl={item.color ? item.color : null}>{item.name}</Card>
      <Card>{item.price}</Card>
    </Card>
  );
};

export default OrderSummary;
