import * as SearchAPIUtil from '../util/search_api_util.js';


export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = payload => {
    return {
        type: RECEIVE_SEARCH,
        payload,
    }
}

export const search = searchInput => dispatch => {

    return SearchAPIUtil.search(searchInput)
        .then(payload => {
            dispatch(receiveSearch(payload))
        });
        
}