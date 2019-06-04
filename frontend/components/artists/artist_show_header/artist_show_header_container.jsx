import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowHeader from "./artist_show_header";

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(ArtistShowHeader));
