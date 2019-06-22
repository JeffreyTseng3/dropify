import merge from 'lodash/merge';
import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from "../actions/artist_actions";
import {RECEIVE_ALBUM} from '../actions/album_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    let artist; 
    let artists;
    switch(action.type) {
        case RECEIVE_ARTISTS:
            return merge({}, state, action.artists );
        case RECEIVE_ARTIST: 
            artist = action.payload.artist;
            return merge({}, state, {[artist.id]: artist})
        case RECEIVE_ALBUM: 
            artist = action.payload.artist;
            return merge({}, state, {[artist.id]: artist} )
        case RECEIVE_PLAYLIST: 
 
            artists = action.payload.artists;
            return merge({}, state, artists)
        default: 
            return state;
    }
}

export default artistsReducer;