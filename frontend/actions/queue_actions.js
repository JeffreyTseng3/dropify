export const ADD_TO_QUEUE = "ADD_TO_QUEUE";
export const REMOVE_FROM_QUEUE = "REMOVE_FROM_QUEUE";
export const SET_MUSIC_PLAY_TYPE = 'SET_MUSIC_PLAY_TYPE';

export const receiveSongQueue = id => {
    return {
        type: ADD_TO_QUEUE,
        id: id,
    }
}

export const removeSongQueue = () => {
    return {
        type: REMOVE_FROM_QUEUE,
    }
}

export const receiveMusicPlayType = (musicPlayType) => {
    return {
        type: SET_MUSIC_PLAY_TYPE, 
        musicPlayType,
    }
}

// export const addToQueue = id => dispatch => {
//     dispatch(receiveQueue(id));
// }