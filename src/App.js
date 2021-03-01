import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import AddRxComponent from './components/AddRxComponent';




class App extends Component {
  render(){
    return (
      <div className = "App">

        <Router>
          <HeaderComponent />
            <Switch> {/*localhost:3000/add-prescription <Route path = "/add-prescription" component = {AddRxComponent} /> */}
              <Route path = "/" exact component = {LoginComponent} />
              <Route path = "/login" component = {LoginComponent} />

              {/*CHECK TO SEE IF THIS WORKS */}
              <Route path = "/add-prescription" component= {AddRxComponent} />

              <AuthenticatedRoute path = "/welcome" component = {WelcomeComponent} />
              <AuthenticatedRoute path = "/rxlist" component = {RxListComponent} />
              <AuthenticatedRoute path = "/logout" component = {LogoutComponent} />
              {/* <Route path = "/about" component = {AboutComponent} /> */}
              <Route component = {ErrorComponent} />
              {/* <Route component = {AddRxComponent} /> */}
            </Switch>
          <FooterComponent />
        </Router>

      </div>
    );
  }
}



export default App;
