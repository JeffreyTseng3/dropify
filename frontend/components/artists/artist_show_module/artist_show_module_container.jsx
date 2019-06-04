import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowModule from "./artist_show_module";
import { fetchArtist } from "../../../actions/artist_actions";

const msp = state => {
    let artist = Object.values(state.entities.artists)[0];
    let songs = Object.values(state.entities.songs);
    return ({
        artist: artist,
        songs: songs,
    })
}

const mdp = dispatch => {
    return ({
        fetchArtist: id => dispatch(fetchArtist(id)),
    })
}

export default withRouter(connect(msp, mdp)(ArtistShowModule));