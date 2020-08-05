import React from 'react';
import {Row, Col, Nav, Container} from 'react-bootstrap';
import rutgers from './assets/rutgers.png';
import mca from './assets/mca.png';
import { Link, animateScroll as scroll } from "react-scroll"
import { Jumbotron } from './components/Jumbotron-Enactus';

export const FullCV = () => (


  <div>
    <a href = 'https://drive.google.com/file/d/1_b1_u0Zk0OhHZr0VTCiOp9M4sRcRCV41/view?usp=sharing'>
    <p> Here's a copy of my 1-page resume </p>
    </a>
    <div className = "mobileformatCV">
    <h5> Jump to...</h5>
    </div>
      <div className = "underline">
      <div className = "mobileformatCV">
        <Row>
          <Col>
            <Link to="dest-edu"><h4> Education </h4></Link>
          </Col>
          <Col>
            <Link to="dest-lwe"><h4> Leadership & Work Experience </h4></Link>
          </Col>
          <Col>
            <Link to="dest-projects"><h4> Projects </h4></Link>
          </Col>
          <Col>
            <Link to="dest-extra"><h4> Extracurriculars </h4></Link>
          </Col>
          <Col>
            <Link to="dest-a&a"><h4> Awards & Achievements </h4></Link>
          </Col>
          <Col>
            <Link to="dest-skills"><h4> Skills </h4></Link>
          </Col>
        </Row>
        </div>
        <div className = "padding1">
        </div>

        <div id="dest-edu">
          <h1> Education </h1>
        </div>
      </div>

    <h3> Rutgers Univeristy - New Brunswick </h3>

    <Row>
    <Col sm = {2}>
    <div className = "align-center">
    <div className = "padding50">
    <img src = {rutgers} height = {75} />
    </div>
    </div>
    </Col>
    <Col sm = {8}>
    <p> Honors College, Rutgers Business School </p>
    <p> Double Major in Business Analytics Information Technology & Biomathematics </p>
    <p> Minor in Computer Science </p>
    <p> GPA: 3.868 </p>
    <p> Relevent Courses: Mathematical Theory of Probability, Data Structures, Multivariable Calculus, Intro to Microeconoimcs, Intro to Macroeconomics, Intro to Marketing, Intro to Managment, Genetics </p>
    </Col >
    <Col sm = {2}>
    <div className = "date">Class of 2022</div>
    </Col>
    </Row>

    <h3> Middlesex County Academy for Science Mathematics and Engineering Technologies </h3>

    <Row>
    <Col sm = {2}>
    <div className = "align-center">
    <img src = {mca} height = {75} />
    </div>
    </Col>
    <Col sm = {8}>
    <p> Civil/Mechanical Engineering </p>
    <p> GPA: 4.3167 </p>
    </Col >
    <Col sm = {2}>
    <div className = "date">Class of 2018</div>
    </Col>
    </Row>
    <div className = "padding50">
    </div>

    <div class="jumbotron-enactus jumbotron">
    <div class = "overlay">
    </div>
    </div>

    <div id="dest-lwe">
    <div className = "underline">
      <h1> Leadership & Work Experience </h1>
      </div>
    </div>
    <Row>
    <Col sm = {10}>
    <h3 className = "lposition"> Rutgers Enactus</h3><h5 className = "lposition" ><i> Project Lead for New Beginnings</i></h5>

        <p> - Conducted extensive research on factors related to rates of recidivism, the rate at which ex-offenders return to prison </p>
        <p> - Developed cirriculum centered around professional development, mentorship and mental health target to reducing recidivism rates </p>
        <p> - Secured a $3,000 grant from Menasha Corporation </p>
        <p> - Built connections with local re-entry programs such as Mountainview and Riker's Debate </p>
        <p> - Won an additional $3,000 from Menasha accelerator </p>
        <p> - Developing online platform/mobile application to consolidate all resources for recently released offenders to ease assimilation back into society </p>
    </Col>

    <Col sm ={2}>
      <div className = "date">Fall 2019 to Present </div>
    </Col>
    </Row>
    <Row>
      <Col sm = {10}>
        <div className = "padding1">
          <h5><i>Competition Committee Member</i></h5>
        </div>
        <p> - Edited video for National Competition highlighting Rutgers Enactus' social impact </p>
        <p> - Assissted in creation of Annual Report </p>
      </Col>
        <Col sm ={2}>
          <div className = "date">Spring 2020 </div>
        </Col>
      </Row>
      <Row>
      <Col sm = {10}>
      <div className = "padding1">
      <h5><i>General Member</i></h5>
      </div>
          <p> - Part of the Tech Team for Enactus' National Competition </p>
          </Col>
          <Col sm ={2}>
          <div className = "date">Spring 2019 </div>
          </Col>
        </Row>
        <Row>
          <Col sm = {10}>
            <h3 className = "lposition"> The Driscoll Lab </h3><h5 className = "lposition" ><i>  Research Assisstant </i></h5>
      <p> -	Conduct research on C. elegans in relation to aging and neurodegenerative diseases </p>
      <p> -	Assist with laboratory functions such as making chemical solutions, growing bacteria, feeding worms, and operating robots</p>
      <p> -	Used software to map and identify exophers in worms at different stages of life</p>
          </Col>
        <Col sm ={2}>
          <div className = "date"> Spring 2020 - Present </div>
        </Col>
        </Row>
      <Row>
          <Col sm = {10}>
            <h3 className = "lposition"> Rutgers Univerity </h3><h5 className = "lposition" ><i> Learning Assistant for Calculus II</i></h5>
              <p> -	Facilitate Learning in Calculus II recitations </p>
          </Col>
        <Col sm ={2}>
          <div className = "date"> Fall 2019 - Present </div>
        </Col>
        </Row>
        <Row>
            <Col sm = {10}>
            <h3 className = "lposition"> Environment NJ </h3><h5 className = "lposition" ><i>  Summer Intern </i></h5>
                <p> -	Conducted research on legislative action against single-use plastics across districts in New Jersey </p>
                <p> -	Recruited candidates to encourage local (NJ) support for passing S2267, a ban on polystyrene </p>
                <p> -	Aided in creation of grassroots campaigning materials </p>
            </Col>
          <Col sm ={2}>
            <div className = "date"> Summer 2019 </div>
          </Col>
          </Row>

          <div className = "padding50">
          </div>
          <div class="jumbotron-rsvp jumbotron">
          <div class = "overlay">
          </div>
          </div>


        <div id="dest-projects">
        <div className = "underline">
            <h1> Projects </h1>
            </div>
          </div>

          <Row>
          <Col sm = {10}>
          <h3> Personal Website </h3>
            <p> This! </p>
          </Col>
          <Col sm = {2}><div className = "date"> June 2020 </div> </Col>
          </Row>
          <Row>
          <Col sm = {10}>
	         <h3 className = "lposition"> Big Ten Student Design Challenge  </h3>
           <h5 className = "lposition"><i> Rutgers Finalists</i></h5>
           <p> - Used CAD software to design a collaborative learning space at Rutgers University </p>
           </Col>
           <Col sm = {2}><div className = "date"> 2019 </div> </Col>
           </Row>
           <Row>
           <Col sm = {10}>
           <h3>Senior Capstone Project </h3>
           <p> - Created an automated storage system designed to store and retrieve items. Automated system mimicked mechanisms used by a 3D printer for movement </p>
           </Col>
           <Col sm = {2}><div className = "date"> 2018 </div> </Col>
           </Row>

           <div id="dest-extra">
           <div className = "underline">
             <h1> Extracurriculars </h1>
             </div>
           </div>

           <Row>
           <Col sm ={10}>
           <h3 className = "lposition"> Rutgers Olympic Weightlifting </h3><h5 className = "lposition" ><i>  Incoming Vice President</i></h5> </Col>
           <Col sm ={2}><div className = "date"> Spring 2020 - Present </div></Col>
           </Row>

           <Row>
           <Col sm ={10}>
           <h3 className = "lposition"> Woodbridge Township Ambulance and Rescue Squad </h3><h5 className = "lposition" ><i>  EMT, Crew Chief</i></h5> </Col>
           <Col sm ={2}><div className = "date"> 2017 - Present </div></Col>
           </Row>

           <Row>
           <Col sm ={10}>
           <h3 className = "lposition"> WomenBUILD </h3><h5 className = "lposition" ><i>  Spring Summit Marketing Committee</i></h5> </Col>
           <Col sm ={2}><div className = "date"> Spring 2019 - Present </div></Col>
           </Row>

           <Row>
           <Col sm ={10}>
           <h3 className = "lposition"> Road to Silicon Valley </h3><h5 className = "lposition" ><i>  Inauguaral Cohort Member</i></h5> </Col>
           <Col sm ={2}><div className = "date"> Spring 2020 - Present </div></Col>
           </Row>

           <Row>
           <Col sm ={10}>
           <h3 className = "lposition"> MyPeakScore </h3><h5 className = "lposition" ><i>  SAT Tutor </i></h5> </Col>
           <Col sm ={2}><div className = "date"> 2019 - Present </div></Col>
           </Row>

           <Row>
           <Col sm ={10}>
           <h3 className = "lposition"> Center for Hope Hospice </h3><h5 className = "lposition" ><i>  Music Therapy Volunteer </i></h5> </Col>
           <Col sm ={2}><div className = "date"> 2016 - 2018 </div></Col>
           </Row>

           <div className = "padding50">
           </div>

           <div class="jumbotron-ems jumbotron">
           <div class = "overlay">
           </div>
           </div>

      <div id="dest-a&a">
      <div className = "underline">
      <h1> Awards & Achievements </h1>
      </div>
      </div>

      <Row>
      <Col sm={10}><h5>Dean's List</h5> </Col>
      <Col sm={2}><div className = "date"> 2018 - 2020</div></Col>
      </Row>

      <Row>
      <Col sm={10}><h5>Certified EMT</h5> </Col>
      <Col sm={2}><div className = "date"> 2019 </div></Col>
      </Row>

      <Row>
      <Col sm={10}><h5> 2 Published Sequencees on NCBI</h5> </Col>
      <Col sm={2}><div className = "date"> 2017-2018 </div></Col>
      </Row>

      <div id="dest-skills">
      <div className = "underline">
        <h1> Skills </h1>
      </div>
      </div>
      <h5><b> Programming Languages:</b> Java, Python, JavaScript, HTML, CSS </h5>
      <h5><b> Languages:</b> English, Hindi, Marwari, Spanish </h5>
      <h5><b> Software:</b> React, MATLAB, Autodesk Fusion, Autodesk Inventor, SolidWorks, SketchUp, Microsoft Office</h5>

  </div>
)
