import merge from 'lodash/merge';
import { RECEIVE_COLLECTION, RECEIVE_COLLECTION_ITEM, REMOVE_COLLECTION_ITEM } from '../actions/collection_actions';

const CollectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_COLLECTION:
            return merge({}, state, action.collection);
        case RECEIVE_COLLECTION_ITEM: 
            let item = action.item;
            return merge({}, state, {[item.id]: item});
        case REMOVE_COLLECTION_ITEM: 
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
            
        default:
            return state;
    }
}

export default CollectionsReducer;

// artist = action.payload.artist;
// return merge({}, state, { [artist.id]: artist })