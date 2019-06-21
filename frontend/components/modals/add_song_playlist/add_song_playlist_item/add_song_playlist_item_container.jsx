import React from "react";
import { connect } from "react-redux";
import AddSongPlaylistItem from './add_song_playlist_item';
import { withRouter } from "react-router";
import { addToPlaylist } from "../../../../actions/playlist_song_actions";
const msp = state => {
    return {
        modal: state.ui.modal,
    }
}

const mdp = dispatch => {
    return {
        addToPlaylist: (playlistSongRelation) => dispatch(addToPlaylist(playlistSongRelation)),
    }
}

export default withRouter(connect(msp, mdp)(AddSongPlaylistItem));

