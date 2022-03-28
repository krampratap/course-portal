import React, { useEffect } from "react";
import { toast } from "react-toastify";
import baseurl from "./../api/bootapi";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = ({ course, deleteC }) => {
  useEffect(() => {
    document.title = "Course || reactJS";
  }, []);

  const deleteCourse = (id) => {
    axios.delete(`${baseurl}/deleteCourse/${id}`).then(
      (response) => {
        toast.success("Course deleted");
        deleteC(id);
      },
      (error) => {
        toast.error("Error");
      }
    );
  };

  const updateCourse = (id) => {
    console.log(id);
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText> {course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            {" "}
            Delete{" "}
          </Button>
          <Link to="/update-course" className="btn btn-warning">
            Update
          </Link>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
