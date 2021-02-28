import React, { Component, useState } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import AddRxComponent from './AddRxComponent';
// import './RxListComponent'
import RxList from './data';


  class WelcomeComponent extends Component {
    render(){
      return (
        <>
        <h1>Welcome!</h1>
          <div className = "welcome-container">
          Welcome {this.props.match.params.name}. You can manage your prescriptions <Link to = "/rxlist">here</Link>
          <AddRxComponent />
           {/* import <AddRxComponent /> */}
          </div>
        </>
        
      );
    }
  }

  export default WelcomeComponent;

