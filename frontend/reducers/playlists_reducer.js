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
            const playlist = {
                id: action.id,
                title: action.title,
                author_id: action.author_id
            };
            // const newPlaylist = { [action.id]: playlist };
            const newPlaylist = { newPlaylist: playlist };
            return merge({}, state, newPlaylist);
        default: 
            return state;
    }
}

export default playlistsReducer;