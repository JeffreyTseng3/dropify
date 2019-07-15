import merge from 'lodash/merge';
import { RECEIVE_COLLECTION } from '../actions/collection_actions';

const CollectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_COLLECTION:
            return merge({}, state, action.collection);
        default:
            return state;
    }
}

export default CollectionsReducer;