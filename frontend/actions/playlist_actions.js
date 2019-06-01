export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";

export const receivePlaylist = ({playlist_title, author_id }) => {
    return{
        type: RECEIVE_PLAYLIST,
        playlist_title, 
        author_id
    };
};

export const createPlaylist = (playlist) => dispatch => {
    return dispatch(receivePlaylist(playlist));
}

