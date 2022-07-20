// import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Marketplace</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            style={{ width: "500px" }}
            placeholder="Search a product"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu align="start" style={{ minWidth: "370px" }}>
              <span style={{ padding: "10px" }}>Cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header