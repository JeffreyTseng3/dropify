export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
import * as PlaylistAPIUtil from "../util/playlist_api_util";
import { log } from "util";


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


export const createPlaylist = (playlist, history) => dispatch => {

    return PlaylistAPIUtil.createPlaylist(playlist)
        .then(playlist => {
            // debugger
            history.push(`/main/playlist/${playlist.id}`);
            dispatch(receivePlaylist(playlist));
        });
};

// IDENTIFIES FROM AUTHOR_ID, to show all the author's playlists
export const fetchPlaylists = (author_id) => dispatch => {

    return PlaylistAPIUtil.fetchPlaylists(author_id)
        .then(playlists => {
            dispatch(receivePlaylists(playlists))
        });
}

export const fetchPlaylist = id => dispatch => {
    return PlaylistAPIUtil.fetchPlaylist(id)
        .then(playlist => {
            return dispatch(receivePlaylist(playlist))
        });
}

