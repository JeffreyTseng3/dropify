import merge from 'lodash/merge';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let albums;
    switch(action.type) {
        case RECEIVE_ALBUMS:
            return merge({}, state, action.albums);
        case RECEIVE_ALBUM:
            let album = action.payload.album;
            return merge({}, state, {[album.id]: album})
        case RECEIVE_ARTIST: 
            albums = action.payload.albums;
            return merge({}, state, albums);
        case RECEIVE_PLAYLIST: 
            albums = action.payload.albums;
            return merge({}, state, albums);
        default:
            return state;
    }
}
export default albumsReducer;