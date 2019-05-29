import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import { AuthRote } from "../../util/route_util";
import { Link } from 'react-router-dom';

const SplashPageHeader = () => {
    return (
        <>  <span>DROPIFY</span>
            <Link className="login-btn" to="/login">LOGIN</Link>
            <Link className="signup-btn" to="/signup">SIGNUP</Link>
            <Route path="/login" component={LoginFormContainer}/>
            <Route path="/signup" component={SignupFormContainer}/>
        </>
    );
};

export default SplashPageHeader;