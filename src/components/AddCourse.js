import React, { Fragment, useEffect, useState } from "react";
import { FormGroup, Input, Form, Container, Button } from "reactstrap";
import baseurl from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course || Course React App";
  }, []);

  const [course, setcourse] = useState({}); //blank object in useState

  //form handler function - javascript function
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  //function to post data on server
  const postDataToServer = (data) => {
    axios.post(`${baseurl}/addCourse`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course added successfully");
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error ! Something went wrong");
      }
    );
  };

  //Fragmentt used to create big big "parallel"component into fragments
  return (
    <Fragment>
      <h3 className="text-center my-3"> Fill Course details</h3>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlfor="userId"> Course ID</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="user id"
            id="userId"
            onChange={(e) => {
              setcourse({ ...course, id: e.target.value });
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlfor="title">Course title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setcourse({ ...course, title: e.target.value });
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlfor="description">Course desctiption</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={
              //We have to wrtie javascript inside style
              {
                //Javascript object
                height: 150,
              }
            }
            onChange={(e) => {
              setcourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Container className="text-center">
            <Button type="submit" color="success mr-3">
              Add Course
            </Button>
            <Button type="reset" color="warning">
              Clear
            </Button>
          </Container>
        </FormGroup>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
