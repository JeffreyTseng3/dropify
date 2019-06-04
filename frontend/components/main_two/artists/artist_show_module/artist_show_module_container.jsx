import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowModule from "./artist_show_module";
import { fetchArtist } from "../../../../actions/artist_actions";

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        fetchArtist: id => dispatch(fetchArtist(id)),
    })
}

export default withRouter(connect(msp, mdp)(ArtistShowModule));