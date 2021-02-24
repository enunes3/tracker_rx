import React, { Component } from 'react'
import AuthenticationService from "./AuthenticationService";
import { Route, Redirect } from "react-router-dom";


/*  
if the app is passing to the AuthenticatedRoute different parameters, we need to exactly pass the same parameters out to the right, instead of individually defining both properties. take all the properties and spread them out.
Else, redirect user
*/
class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRoute;