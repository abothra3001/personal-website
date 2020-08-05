import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Link, HashRouter as Router} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sunflower from '../assets/sunflower.png'
import styled from 'styled-components';
import '../mycssfile.css';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Styles = styled.div`
  .navbar{
    background-color: black;
  }

  .navbar-brand, .navbar-nav .nav-link{
    color #bbb;

    &hover {
      color: white;
    }

  `;

export const NavigationBar = () => (
  <Styles>
  <Navbar expand = "lg">
  <Navbar.Brand></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav">
  <span>
      <FontAwesomeIcon
        icon={faBars} color="gray" size="1x"
      />
  </span>
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav" >

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
