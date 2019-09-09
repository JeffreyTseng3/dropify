import React from "react";
import MainPage from "./main_page";
import { connect } from "react-redux";
import { logout }from "../../../actions/session_actions";
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { withRouter } from "react-router"
import { fetchUser } from '../../../actions/user_actions';
import { fetchSongs } from '../../../actions/song_actions';
const msp = (state, ownProps) => {
    return ({
        modal: state.ui.modal,
        currentUserId: state.session.currentUserId,
    });
};

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        // fetchPlaylists: () => dispatch(fetchPlaylists()),   
        fetchUser: id => dispatch(fetchUser(id)),
       
    });
};

export default withRouter(connect(msp, mdp)(MainPage));