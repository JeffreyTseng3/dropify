export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
import * as ArtistAPIUtil from "../util/artist_api_util"

export const receiveArtists = artists => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const receiveArtist = payload => {
    return {
        type: RECEIVE_ARTIST,
        payload
    }
}



export const fetchArtists = () => dispatch => {
  
    return ArtistAPIUtil.fetchArtists() 
        .then(artists => {
      
            dispatch(receiveArtists(artists))
        })
}

export const fetchArtist = id => dispatch => {
    return ArtistAPIUtil.fetchArtist(id) 
        // .then(artist => {
        .then(payload => {
            dispatch(receiveArtist(payload))
            // dispatch(receiveArtist(artist))
        })
}