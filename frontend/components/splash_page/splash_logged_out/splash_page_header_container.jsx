import { connect } from "react-redux";
import SplashPageHeader from "./splash_page_header";
import { logout } from "../../../actions/session_actions";


const msp = state => {
    // debugger
    return {
        loggedIn: Boolean(state.session.currentUserId)
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(SplashPageHeader);