import { withRouter } from 'react-router';
import { connect } from "react-redux";
import SongsArtistItem from './songs_artist_item';
import { receiveCurrentSong } from '../../../actions/song_actions';
const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    })
}

export default withRouter(connect(msp, mdp)(SongsArtistItem));