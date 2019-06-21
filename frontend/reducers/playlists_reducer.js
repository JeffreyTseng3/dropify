import merge from 'lodash/merge';

import {  RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from "../actions/playlist_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PLAYLISTS:
            return merge( {}, state, action.playlists);
        case RECEIVE_PLAYLIST:
            // debugger
            let playlist = action.payload.playlist;
            const newState = merge({}, state, {[playlist.id]: playlist});
            delete newState[`${playlist.id}`];
            newState[playlist.id] = playlist;
            return newState;
        default: 
            return state;
    }
}

export default playlistsReducer;