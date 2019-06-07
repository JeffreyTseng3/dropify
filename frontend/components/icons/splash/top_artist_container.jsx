import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import TopArtist from './top_artist';

const msp = store => {
    return ({
        
    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(TopArtist));
