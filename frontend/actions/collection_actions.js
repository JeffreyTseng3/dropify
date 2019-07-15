import * as CollectionAPIUtil from "../util/collection_api_util"; 

export const addToCollection = (currentUserId, artistId, type) => dispatch => {
    let data = {
        user_id: currentUserId, 
        followable_id: artistId, 
        followable_type: type
    }
    console.log(data);
}