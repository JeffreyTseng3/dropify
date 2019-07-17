
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import SongsCollection from './songs_collection';
import { fetchSongs } from "../../../actions/song_actions";
import { fetchArtists } from "../../../actions/artist_actions";
import { fetchAlbums } from "../../../actions/album_actions";

const msp = (state) => {
    return ({
        currentUserId: state.session.currentUserId,
        collection: Object.values(state.collection), 
        songs: Object.values(state.entities.songs),
    });
};

const mdp = dispatch => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
        fetchArtists: () => dispatch(fetchArtists()),
        fetchAlbums: () => dispatch(fetchAlbums()),
    });
};

export default withRouter(connect(msp, mdp)(SongsCollection));