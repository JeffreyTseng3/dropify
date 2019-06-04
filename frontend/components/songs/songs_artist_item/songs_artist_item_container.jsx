import { withRouter } from 'react-router';
import { connect } from "react-redux";
import SongsArtistItem from './songs_artist_item';
const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(SongsArtistItem));