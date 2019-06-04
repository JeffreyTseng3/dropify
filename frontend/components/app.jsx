import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashPageHeaderContainer from "./splash_page/splash_logged_out/splash_page_header_container";
import LoginFormContainer from "./login/login_form_container";
import SignupFormContainer from "./signup/signup_form_container";
import MainPageContainer from "./main/main_page_module/main_page_container"
import NewPlaylistModalContainer from './modals/new_playlist_modal_container';

const App = () => {
    return (
        <>
            <NewPlaylistModalContainer />
            <Route exact path="/" component={SplashPageHeaderContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <Route path="/main" component={MainPageContainer} />
        </>
    )
}

export default App;