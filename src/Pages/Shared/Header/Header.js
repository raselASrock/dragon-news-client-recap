import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <Navbar className="mb-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/">Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
        <LeftSideNav></LeftSideNav>
    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header;
