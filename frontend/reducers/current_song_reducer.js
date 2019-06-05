import merge from 'lodash/merge';
import { RECEIVE_CURRENT_SONG } from '../actions/song_actions';

const currentSongReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_SONG: 
            let song = action.song;
            return merge({}, state, {id: song.id})
        default:
            return state;
    }
}

export default currentSongReducer;