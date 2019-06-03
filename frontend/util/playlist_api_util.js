export const createPlaylist = playlist => {
    
    return $.ajax({
        method: "POST",
        url: '/api/playlists',
        data: { playlist }
    })
}

export const fetchPlaylists = (author_id) => {
    
    return $.ajax({
        method: "GET",
        url: '/api/playlists',
        data: { author_id }
    })
}

export const fetchPlaylist = id => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/${id}`
    })
}