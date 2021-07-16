import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.scss";

const HikeCard = props => {
  return (
    <Card className='hike_card_container'>
      <Card.Img variant='top' src={props.imgMedium} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.location}</Card.Subtitle>
        <br />
        <Button variant='primary'>More Details</Button>
      </Card.Body>
    </Card>
  );
};

export default HikeCard;
