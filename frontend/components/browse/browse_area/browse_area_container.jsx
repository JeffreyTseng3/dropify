import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import BrowseArea from "./browse_area";
import { fetchArtists } from '../../../actions/artist_actions';
import { fetchAlbums } from "../../../actions/album_actions";

const msp = state => {
    let artists =  Object.values(state.entities.artists)
    let albums = Object.values(state.entities.albums)
    return ({
        artists: artists,
        albums: albums
    })
}

const mdp = dispatch => {
    return ({
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists()),
    })
}


export default withRouter(connect(msp, mdp)(BrowseArea));