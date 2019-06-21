export const createPlaylistSong = (playlistSongRelation) => {
    return $.ajax({
        method: 'POST',
        url: '/api/playlist_songs',
        data: { playlistSongRelation }
    })
}

export const deletePlaylistSong = playlistSongRelation => {
    return $.ajax({
        method: "DELETE",
        url: '/api/playlist_songs/remove_song',
        data: { playlistSongRelation }
    })
}