import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowHeader from "./artist_show_header";
// import { fetchArtist } from '../../../actions/artist_actions';
import { addToCollection, removeFromCollection } from "../../../actions/collection_actions";
import { fetchCollection } from '../../../actions/collection_actions';
import { receiveMusicPlayType } from "../../../actions/queue_actions";
import { fetchCurrentSong } from '../../../actions/song_actions';


const msp = state => {
    let collection = Object.values(state.collection);
    let currentSong = state.current_song.currentSongId;
    return ({
        currentUserId: state.session.currentUserId,
        collection: collection,
        currentSong: currentSong,
    })
}

const mdp = dispatch => {
    return ({

        addToCollection: (currentUserId, artistId, type) => dispatch(addToCollection(currentUserId, artistId, type)),
        fetchCollection: () => dispatch(fetchCollection()),
        removeFromCollection: (currentUserId, artistId, type) => dispatch(removeFromCollection(currentUserId, artistId, type)),
        setMusicPlayType: musicPlayType => dispatch(receiveMusicPlayType(musicPlayType)),
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
        
    })
}

export default withRouter(connect(msp, mdp)(ArtistShowHeader));
