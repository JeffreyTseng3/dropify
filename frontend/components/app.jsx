import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashPageHeader from "./splash_page/splash_logged_out/splash_page_header"
import LoginFormContainer from "./splash_page/login/login_form_container";
import SignupFormContainer from "./splash_page/signup/signup_form_container";
import MainPageContainer from "../components/main/main_page_module/main_page_container"

const App = () => {
    return (
    <>
        <Route exact path="/" component={SplashPageHeader}/>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute path="/main" component={MainPageContainer} />

    </>
    )
}

export default App;