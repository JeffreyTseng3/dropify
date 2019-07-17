import React from "react";
import PlaylistShow from "./playlist_show"
import { connect } from "react-redux";
import { withRouter } from "react-router"
import { fetchPlaylist, fetchPlaylists } from "../../../actions/playlist_actions";
import { fetchUser, fetchUsers } from '../../../actions/user_actions';

import { receiveMusicPlayType } from "../../../actions/queue_actions";
import { fetchCurrentSong } from '../../../actions/song_actions';
import { addToCollection, removeFromCollection, fetchCollection } from "../../../actions/collection_actions";

// import { log } from "util";
const msp = (state, ownProps) => {
    let playlists = Object.values(state.entities.playlists);
    let currentUserId = state.session.currentUserId;
    let users = Object.values(state.entities.users);
    let songs = Object.values(state.entities.songs);
    let collection = Object.values(state.collection);

    return ({
       playlists: playlists,
       currentUserId,
       users,
       songs,
        collection: collection,

    });
};

const mdp = dispatch => {
    return ({
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        fetchUser: id => dispatch(fetchUser(id)),
        addToCollection: (currentUserId, playlistId, type) => dispatch(addToCollection(currentUserId, playlistId, type)),
        fetchCollection: () => dispatch(fetchCollection()),
        removeFromCollection: (currentUserId, playlistId, type) => dispatch(removeFromCollection(currentUserId, playlistId, type)),
        // fetchPlaylists: () => dispatch(fetchPlaylists())
        setMusicPlayType: musicPlayType => dispatch(receiveMusicPlayType(musicPlayType)),
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
        fetchUsers: () => dispatch(fetchUsers()),
    });
};

export default withRouter(connect(msp, mdp)(PlaylistShow));