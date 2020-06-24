import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
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

      <Router>
         <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route path="/fullCV">
             <FullCV />
           </Route>
           <Route path="/music">
             <Music />
           </Route>
           <Route path="/contactme">
             <ContactMe/>
           </Route>
         </Switch>
       </Router>



      </Container>
      </>
    );
  }
}

export default App;
