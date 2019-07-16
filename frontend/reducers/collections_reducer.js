import merge from 'lodash/merge';
import { RECEIVE_COLLECTION, RECEIVE_COLLECTION_ITEM } from '../actions/collection_actions';

const CollectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_COLLECTION:
            return merge({}, state, action.collection);
        case RECEIVE_COLLECTION_ITEM: 
            let item = action.item;
            return merge({}, state, {[item.id]: item});
        default:
            return state;
    }
}

export default CollectionsReducer;

// artist = action.payload.artist;
// return merge({}, state, { [artist.id]: artist })