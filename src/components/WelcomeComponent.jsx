import React, { Component, useState } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
// import './RxListComponent'
import RxList from './data';
import RxListComponent from './RxListComponent'

  class WelcomeComponent extends Component {
    render(){
      return (
        <>
        <h1>Welcome!</h1>
          <div className = "welcome-container">
          Welcome {this.props.match.params.name}. You can manage your prescriptions <Link to = "/rxlist">here</Link>

           {/* import <AddRxComponent /> */}
          </div>
        </>
        
      );
    }
  }

  export default WelcomeComponent;

