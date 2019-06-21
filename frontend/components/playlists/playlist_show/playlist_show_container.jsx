import React from "react";
import PlaylistShow from "./playlist_show"
import { connect } from "react-redux";
import { withRouter } from "react-router"
import { fetchPlaylist, fetchPlaylists } from "../../../actions/playlist_actions";
import { fetchUser } from '../../../actions/user_actions';
// import { log } from "util";
const msp = (state, ownProps) => {
    let playlists = Object.values(state.entities.playlists);
    let currentUserId = state.session.currentUserId;
    let users = Object.values(state.entities.users);
    let songs = Object.values(state.entities.songs);

    return ({
       playlists: playlists,
       currentUserId,
       users,
       songs
    });
};

const mdp = dispatch => {
    return ({
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        fetchUser: id => dispatch(fetchUser(id)),
        // fetchPlaylists: () => dispatch(fetchPlaylists())
    });
};

export default withRouter(connect(msp, mdp)(PlaylistShow));