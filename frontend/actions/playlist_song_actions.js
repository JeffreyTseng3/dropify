import * as PlaylistSongsAPIUtil from "../util/playlist_song_api_util";
import { closeModal } from './modal_actions';
import { receivePlaylist } from "./playlist_actions";

export const addToPlaylist = (playlistSongRelation) => dispatch => {
    // console.log(songId, playlist_id);
    
    return PlaylistSongsAPIUtil.createPlaylistSong(playlistSongRelation);
}

export const deletePlaylistSong = (playlistSongRelation) => dispatch => {
   
    return PlaylistSongsAPIUtil.deletePlaylistSong(playlistSongRelation).then(payload => {
        return dispatch(receivePlaylist(payload));
    });
}