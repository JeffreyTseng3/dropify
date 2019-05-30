import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashPageHeader from "./splash_page/splash_page_header";
import LoginFormContainer from "./splash_page/login_form_container";
import SignupFormContainer from "./splash_page/signup_form_container";
import MainPageContainer from "./main/main_page_container";

const App = () => {
    return (
    <>
        <Route exact path="/" component={SplashPageHeader}/>
        <Route path="/login" component={LoginFormContainer} />
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <Route path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/main" component={MainPageContainer} />

    </>
    )
}

export default App;