import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowHeader from "./artist_show_header";
// import { fetchArtist } from '../../../actions/artist_actions';
import { addToCollection, removeFromCollection } from "../../../actions/collection_actions";
import { fetchCollection } from '../../../actions/collection_actions';
 
const msp = state => {
    let collection = Object.values(state.collection);
    return ({
        currentUserId: state.session.currentUserId,
        collection: collection,
    })
}

const mdp = dispatch => {
    return ({
        // fetchArtist: id => dispatch(fetchArtist(id)),
        // saveToCollection: (currentUserId, artistId, type) => console.log(currentUserId, artistId, type),
        addToCollection: (currentUserId, artistId, type) => dispatch(addToCollection(currentUserId, artistId, type)),
        fetchCollection: () => dispatch(fetchCollection()),
        removeFromCollection: (currentUserId, artistId, type) => dispatch(removeFromCollection(currentUserId, artistId, type)),
        
    })
}

export default withRouter(connect(msp, mdp)(ArtistShowHeader));
