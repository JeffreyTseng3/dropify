import { withRouter } from 'react-router';
import { connect } from "react-redux";
import SongsArtistItem from './songs_artist_item';
import { fetchCurrentSong } from '../../../actions/song_actions';
const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
    })
}

export default withRouter(connect(msp, mdp)(SongsArtistItem));