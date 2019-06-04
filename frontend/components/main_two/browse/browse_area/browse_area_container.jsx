import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import BrowseArea from "./browse_area";
import { fetchArtists } from '../../../../actions/artist_actions';

const msp = state => {
    let artists =  Object.values(state.entities.artists)

    return ({
        artists: artists,
    })
}

const mdp = dispatch => {
    return ({
        // fetchAlbums: () => dispatch(fetchAlbums),
        fetchArtists: () => dispatch(fetchArtists()),
    })
}


export default withRouter(connect(msp, mdp)(BrowseArea));