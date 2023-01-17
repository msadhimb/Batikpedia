import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import Carousel from "../Carousel/Carousel";
import About from "../About/About";
import Comment from "../Comment/Comment";
import CommentUser from "../CommentUser/CommentUser";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

const Navb = () => {
  const url = window.location.pathname;
  console.log(url);
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Nav>
            <div className="dropdown">
              <Nav.Link>
                <i class="fa-solid fa-bars"></i>
              </Nav.Link>
              <div className="dropdown-content">
                <a href="#about">About</a>
                <a href="#gallery">Gallery</a>
                <a href="#comment">Comment</a>
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
      {url === "/admin" ? <Comment /> : <CommentUser />}
      <Footer />
    </React.Fragment>
  );
};

export default Navb;
