import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components'
import enactus from '../assets/enactus.jpg';

const Styles = styled.div`

.jumbo {
  background url(${enactus}) no-repeat fixed bottom;
  background-size: cover;
  color: #ccc;
  height: 300px;
  position: relative;
  z-index: -2;
}
.overlay {
  background-color: #000;
  opacity:0.65;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
`;
export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className = "jumbo">
    </Jumbo>
  </Styles>

)