import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { fetchCurrentSong } from '../../../actions/song_actions'
import SongsAlbumItem from "./songs_album_item";
const msp = state => {

    return ({
      
    })
}

const mdp = dispatch => {
    return ({
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
    })
}

export default withRouter(connect(msp, mdp)(SongsAlbumItem));