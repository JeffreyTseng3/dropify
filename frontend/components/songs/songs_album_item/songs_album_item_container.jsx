import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { fetchCurrentSong } from '../../../actions/song_actions'
import SongsAlbumItem from "./songs_album_item";
const msp = state => {
    let currentSong = state.current_song.currentSongId;
    return ({
        currentSong: currentSong,
    })
}

const mdp = dispatch => {
    return ({
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
    })
}

export default withRouter(connect(msp, mdp)(SongsAlbumItem));