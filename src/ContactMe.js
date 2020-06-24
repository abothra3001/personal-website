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
    <div className = 'padding50'>
    <h> For professional inquiries please reach out: </h>
    </div>
    <div className = 'padding20'></div>
      <a href = 'https://www.linkedin.com/in/anjali-bothra-01775611b/'>
        <img src = {linkedIn} height = {75} />
      </a>


      <div className = 'padding50'>
      <a href = 'mailto:abothra3001@gmail.com'>
      <img src = {gmail} height = {20} className = 'lposition' /> <h5 className = 'lposition'> abothra3001@gmail.com </h5>
      </a>
      </div>

      </Col>
      <Col>
      <div className = 'padding50'>
      <h> Check out my YouTube and Instagram for music: </h>
      </div>
      <div className = 'padding20'></div>
        <a href = 'https://www.youtube.com/channel/UChtn8_bBEFuKxwWAj2quErg?view_as=subscriber'>
          <img src = {youtube} height = {75} />
        </a>


      <div className = 'padding50'>
      <a href = 'https://www.instagram.com/jellibelli_sings/'>
        <img src = {instagram} height = {27} className = 'lposition' />
        <h5 className = 'lposition'> jellibelli_sings </h5>
        </a>
        </div>

      </Col>

      <Col>
      <img src = {me} height = {380} />
      </Col>

      </Row>

  </div>
)
