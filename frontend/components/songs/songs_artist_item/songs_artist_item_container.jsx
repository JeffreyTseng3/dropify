import { withRouter } from 'react-router';
import { connect } from "react-redux";
import SongsArtistItem from './songs_artist_item';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchCurrentSong } from '../../../actions/song_actions';
import { openModal } from '../../../actions/modal_actions';
import { receiveMusicPlayType } from "../../../actions/queue_actions";

const msp = state => {
    let albums = Object.values(state.entities.albums);
    let currentSong = state.current_song.currentSongId;

    return ({   
        albums: albums,
        currentSong: currentSong,

    })
}

const mdp = dispatch => {
    return ({
        fetchAlbum: id => dispatch(fetchAlbum),
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
        openModal: (options_artist_modal) => dispatch(openModal(options_artist_modal)),
        setMusicPlayType: musicPlayType => dispatch(receiveMusicPlayType(musicPlayType)),
    })
}

export default withRouter(connect(msp, mdp)(SongsArtistItem));