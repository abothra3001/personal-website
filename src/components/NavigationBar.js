import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
    background-color: black;
  }

  .navbar-brand, .navbar-nav .nav-link{
    color #bbb;

    &hover {
      color: white;
    }
  }
  `;

export const NavigationBar = () => (
  <Styles>
  <Navbar expand = "lg">
  <Navbar.Brand href = "/"> //make yoself a logo or smth
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Item><Nav.Link href = "/">Home</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href = "/fullCV">Full CV</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href = "/music">Music</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href = "/contactme">Contact Me</Nav.Link></Nav.Item>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  </Styles>
)
