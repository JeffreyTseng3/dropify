import { connect } from "react-redux";
import MusicPlayerInfo from "./music_player_info";
import { fetchAlbum } from "../../../../actions/album_actions";

const msp = state => {
    let albums = Object.values(state.entities.albums);
    return {
        currentSong: state.current_song.currentSongId,
        albums: albums,
    }
}

const mdp = dispatch => {
    return {
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    }
}

export default connect(msp, mdp)(MusicPlayerInfo);
