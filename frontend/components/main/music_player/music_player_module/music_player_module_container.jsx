import { connect } from "react-redux";
import MusicPlayerModule from "./music_player_module";
import fetchSong from "../../../../actions/song_actions";

const msp = state => {
    return {
        currentSongId: state.current_song.id,
    };
};

const mdp = dispatch => {
    return {
        fetchSong: id => dispatch(fetchSong(id))
    };
};

export default connect(msp, mdp)(MusicPlayerModule);