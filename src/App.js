import React, { Component } from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './bootstrap.css'

import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'

import LoginComponent from './components/LoginComponent'
import LogoutComponent from './components/LogoutComponent'
// import AboutComponent from './components/AboutComponent'
import WelcomeComponent from './components/WelcomeComponent'
import RxListComponent from './components/RxListComponent'
import ErrorComponent from './components/ErrorComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'



class App extends Component {
  render(){
    return (
      <div className = "App">

        <Router>
          <HeaderComponent />
            <Switch>
              <Route path = "/" exact component = {LoginComponent} />
              <Route path = "/login" component = {LoginComponent} />
              <AuthenticatedRoute path = "/welcome/:name" component = {WelcomeComponent} />
              <AuthenticatedRoute path = "/rxlist" component = {RxListComponent} />
              <AuthenticatedRoute path = "/logout" component = {LogoutComponent} />
              {/* <Route path = "/about" component = {AboutComponent} /> */}
              <Route component = {ErrorComponent} />
            </Switch>
          <FooterComponent />
        </Router>

      </div>
    );
  }
}



export default App;
