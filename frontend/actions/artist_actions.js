export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
import * as ArtistAPIUtil from "../util/artist_api_util"

export const receiveArtists = artists => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const receiveArtist = ({ id, name, about }) => {
    return {
        type: RECEIVE_ARTIST,
        id, 
        name,
        about,
    }
}

export const fetchArtists = () => dispatch => {
    return ArtistAPIUtil.fetchArtists() 
        .then(artists => {
            dispatch(receiveArtists)
        })
}