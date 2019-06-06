import { withRouter } from 'react-router';
import { connect } from "react-redux";
import SongsArtistItem from './songs_artist_item';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchCurrentSong } from '../../../actions/song_actions';

const msp = state => {
    let albums = Object.values(state.entities.albums);

    return ({   
        albums: albums,
    })
}

const mdp = dispatch => {
    return ({
        fetchAlbum: id => dispatch(fetchAlbum),
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
    })
}

export default withRouter(connect(msp, mdp)(SongsArtistItem));