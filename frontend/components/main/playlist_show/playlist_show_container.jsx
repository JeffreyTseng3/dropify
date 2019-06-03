import React from "react";
import PlaylistShow from "./playlist_show"
import { connect } from "react-redux";
import { withRouter } from "react-router"
import { fetchPlaylist, fetchPlaylists } from "../../../actions/playlist_actions";

const msp = (state, ownProps) => {
    return ({
        showPlaylist: state.entities.playlists.showSinglePlaylist,
    });
};

const mdp = dispatch => {
    return ({
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        fetchPlaylists: () => dispatch(fetchPlaylists())
    });
};

export default withRouter(connect(msp, mdp)(PlaylistShow));