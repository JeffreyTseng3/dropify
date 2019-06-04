import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import BrowseArea from "./browse_area";
import { fetchArtists } from '../../../../actions/artist_actions';

const msp = state => {
    let four_artists = state.entities.artists.displayArtists ? 
        state.entities.artists.displayArtists.slice(0,4) : null;
    return ({
        four_artists: four_artists,
    })
}

const mdp = dispatch => {
    return ({
        // fetchAlbums: () => dispatch(fetchAlbums),
        fetchArtists: () => dispatch(fetchArtists()),
    })
}


export default withRouter(connect(msp, mdp)(BrowseArea));