import React from "react";
import MainPage from "./main_page";
import { connect } from "react-redux";
import { logout }from "../../../actions/session_actions";


const msp = (state, ownProps) => {
    return ({
        currentUserId: state.session.currentUserId
    });
};

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout())
    });
};

export default connect(msp, mdp)(MainPage);