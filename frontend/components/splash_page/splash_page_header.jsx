import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRote } from "../../util/route_util";
import { Link } from 'react-router-dom';

const SplashPageHeader = () => {
    return (
        <>  
            <span>DROPIFY</span>
            <Link className="login-btn" to="/login">Log In</Link>
            <Link className="signup-btn" to="/signup">Sign Up</Link>
           
        </>
    );
};

export default SplashPageHeader;