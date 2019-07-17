import * as PlaylistSongsAPIUtil from "../util/playlist_song_api_util";
import { closeModal } from './modal_actions';
import { receivePlaylist } from "./playlist_actions";

export const addToPlaylist = (playlistSongRelation) => dispatch => {

    
    return PlaylistSongsAPIUtil.createPlaylistSong(playlistSongRelation);
}

export const deletePlaylistSong = (playlistSongRelation) => dispatch => {
   
    return PlaylistSongsAPIUtil.deletePlaylistSong(playlistSongRelation).then(payload => {
        return dispatch(receivePlaylist(payload));
    });
}