import React, { Component } from 'react';

class AboutComponent extends Component {
    render(){
      return (
        <>
        <h1>About</h1>
        <div className = "container">
            <h3> Welcome to TrackerRx </h3>
            <br></br>
             <p> This app has been designed to be a very simple way for a user to track the medications they are currently taking. Right now it is a work in progress. Currently, a user can enter a medicine with a description. The user can also delete a medication if they have accidentally added something they haven't taken. </p>
             <p>What I would like to this app in the future:
                 <div className ="list">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
             </p>

        </div>
        </>
      );
    }
  }

  export default AboutComponent;