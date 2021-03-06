import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import playlistsReducer from './playlists_reducer';
import artistsReducer from "./artists_reducer";
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import queueReducer from './queue_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    playlists: playlistsReducer,
    artists: artistsReducer,
    songs: songsReducer,
    albums: albumsReducer,
    
});

export default entitiesReducer;