import { connect } from "react-redux";
import MusicPlayerConsole from "./music_player_console";
import { fetchCurrentSong } from '../../../../actions/song_actions';
import { removeSongQueue } from '../../../../actions/queue_actions';
import { withRouter } from 'react-router';
const msp = state => {
    return {
        current_song: Object.values(state.current_song)[0],
        queue: state.queue,
        artists: Object.values(state.entities.artists),
        albums: Object.values(state.entities.albums),
        playlists: Object.values(state.entities.playlists),
        musicPlayType: state.musicPlayType,
 
    }
}

const mdp = dispatch => {
    return {
        fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),   
        dequeue: () => dispatch(removeSongQueue()),   
    }
}

export default withRouter(connect(msp, mdp)(MusicPlayerConsole));
