import merge from 'lodash/merge';

import {  RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from "../actions/playlist_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PLAYLISTS:
            return merge( {}, state, action.playlists);
        case RECEIVE_PLAYLIST:
       debugger
            let playlist = action.playlist;
            return merge({}, state, {[playlist.id]: playlist} );
        default: 
            return state;
    }
}

export default playlistsReducer;