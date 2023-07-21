import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.scss";
import {
  MdDirectionsCar,
  MdInfoOutline,
  MdOutlineHeadphones,
  MdOutlineHome,
} from "react-icons/md";

const MenuBar = () => {
  return (
    <div className="menubar">
      <Navbar>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <MdOutlineHome /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/vehicles">
                <MdDirectionsCar /> Vehicles
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <MdInfoOutline /> About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <MdOutlineHeadphones /> Contact
              </Nav.Link>
            </Nav>
            <div>
              <Button variant="primary" as={Link} to="/auth">
                Register
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
