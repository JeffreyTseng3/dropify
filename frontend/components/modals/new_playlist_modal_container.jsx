import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createPlaylist, fetchPlaylists } from "../../actions/playlist_actions";
import NewPlaylistModal from "./new_playlist_modal";
import { withRouter } from "react-router"

const msp = state => {
    return {
        modal: state.ui.modal,
        currentUserId: state.session.currentUserId,
        playlists: state.entities.playlists,
        showSinglePlaylist: state.entities.playlists.showSinglePlaylist,
        
    };
};

const mdp = dispatch => {
    return {
        createPlaylist: (new_playlist, history ) => dispatch(createPlaylist(new_playlist,history)),
        closeModal: () => dispatch(closeModal()),
        fetchPlaylists: () => dispatch(fetchPlaylists()),                      
    }
}

export default withRouter(connect(msp, mdp)(NewPlaylistModal));