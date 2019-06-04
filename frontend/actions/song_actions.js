export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
import * as SongAPIUtil from '../util/song_api_util';

export const receiveSongs = songs => {
    return {
        type: RECEIVE_SONGS,
        songs
    }
}

export const receiveSong = song => {
    return {
        type: RECEIVE_SONG,
        song
    }
}