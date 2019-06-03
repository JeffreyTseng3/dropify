import merge from 'lodash/merge';

import {  RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from "../actions/playlist_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PLAYLISTS:
            let allPlaylists = {
                allPlaylists: action.playlists
            }
            return merge( {}, state, allPlaylists);
        case RECEIVE_PLAYLIST:
            debugger
            const playlist = {
                id: action.id,
                title: action.title,
                author_id: action.author_id
            };
            // was previously newPlaylist key to accomodate for new
            // playlist redirect
            // const newPlaylist = { [action.id]: playlist };
            const showSinglePlaylist = { showSinglePlaylist: playlist };
            return merge({}, state, showSinglePlaylist);
        default: 
            return state;
    }
}

export default playlistsReducer;