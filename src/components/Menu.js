import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () => {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="/" action>
        Home
      </ListGroupItem>
      <ListGroupItem tag="a" href="/add-course" action>
        Add Course
      </ListGroupItem>
      <ListGroupItem tag="a" href="/view-courses" action>
        View Courses
      </ListGroupItem>
      <ListGroupItem tag="a" href="#!">
        About
      </ListGroupItem>
      <ListGroupItem tag="a" href="#!">
        Contact
      </ListGroupItem>
    </ListGroup>
  );
};

export default Menu;
