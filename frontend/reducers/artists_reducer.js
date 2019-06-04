import merge from 'lodash/merge';
import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from "../actions/artist_actions";

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ARTISTS: 
        // this is for showing artists on the featured page atm
            let displayArtists = {
                displayArtists: action.artists
            }; 
            return merge({}, state, displayArtists);
        case RECEIVE_ARTIST: 
            let displayArtist = {
                artist: action.artist
            }
            return merge({}, state, displayArtist)

        default: 
            return state;
    }
}

export default artistsReducer;