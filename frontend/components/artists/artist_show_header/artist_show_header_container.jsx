import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowHeader from "./artist_show_header";
// import { fetchArtist } from '../../../actions/artist_actions';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        // fetchArtist: id => dispatch(fetchArtist(id)),
        saveToCollection: (artistId, type) => console.log(artistId, type),
    })
}

export default withRouter(connect(msp, mdp)(ArtistShowHeader));
