export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
import * as PlaylistAPIUtil from "../util/playlist_api_util";


export const receivePlaylist = ({id, title, author_id }) => {
    return{
        type: RECEIVE_PLAYLIST,
        id,
        title, 
        author_id
    };
};

export const createPlaylist = (playlist) => dispatch => {

    return PlaylistAPIUtil.createPlaylist(playlist)
        .then(playlist => {
  
            dispatch(receivePlaylist(playlist))
             }
        )
}

