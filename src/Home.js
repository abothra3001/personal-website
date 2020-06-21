import React from 'react';
import headshot from './assets/headshot.jpg';
import headshot2 from './assets/headshot2.jpg';
import { Row, Col, Nav } from 'react-bootstrap';
import styled from 'styled-components';



export const Home = () => (
  <div className = "homepage">
    <Row>
      <Col>

        <h6> I'm Anjali, welcome to my personal website! This is the first website I have created, but I'm hoping to expand my horizons in regards to full stack web development.</h6>

        <Nav.Item><Nav.Link href = "/fullCV"><h4> Full C/V and Resume </h4></Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href = "/music"><h4> Music and Music Videos </h4></Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href = "/contactme"><h4> Get in Contact with Me </h4></Nav.Link></Nav.Item>
      </Col>
       <Col>

      <img src = {headshot} height = {380} />

      </Col>
    </Row>

  </div>

)
