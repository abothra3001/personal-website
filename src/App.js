import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'
import { Home } from './Home';
import { Music } from './Music';
import { FullCV } from './FullCV';
import {ContactMe} from './ContactMe';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Container } from 'react-bootstrap';
import './mycssfile.css';
import { Helmet } from 'react-helmet'


class App extends Component {
  render() {
    return (
      <>
      <div>
    <Helmet>
      <title> Anjali Bothra </title>
    </Helmet>
  </div>
      <NavigationBar/>
      <Jumbotron/>
      <Container fluid className = "container">

      <Router basename = "personal-website">
              <Switch>
              <Route exact path="/" component={(Home)}/>
              <Route exact path="/fullCV" component={(FullCV)}/>
              <Route exact path="/music" component={Music}/>
              <Route exact path="/contactme" component ={(ContactMe)}/>
              <Route component={(NoMatch)}/>
              </Switch>
            </Router>

      </Container>
      </>
    );
  }
}

export default App;
