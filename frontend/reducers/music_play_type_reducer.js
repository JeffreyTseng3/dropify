import merge from 'lodash/merge';
import { SET_MUSIC_PLAY_TYPE } from "../actions/queue_actions";

const musicPlayTypeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_MUSIC_PLAY_TYPE:
            return action.musicPlayType;
        default:
            return state;
    }
}

export default musicPlayTypeReducer;
