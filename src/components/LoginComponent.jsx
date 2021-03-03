import React, { Component } from 'react';
import AuthenticationService from '../AuthenticationService';

class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "admin",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    }
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  //whenever the value changes, it updates the state
  //creating object and username as a specific value
  handleChange(event){
    //console.log(this.state);
    this.setState(
      {
        [event.target.name]
          :event.target.value
      }
    )
  }
// //whenever the password value changes, it updates the state
//   handlePasswordChange(event){
//     console.log(event.target.value);
//     this.setState({password:event.target.value})
//   }

loginClicked(){
  //username: admin && password: 123
  if (this.state.username === "admin" && this.state.password === "123"){
    AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password); 
    // console.log("Successful")
    this.props.history.push(`/welcome`)
    // this.props.history.push(`/welcome/${this.state.username}`)
    // this.setState({showSuccessMessage: true})
    // this.setState({hasLoginFailed: false})
  } 
    else {
      console.log("Failed")
      this.setState({showSuccessMessage: false})
      this.setState({hasLoginFailed: true})
    }
  //console.log(this.state);
}

  render() {
     return (
       <div>
         <br></br>
         <h1>Login</h1>
        <div className = "container">
        </div>
        
         {/* if condition true, show what's in the <div /> */}
         {this.state.hasLoginFailed && <div className = "alert alert-warning">Invalid Login</div>} 
         
         {this.state.showSuccessMessage && <div>Login Successful</div>}

          Username: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
          Password: <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
          <button className = "btn btn-success" onClick = {this.loginClicked}>Login</button> 
        </div>
     )
  }
}


export default LoginComponent;


 {/* if condition true, show what's in the <div /> 
          <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed} /> 
          <ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage} /> */}


// //don't need these functions because we combined everything on lines 55 & 57
// function ShowInvalidCredentials(props){
//     if (props.hasLoginFailed) {
//       return <div>Invalid Login</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props){
//   if (props.showSuccessMessage) {
//     return <div>Login Successful</div>
//   }
//   return null
// }


