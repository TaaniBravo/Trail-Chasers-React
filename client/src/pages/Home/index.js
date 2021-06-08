import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container id="home-page-jumbotron">
          <h1>Find your next adventure!</h1>
          <p>
            Trail Chasers is a hiking finder with a unique interface allowing
            you to see what hikes your friends are on.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
