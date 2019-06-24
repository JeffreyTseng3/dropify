import merge from 'lodash/merge';
import { RECEIVE_SEARCH } from '../actions/search_actions';

const searchResultReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH: 
            return action.payload
        default:
            return state;
    }
}

export default searchResultReducer;