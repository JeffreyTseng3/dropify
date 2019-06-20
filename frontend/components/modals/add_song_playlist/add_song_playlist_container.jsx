import AddSongPlaylistModal from './add_song_playlist';
import { withRouter } from "react-router"
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { fetchPlaylists } from '../../../actions/playlist_actions';

const msp = state => {
    return {
        modal: state.ui.modal,
        playlists: Object.values(state.entities.playlists),
        currentUserId: state.session.currentUserId,
    }

}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchPlaylists: () => dispatch(fetchPlaylists()),              
       
    }
}

export default withRouter(connect(msp, mdp)(AddSongPlaylistModal));
