import * as CollectionAPIUtil from "../util/collection_api_util"; 
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';
export const RECEIVE_COLLECTION_ITEM = 'RECEIVE_COLLECTION_ITEM';
export const REMOVE_COLLECTION_ITEM = "REMOVE_COLLECTION_ITEM";

export const receiveCollection = collection => {
    return {
        type: RECEIVE_COLLECTION, 
        collection,
    }
}

export const receiveCollectionItem = item => {
    return {
        type: RECEIVE_COLLECTION_ITEM,
        item,
    }
}

export const removeCollectionItem = id => {
    return {
        type: REMOVE_COLLECTION_ITEM,
        id
    }
}


export const addToCollection = (currentUserId, artistId, type) => dispatch => {
    let data = {
        user_id: currentUserId, 
        followable_id: artistId, 
        followable_type: type
    }
    console.log(data);
    return CollectionAPIUtil.createCollectionItem(data)
    .then(item => {
        dispatch(receiveCollectionItem(item))
    });
}

export const removeFromCollection = ( id ) => dispatch => {

    return CollectionAPIUtil.deleteCollectionItem(id)
        .then(() => { 
            dispatch(removeCollectionItem(id))
    })
    
}

export const fetchCollection = () => dispatch => {
    
   return CollectionAPIUtil.fetchCollection()
   .then(collection => {
       
       dispatch(receiveCollection(collection))
   });
}