
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import SongsCollection from './songs_collection';
import { fetchSongs } from "../../../actions/song_actions";

const msp = (state) => {
    return ({
        currentUserId: state.session.currentUserId,
        collection: Object.values(state.collection), 
    });
};

const mdp = dispatch => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
    });
};

export default withRouter(connect(msp, mdp)(SongsCollection));