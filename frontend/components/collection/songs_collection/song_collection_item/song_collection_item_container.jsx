import { withRouter } from 'react-router';
import { connect } from "react-redux";
import songCollectionItem from './song_collection_item';
import { openModal } from '../../../../actions/modal_actions';
import { fetchCurrentSong } from "../../../../actions/song_actions";
import { receiveMusicPlayType } from '../../../../actions/queue_actions';


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
        setMusicPlayType: musicPlayType => dispatch(receiveMusicPlayType(musicPlayType)),

    })
}

export default withRouter(connect(msp, mdp)(songCollectionItem));