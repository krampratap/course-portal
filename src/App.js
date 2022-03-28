import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateCourse from "./components/UpdateCourse";

// FUNCTION
function App() {
  const btnHandle = () => {
    toast("This is the message  ");
    toast.success("DONE", {
      position: "top-center",
    });
    toast.error("ERROR", {
      position: "bottom-center",
    });
  };
  return (
    // HEADER COMPONENT to show creating of a component
    // <div>
    //   <Header name="Ram" title="First" />
    //   <hr />
    //   <Header name="Uday" title="Second" />
    //   <hr />
    //   <h4> This is my React App</h4>
    //   <hr />
    //   <Header name="Ronaldo" title="Third" />
    // </div>
    // HEADER COMPONENT to show creating of a component

    //BOOTSTRAP Components
    // <div>
    //   <h3>This is Bootstrap Component</h3>
    //   <Button outline color="warning">
    //     FIrst React Button
    //   </Button>
    // </div>
    //BOOTSTRATP Components
    //Toast container

    // <div>
    //   <ToastContainer />
    //   <Button outline color="warning" onClick={btnHandle}>
    //     First React Button
    //   </Button>
    // </div>
    //Toast container

    //HOME component //Course component
    // <div>
    //   <ToastContainer />
    //   <Home />
    //   <Course course={{ title: "Django", description: "Test it is" }} />
    //   <Course course={{ title: "PostGres", description: "Test it is" }} />
    //   <Allcourses />
    //   <AddCourse />
    //   <hr />
    //   <AddCourse />
    // </div>
    //HOME component //Course component
    //Many components
    // <div>
    //   <ToastContainer />
    //   <Container>
    //     <Header />
    //     <Row>
    //       <Col md={4}>
    //         <Menu />
    //       </Col>
    //       <Col md={8}>
    //         <Home />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    //Many components

    //Route components
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route
                  path="/add-course"
                  element={<AddCourse action={"Add"} />}
                  exact
                />
                <Route path="/view-courses" element={<AllCourses />} exact />
                <Route
                  path="/update-course"
                  element={<UpdateCourse action={"Update"} />}
                  exact
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
    //Route Components
  );
}

export default App;
