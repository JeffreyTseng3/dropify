export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
import * as PlaylistAPIUtil from "../util/playlist_api_util";


export const receivePlaylist = ({id, title, author_id }) => {
    return{
        type: RECEIVE_PLAYLIST,
        id,
        title, 
        author_id
    };
};

export const receivePlaylists = (playlists) => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists: playlists
    };
};

export const createPlaylist = (playlist) => dispatch => {

    return PlaylistAPIUtil.createPlaylist(playlist)
        .then(playlist => {
            dispatch(receivePlaylist(playlist))
        });
}

export const fetchPlaylists = (author_id) => dispatch => {
    console.log('fetch from actions', author_id);
    return PlaylistAPIUtil.fetchPlaylists(author_id)
        .then(playlists => {
            dispatch(receivePlaylists(playlists))
        });
}

