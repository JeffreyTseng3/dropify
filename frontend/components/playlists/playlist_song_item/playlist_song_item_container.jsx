import { withRouter } from 'react-router';
import { connect } from "react-redux";
import PlaylistSongItem from './playlist_song_item';
import { openModal } from '../../../actions/modal_actions';
import { fetchCurrentSong } from "../../../actions/song_actions";


const msp = state => {
    let currentSong = state.current_song.currentSongId;
  
    return ({
        currentSong: currentSong,

    })
}

const mdp = dispatch => {
    return ({
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
        openModal: (options_playlist_modal) => dispatch(openModal(options_playlist_modal)),
        
    })
}

export default withRouter(connect(msp, mdp)(PlaylistSongItem));