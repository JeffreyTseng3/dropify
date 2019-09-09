import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowModule from "./artist_show_module";
import { fetchArtist } from "../../../actions/artist_actions";


const msp = state => {
    let artists = Object.values(state.entities.artists);
    let songs = Object.values(state.entities.songs);
    return ({
        artists: artists,
        songs: songs,
    })
}

const mdp = dispatch => {
    return ({
        fetchArtist: id => dispatch(fetchArtist(id)),
        
    })
}

export default withRouter(connect(msp, mdp)(ArtistShowModule));