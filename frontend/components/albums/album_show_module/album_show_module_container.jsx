import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import AlbumShowModule from './album_show_module';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchArtist } from '../../../actions/artist_actions'; 
import { addToCollection } from "../../../actions/collection_actions";

const msp = state => {
    let artists = Object.values(state.entities.artists);
    let songs = Object.values(state.entities.songs);
    let albums = Object.values(state.entities.albums);
    return ({
        artists: artists,
        songs: songs,
        currentUserId: state.session.currentUserId,
        albums: albums,
    })
}

const mdp = dispatch => {
    return ({
        fetchAlbum: id => dispatch(fetchAlbum(id)),
        fetchArtist: id => dispatch(fetchArtist(id)),
        addToCollection: (currentUserId, albumId, type)=> dispatch(addToCollection(currentUserId, albumId, type))
    })
}


export default withRouter(connect(msp, mdp)(AlbumShowModule));
