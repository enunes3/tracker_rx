import React, { Component } from 'react';

class AboutComponent extends Component {
    render(){
      return (
        <>
        <br></br>
        <div className = "container">
            <h3> Welcome to TrackerRx </h3>
            <br></br>
             <h6>This app has been designed to be a very simple way for a user to track their medications. Right now it is a work in progress. Currently, a user can enter a medication including dosage, quantity, and additional notes they might need to remember to tell their physician (ex. the scale of pain (0-10) they were experiencing when they took the medication). The user can also delete a medication if they have accidentally added something they haven't taken. </h6> 
             <div className ="list">
            <p>What I would like to this app in the future:</p> 
                    <ul>
                      <li>An API that already includes the medications so there's less of a change of user error like spelling mistakes: Gapentine 120mg instead of Gabapentin 100mg.</li>
                        <br></br>
                      <li>The ability to send a report of the user's medication list for the week their physician and/or medical provider that manages their medications</li>
                        <br></br>
                      <li>Reminder feature- if the user has forgotten to take their medication that they take daily, weekly, etc., the app would send them a reminder message to their phone/email (if they haven't inputted a that they've taken their medication).</li>
                        
                    </ul>
                </div>
             

        </div>
        </>
      );
    }
  }

  export default AboutComponent;