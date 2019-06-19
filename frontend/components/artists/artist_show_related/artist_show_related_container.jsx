import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowRelated from './artist_show_related';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({
        
    })
}

export default withRouter(connect(msp, mdp)(ArtistShowRelated));
