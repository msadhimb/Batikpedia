import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import Carousel from "../Carousel/Carousel";
import About from "../About/About";
import Comment from "../Comment/Comment";
import Gallery from "../Gallery/Gallery";

const Navb = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <div className="dropdown">
              <Nav.Link href="#home">
                <i class="fa-solid fa-bars"></i>
              </Nav.Link>
              <div className="dropdown-content">
                <a href="#home">HISTORY</a>
                <a href="#home">VISION MISSION</a>
              </div>
            </div>
          </Nav>
          <Navbar.Brand href="#home" className="navLogo">
            BatikPedia
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">
              <i class="fa-solid fa-house"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel />
      <About />
      <Gallery />
      <Comment />
    </React.Fragment>
  );
};

export default Navb;
