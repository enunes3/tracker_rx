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
          Welcome {this.props.match.params.name}. You can manage your prescriptions <Link to = "/rxlist">here</Link>
          Add new prescription <Link to = "/add-prescription">here</Link>
         
           {/* import <AddRxComponent /> */}
          </div>
        </>
        
      );
    }
  }

  export default WelcomeComponent;

