import { connect } from "react-redux";
import SplashPageHeader from "./splash_page_header";
import { logout } from "../../../actions/session_actions";
import { withRouter } from 'react-router'

const msp = state => {

    return {
        
        loggedIn: Boolean(state.session.currentUserId)
        
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default withRouter(connect(msp, mdp)(SplashPageHeader));