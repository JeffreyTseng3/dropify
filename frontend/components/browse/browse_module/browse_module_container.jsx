import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import BrowseModule from './browse_module';
import { fetchSongs } from "../../../actions/song_actions";
const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
    })
}

export default withRouter(connect(msp, mdp)(BrowseModule))