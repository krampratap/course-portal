import React, { useState, useEffect } from "react";
import Course from "./Course";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "reactstrap";
import axios from "axios";
import baseurl from "./../api/bootapi";
const AllCourses = () => {
  //useEffect is a hook.. same as componentDidMount and componentDidUpdate in class components

  useEffect(() => {
    document.title = "All Courses || Course React App";
  }, []);
  //If we use [] then the useEffect will only run on MOUNTING of component and not on UPDATION
  //CHECK THE BEHAVIOUR BY REMOVING and running the project

  //function to call server
  const getAllCourses = () => {
    axios.get(`${baseurl}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("Courses Loaded", {
          position: "bottom-center",
        });
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Please try again");
      }
    );
  };

  //calling function

  useEffect(() => {
    getAllCourses();
  }, []);

  //useState is a hook .. it enables state
  const [courses, setCourses] = useState([]);

  const deleteCourse = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <div>
      <Button
        onClick={() => {
          console.log("Click");
          setCourses([
            ...courses,
            { title: "PostGres", description: "this is the beginning" },
          ]);
        }}
      >
        Test
      </Button>
      <h3>All Courses</h3>
      <p>List of Courses</p>
      {courses.length > 0
        ? courses.map((course) => (
            <Course key={course.id} course={course} deleteC={deleteCourse} />
          ))
        : "No course"}
      <p>End</p>
    </div>
  );
};

export default AllCourses;
