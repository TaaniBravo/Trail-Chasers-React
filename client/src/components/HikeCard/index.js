import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.scss";
import { Link } from "react-router-dom";

const HikeCard = hike => {
  return (
    <Card className='hike_card_container'>
      <Card.Img variant='top' src={hike.imgMedium} />
      <Card.Body>
        <Card.Title>{hike.name}</Card.Title>
        <Card.Subtitle>{hike.location}</Card.Subtitle>
        <br />
        <Link to={`/${hike.name}`}>
          <Button variant='primary'>More Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HikeCard;
