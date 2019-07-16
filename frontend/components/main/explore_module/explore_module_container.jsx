import React from "react";
import ExploreModule from "./explore_module";
import { connect } from "react-redux";
import { fetchCollection } from '../../../actions/collection_actions';

const msp = (state, ownProps) => {
    return ({
  
    });
};

const mdp = dispatch => {
    return ({
        fetchCollection: () => dispatch(fetchCollection()),
    });
};

export default connect(msp, mdp)(ExploreModule);