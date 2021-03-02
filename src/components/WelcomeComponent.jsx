import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
// import CreateRxComponent from './CreateRxComponent';
// import AddRxComponent from './AddRxComponent';
// import './RxListComponent'
import RxList from './data';


  class WelcomeComponent extends Component {
    render(){
      return (
        <>
        <h1>Welcome!</h1>
          <div className = "welcome-container">
            <div className = "welcome-button">
              
                <Link to = "/rxlist"> Manage Prescriptions</Link>
              
            </div>
            <br></br>
            <div className = "welcome-button">
               <Link to = "/add-prescription">Add new prescription</Link>
            </div>
          </div>
        </>
        
      );
    }
  }

  export default WelcomeComponent;

