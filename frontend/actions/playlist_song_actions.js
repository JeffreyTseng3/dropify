import * as PlaylistSongsAPIUtil from "../util/playlist_song_util";


export const addToPlaylist = (songId, playlist_id) => dispatch => {
    // console.log(songId, playlist_id);
    
    return PlaylistSongsAPIUtil.createPlaylistSong(songId, playlist_id);
}