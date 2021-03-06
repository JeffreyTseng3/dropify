import React from "react";
import PlaylistsCollection from "./playlists_collection";
import { connect } from "react-redux";
import { fetchPlaylists } from '../../../actions/playlist_actions';
import {withRouter} from 'react-router';
const msp = (state, ownProps) => {
    
    return ({
        playlists: Object.values(state.entities.playlists),
        currentUserId: state.session.currentUserId,
        collection: Object.values(state.collection), 
    });
};

const mdp = dispatch => {
    return ({
        fetchPlaylists: () => dispatch(fetchPlaylists()),              
    });
};

export default withRouter(connect(msp, mdp)(PlaylistsCollection));