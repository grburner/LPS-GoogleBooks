import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function Navigation () {
  return (
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Reading List</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Favorites</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
        </Nav>
  </Navbar>
  );
}

export default Navigation;
