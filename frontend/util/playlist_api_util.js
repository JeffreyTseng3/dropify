export const createPlaylist = playlist => {
    
    return $.ajax({
        method: "POST",
        url: '/api/playlists',
        data: { playlist }
    })
}
