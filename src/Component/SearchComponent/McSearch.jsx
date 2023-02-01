import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "./McSearch.css";

function McSearch() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/McNav">
            <img src="./Logo.jpeg" alt="Logo"/>
          </Navbar.Brand>
        
          <Navbar.Collapse id="basic-navbar-nav" className="Navv">
            <Nav className="me-auto">
              <NavDropdown title="language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Español</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/McEmail" className="menn">
                Sign Up for Email
              </Nav.Link>

              <Nav.Link href="/McCareers" className="menn">
                Careers
              </Nav.Link>

              <Navbar.Brand href="/McSearch">
                <img src="./Search.png" alt="" className="SSS" />
              </Navbar.Brand>
              <Nav.Link href="/McSearch" className="me">
                Search
              </Nav.Link>
              <Navbar.Brand href="#location">
                <img src="./Location.jpeg" alt="" className="LLL" />
              </Navbar.Brand>

              <a
                href="https://www.google.com/maps/place/Codetrain/@5.6439971,
                -0.1565604,17z/data=!3m1!4b1!4m5!3m4!1s0xfdf9b269a8fbdd1:0x1b
                b79c84b5c0e1f2!8m2!3d5.6439971!4d-0.1543717"
                className="ink"
              >
                Change Your Location
              </a>
              <Button href="./Order" variant="warning" className="Butt">
                Order Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className="Navv">
            <Nav className="me-auto">
              <NavDropdown
                className="menu"
                title="Our Menu"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://www.mcdonalds.com/us/en-us/download-app.html" className="men">
                Download App
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                MyMcDonald's Rewards
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Exclusive Deals
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                About Our Food
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Locate
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Gift Cards
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default McSearch;
