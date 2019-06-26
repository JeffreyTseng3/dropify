export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
import * as PlaylistAPIUtil from "../util/playlist_api_util";
import { log } from "util";


export const receivePlaylist = payload => {
    return{
        type: RECEIVE_PLAYLIST,
        payload
    };
};

export const receivePlaylists = playlists => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists: playlists
    };
};


export const createPlaylist = (playlist) => dispatch => {

    return PlaylistAPIUtil.createPlaylist(playlist)
        .then(payload => {
    
            // history.push(`/main/playlist/${payload.playlist.id}`);
            dispatch(receivePlaylist(payload));
        });
};

// IDENTIFIES FROM AUTHOR_ID, to show all the author's playlists, consider getting all playlists and filter out frontend
export const fetchPlaylists = () => dispatch => {

    return PlaylistAPIUtil.fetchPlaylists()
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

