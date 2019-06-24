import merge from 'lodash/merge';
import { RECEIVE_SEARCH } from '../actions/search_actions';

const searchHistoryReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {

        default:
            return state;
    }
}

export default searchHistoryReducer;