import merge from 'lodash/merge';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    let songs;
    switch(action.type) {
        case RECEIVE_ARTIST:
            songs = action.payload.songs; 
            return merge({}, state, songs)
        case RECEIVE_ALBUM: 
            songs = action.payload.songs;
            return merge({}, state, songs)
        default: 
            return state;
    }
}

export default songsReducer;