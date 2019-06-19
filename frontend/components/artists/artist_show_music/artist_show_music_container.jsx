import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowMusic from './artist_show_music';

const msp = state => {
    let songs = Object.values(state.entities.songs);
    let albums = Object.values(state.entities.albums);
    return ({
       songs: songs, 
       albums: albums,
    })
}

const mdp = dispatch => {
    return ({
     
    })
}

export default withRouter(connect(msp, mdp)(ArtistShowMusic));
