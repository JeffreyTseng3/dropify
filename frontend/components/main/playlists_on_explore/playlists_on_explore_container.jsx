import React from "react";
import PlaylistsExplore from "./playlists_on_explore";
import { connect } from "react-redux";
import { fetchPlaylists } from '../../../actions/playlist_actions';
import {withRouter} from 'react-router';
const msp = (state, ownProps) => {
    
    return ({
        playlists: state.entities.playlists.allPlaylists,
        currentUserId: state.session.currentUserId,
    });
};

const mdp = dispatch => {
    return ({
        fetchPlaylists: (author_id) => dispatch(fetchPlaylists(author_id)),              
    });
};

export default withRouter(connect(msp, mdp)(PlaylistsExplore));