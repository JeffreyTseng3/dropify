import { connect } from "react-redux";
import MusicPlayerModule from "./music_player_module";

import { fetchSongs, fetchCurrentSong } from "../../../../actions/song_actions";
import { fetchAlbums } from "../../../../actions/album_actions";
import { fetchArtists } from "../../../../actions/artist_actions";
const msp = state => {
    let albums = Object.values(state.entities.albums);
    let artists = Object.values(state.entities.artists);
    return {
        current_song: Object.values(state.current_song)[0],
        songs: Object.values(state.entities.songs),
        albums,
        artists,
    };
};

const mdp = dispatch => {
    return {
        fetchAlbums:() => dispatch(fetchAlbums()),
        fetchSongs: () => dispatch(fetchSongs()),
        fetchArtists: () => dispatch(fetchArtists()),
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id))
    };
};

export default connect(msp, mdp)(MusicPlayerModule);