import OptionsModal from "./options_modal";
import { withRouter } from "react-router"
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { openModal } from '../../../actions/modal_actions';
import { deletePlaylistSong } from '../../../actions/playlist_song_actions';
import { fetchPlaylist, fetchPlaylists } from '../../../actions/playlist_actions';
import { fetchUser } from '../../../actions/user_actions';
import { receiveSongQueue } from '../../../actions/queue_actions';
import { addToCollection, removeFromCollection, fetchCollection } from "../../../actions/collection_actions";

const msp = state => {
    let collection = Object.values(state.collection);

    return {
        modal: state.ui.modal,
        currentUserId: state.session.currentUserId,
        collection: collection,

    }

}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (addPlaylistModal) => dispatch(openModal(addPlaylistModal)),
        deletePlaylistSong: playlistSongRelation => dispatch(deletePlaylistSong(playlistSongRelation)),
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        addToQueue: id => dispatch(receiveSongQueue(id)),
        addToCollection: (currentUserId, songId, type) => dispatch(addToCollection(currentUserId, songId, type)),
        fetchCollection: () => dispatch(fetchCollection()),
        removeFromCollection: (currentUserId, songId, type) => dispatch(removeFromCollection(currentUserId, songId, type)),

    }
}

export default withRouter(connect(msp, mdp)(OptionsModal));
