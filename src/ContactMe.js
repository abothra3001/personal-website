import React from 'react';
import { Row, Col } from 'react-bootstrap';
import linkedIn from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import instagram from './assets/instagram.png';
import youtube from './assets/youtube.jpg';
import me from './assets/casualpic.jpg';

export const ContactMe = () => (
  <div>
    <Row>
    <Col>
    <Row>
    <Col>
    <div className = 'padding50'>
    <div className = "align-center">
    <h> For professional inquiries please reach out: </h>
    </div>
    </div>
    </Col>
    <Col>
    <div className = 'padding50'>
    <div className = "align-center">
    <h> Check out my Youtube and Instagram for music: </h>
    </div>
    </div>
    </Col>


    </Row>

    <Row>
    <Col>
    <div className = 'padding20'></div>
    <div className = "align-center">
      <a href = 'https://www.linkedin.com/in/anjali-bothra-01775611b/'>
        <img src = {linkedIn} width = "50%" />
      </a>
    </div>
    </Col>
    <Col>
    <div className = 'padding20'></div>
    <div className = "align-center">
      <a href = 'https://www.youtube.com/channel/UChtn8_bBEFuKxwWAj2quErg?view_as=subscriber'>
        <img src = {youtube} width = "50%" />
      </a>
    </div>
    </Col>
    </Row>

    <Row>
    <Col>
      <div className = 'padding50'>
      <div className = "align-center">
      <a href = 'mailto:abothra3001@gmail.com'>
      <img src = {gmail} height = {20} className = 'lposition' /> <h7 className = 'lposition'> abothra3001@gmail.com </h7>
      </a>
      </div>
      </div>
      </Col>
      <Col>
      <div className = 'padding50'>
      <div className = "align-center">
      <a href = 'https://www.instagram.com/anjali_bunjali/'>
        <img src = {instagram} height = {27} className = 'lposition' />
        <h7 className = 'lposition'> jellibelli_sings </h7>
        </a>
        </div>
        </div>
      </Col>
      </Row>
    </Col>

     <div className = "headshot1pic">
      <Col>
      <img src = {me} height = {380} />
      </Col>
      </div>



  </Row>
  </div>
)
