import React from 'react';
import headshot from './assets/headshot.jpg';
import headshot2 from './assets/headshot2.jpg';
import { Row, Col, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Link} from 'react-router-dom';




export const Home = () => (
  <div className = "homepage">
    <Row>
      <Col>

        <h6> I'm Anjali, thanks for visiting my personal website! This is the first website I have created, but I'm hoping to expand my horizons in regards to full stack web development.</h6>

        <Router>
         <Nav.Item><Nav.Link as = {Link} to = "/fullCV"><h4> Full C/V and Resume </h4></Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link as = {Link} to = "/music"><h4> Music and Music Videos </h4></Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link as = {Link} to = "/contactme"><h4> Get in Contact with Me </h4></Nav.Link></Nav.Item>
         </Router>

      </Col>
      <div class = "headshot1pic">
       <Col>

      <img src = {headshot} height = {380} />

      </Col>
      </div>
    </Row>

    <div class = "mobileheadshot">
    <Row>
    <div class = "padding20">
    <img src = {headshot} width = "100%"/>
    </div>
    </Row>

    </div>


  </div>

)
