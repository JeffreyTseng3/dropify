import React from "react";
import { connect } from "react-redux";
import PlaylistsCollectionItem from "./playlists_collection_item";
import { withRouter } from "react-router";

const msp = state => {
    return {

    }
}

const mdp = dispatch => {
    return {

    }
}

export default withRouter(connect(msp, mdp)(PlaylistsCollectionItem));

