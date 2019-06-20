export const createPlaylistSong = (songId, playlist_id) => {
    return $.ajax({
        method: 'POST',
        url: '/api/playlistSongs',
        data: { songId, playlist_id }
    })
}