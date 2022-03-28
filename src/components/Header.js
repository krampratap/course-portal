import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name, title }) {
  return (
    <div style={{ background: "yellow" }}>
      <Card className="my-2 bg-warning">
        <CardBody>
          <h6>{title}</h6>
          <h4>{name}</h4>
          <h3 className="text-center">Welcome to Course Application</h3>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
