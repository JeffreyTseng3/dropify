import { connect } from "react-redux";
import MusicPlayerConsole from "./music_player_console";

const msp = state => {
    return {
        current_song: Object.values(state.current_song)[0]
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(MusicPlayerConsole);
