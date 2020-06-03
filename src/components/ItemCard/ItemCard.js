// Import our dependencies
import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import Animation from "../Animation/Animation";
import "./style.css";

// Build a card that will show our products
function ItemCard(props) {
  return (
    <Col lg={6} md={12}>
      <Card className="itemCard">
        <Animation {...props} />
        <Card.Body>
          <Card.Title>
            <h3>{props.name}</h3>
          </Card.Title>
          <Card.Text>
            {props.price.formatted_with_symbol}
            <br />
            <br />
            Quantity: {props.quantity}
          </Card.Text>
          <a href={props.checkout_url.display}>
            <Button variant="primary">Buy Now</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemCard;
