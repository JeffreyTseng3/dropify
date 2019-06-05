import { connect } from "react-redux";
import MusicPlayerModule from "./music_player_module";
// import fetchCurrentSong from "../../../../actions/song_actions";

const msp = state => {
    return {
        current_song: Object.values(state.current_song)[0]
    };
};

const mdp = dispatch => {
    return {
       
        // fetchCurrentSong: id => dispatch(fetchCurrentSong(id))
    };
};

export default connect(msp, mdp)(MusicPlayerModule);