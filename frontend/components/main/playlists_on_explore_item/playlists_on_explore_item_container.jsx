import React from "react";
import { connect } from "react-redux";
import PlaylistsOnExploreItem from "./playlists_on_explore_item";
import { withRouter } from "react-router";

const msp = state => {
    return {

    }
}

const mdp = dispatch => {
    return {

    }
}

export default withRouter(connect(msp, mdp)(PlaylistsOnExploreItem));

