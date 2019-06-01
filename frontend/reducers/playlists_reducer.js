import merge from 'lodash/merge';

import {  RECEIVE_PLAYLIST } from "../actions/playlist_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_PLAYLIST:
            const newPlaylist = { [action.playlist.id]: action.playlist };
            return merge({}, state, newPlaylist);
        default: 
            return state;
    }
}

export default playlistsReducer;