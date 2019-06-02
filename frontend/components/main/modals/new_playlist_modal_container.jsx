import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import { createPlaylist, fetchPlaylists } from "../../../actions/playlist_actions";
import NewPlaylistModal from "./new_playlist_modal";
import { withRouter } from "react-router"

const msp = state => {
    return {
        modal: state.ui.modal,
        currentUserId: state.session.currentUserId,
        playlists: state.entities.playlists
    };
};

const mdp = dispatch => {
    return {
        fetchPlaylists: (author_id) => dispatch(fetchPlaylists(author_id)),
        createPlaylist: new_playlist => dispatch(createPlaylist(new_playlist)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(msp, mdp)(NewPlaylistModal));