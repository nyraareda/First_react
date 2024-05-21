import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';

export function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={({isActive})=>{return isActive ? "text-success nav-link" : "nav-link"}} to="/">Home</NavLink>
            <NavLink className={({isActive})=>{return isActive ? "text-success nav-link" : "nav-link"}} to="/about">About</NavLink>
            <NavLink className={({isActive})=>{return isActive ? "text-success nav-link" : "nav-link"}} to="/products">Products</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


