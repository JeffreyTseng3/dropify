import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowAbout from './artist_show_about';

const msp = state => {
    let artists = Object.values(state.entities.artists);
    return ({
        artists: artists,
    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(ArtistShowAbout));
