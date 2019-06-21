import OptionsModal from "./options_modal";
import { withRouter } from "react-router"
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { openModal } from '../../../actions/modal_actions';
import { deletePlaylistSong } from '../../../actions/playlist_song_actions';
import { fetchPlaylist, fetchPlaylists } from '../../../actions/playlist_actions';
import { fetchUser } from '../../../actions/user_actions';
const msp = state => {

    return {
        modal: state.ui.modal,
        currentUserId: state.session.currentUserId,
    }

}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (addPlaylistModal) => dispatch(openModal(addPlaylistModal)),
        deletePlaylistSong: playlistSongRelation => dispatch(deletePlaylistSong(playlistSongRelation)),
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        // fetchPlaylists: id => dispatch(fetchPlaylists()),
        // fetchUser: id => dispatch(fetchUser(id)),
    }
}

export default withRouter(connect(msp, mdp)(OptionsModal));
