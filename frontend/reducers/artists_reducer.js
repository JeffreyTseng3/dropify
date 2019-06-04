import merge from 'lodash/merge';
import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from "../actions/artist_actions";

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ARTISTS:
            return merge({}, state, action.artists );
        case RECEIVE_ARTIST: 
            let artist = action.payload.artist;
            return merge({}, state, {[artist.id]: artist})

        default: 
            return state;
    }
}

export default artistsReducer;