import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import AuthenticationService from '../AuthenticationService';
import './RxListComponent'

class HeaderComponent extends Component {
    render(){
      const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
      // console.log(isUserLoggedIn);

      return (
          <header>
            <nav className= "navbar navbar-expand-md navbar-dark bg-dark">
                {/* <div><a href = "https://fda.org" className = "navbar-brand">Website?</a></div> */}
                <ul className= "navbar-nav">
                    {isUserLoggedIn && <li><Link className ="nav-link" to = "welcome/admin">Home</Link></li>}
                    <li><Link className = "nav-link" to = "/about">About</Link></li>
                    {isUserLoggedIn && <li><Link className ="nav-link" to = "/rxlist">Prescription List</Link></li>}
                </ul>
                <ul className= "navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn &&<li><Link className = "nav-link" to = "/login">Login</Link></li>}
                    {isUserLoggedIn && <li><Link className = "nav-link" to = "/logout" onClick = {AuthenticationService.logout}>Logout</Link></li>}
                 </ul>
            </nav>
        </header>
      );
    }
  }

  export default withRouter(HeaderComponent);