import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link, HashRouter as Router} from "react-router-dom";
import sunflower from '../assets/sunflower.png'
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
  


  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
     <Router>
      <Nav.Item><Nav.Link as = {Link} to = "/">Home</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link as = {Link} to = "/fullCV">Full CV</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link as = {Link} to = "/music">Music</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link as = {Link} to = "/contactme">Contact Me</Nav.Link></Nav.Item>
      </Router>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  </Styles>
)
