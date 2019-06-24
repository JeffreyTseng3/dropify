import { connect } from "react-redux";
import { withRouter } from "react-router"
import SearchResults from './search_results';

const msp = state => {

    let artists = state.search.searchResult.artists ? Object.values(state.search.searchResult.artists) : null;
    let albums = state.search.searchResult.albums ? Object.values(state.search.searchResult.albums) : null;
    let playlists = state.search.searchResult.playlists ? Object.values(state.search.searchResult.playlists) : null;
    let songs = state.search.searchResult.songs ? Object.values(state.search.searchResult.songs) : null;
    return {
        artists, 
        albums,
        playlists,
        songs,
    };
};

const mdp = dispatch => {
    return {
    };
};

export default withRouter(connect(msp, mdp)(SearchResults));