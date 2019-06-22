import merge from 'lodash/merge';
import { ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from "../actions/queue_actions";

const queueReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case ADD_TO_QUEUE:
            let songId = action.id;
            let newState = merge([],state).concat([songId]);
            return newState;
        case REMOVE_FROM_QUEUE: {
            let newState = merge([], state);
            newState.shift();
            return newState;
        }
        default:
            return state;
    }
}

export default queueReducer;
