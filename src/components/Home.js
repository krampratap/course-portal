import React, { useEffect } from "react";
import { Jumbotron, Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Course React App";
  }, []);
  return (
    //JumbroTron is not found in reactstrap
    <div className="text-center" style={{ background: "grey" }}>
      <h1 className="display-3 text-center" style={{ position: "top-center" }}>
        Learn React
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
        quae corrupti rem architecto, distinctio vel odit officia atque? Est
        dicta ullam, quaerat temporibus sint doloremque aspernatur fugit sequi
        ducimus!
      </p>
      <Container>
        <Button color="primary">Start using</Button>
      </Container>
    </div>
  );
};

export default Home;
