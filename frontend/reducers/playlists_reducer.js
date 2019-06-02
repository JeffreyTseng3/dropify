import merge from 'lodash/merge';

import {  RECEIVE_PLAYLIST } from "../actions/playlist_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_PLAYLIST:
            const playlist = {
                title: action.title,
                author_id: action.author_id
            };
            const newPlaylist = { [action.id]: playlist };
            return merge({}, state, newPlaylist);
        default: 
            return state;
    }
}

export default playlistsReducer;