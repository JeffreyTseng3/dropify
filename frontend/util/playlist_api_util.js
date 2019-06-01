export const createPlaylist = playlist => {
    $.ajax({
        method: "POST",
        url: '/api/playlists',
        data: { playlist }
    })
}
