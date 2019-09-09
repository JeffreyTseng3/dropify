import { connect } from "react-redux";
import SplashPageHeader from "./splash_page_header";
import { logout } from "../../../actions/session_actions";
import { withRouter } from 'react-router'
import { fetchAlbums } from "../../../actions/album_actions";
import { fetchArtists } from '../../../actions/artist_actions';
import { fetchSongs } from '../../../actions/song_actions';

const msp = state => {
    let albums = Object.values(state.entities.albums);
    let artists = Object.values(state.entities.artists);

    return {
        albums: albums,
        loggedIn: Boolean(state.session.currentUserId),
        artists: artists,
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists()),
       
    };

};

export default withRouter(connect(msp, mdp)(SplashPageHeader));