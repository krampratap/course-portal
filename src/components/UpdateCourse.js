import React, { Fragment, useEffect, useState } from "react";
import { FormGroup, Input, Form, Container, Button } from "reactstrap";
import baseurl from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateCourse = (courseUpdated) => {
  useEffect(() => {
    document.title = "Add Course || reactJS";
  }, []);

  const [course, setcourse] = useState({}); //blank object in useState

  //form handler function - javascript function
  const handleForm = (e) => {
    console.log(course);
    updateDataToServer(course);
    e.preventDefault();
  };

  //function to post data on server
  const updateDataToServer = (data) => {
    axios.put(`${baseurl}/updateCourse`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course updated successfully");
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
            defaultValue={courseUpdated.id}
            name="user id"
            id="userId"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlfor="title">Course title</label>
          <Input
            type="text"
            defaultValue={courseUpdated.title}
            id="title"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlfor="description">Course desctiption</label>
          <Input
            type="textarea"
            defaultValue={courseUpdated.description}
            id="description"
            style={
              //We have to wrtie javascript inside style
              {
                //Javascript object
                height: 150,
              }
            }
          />
        </FormGroup>
        <FormGroup>
          <Container className="text-center">
            <Button type="submit" color="success mr-3">
              Update Course
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

export default UpdateCourse;
