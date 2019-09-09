import { connect } from "react-redux";
import MusicPlayerInfo from "./music_player_info";
import { fetchAlbum } from "../../../../actions/album_actions";
const msp = state => {
    let albums = Object.values(state.entities.albums);
    let artists = Object.values(state.entities.artists);

    return {
        currentSong: state.current_song.currentSongId,
        albums: albums,
        artists: artists,
     
    }
}

const mdp = dispatch => {
    return {
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        fetchSongs: () => dispatch(fetchSongs()),
    }
}

export default connect(msp, mdp)(MusicPlayerInfo);
