import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import BrowseArea from "./browse_area";

const msp = state => {
    return ({
        
    })
}

const mdp = dispatch => {
    return ({
        // fetchAlbums: () => dispatch(fetchAlbums),
        // fetchArtists: () => dispatch(fetchArtists),
    })
}


export default withRouter(connect(msp, mdp)(BrowseArea));