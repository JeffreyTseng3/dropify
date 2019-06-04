import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistShowArea from "./artist_show_area";
const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(ArtistShowArea));