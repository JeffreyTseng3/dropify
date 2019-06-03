import React from "react";
import CollectionBar from "./collection_bar";
import { connect } from "react-redux";
import { openModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
    return ({

    });
};

const mdp = dispatch => {
    return ({
        openModal: () => dispatch(openModal('new'))
    });
};

export default connect(msp, mdp)(CollectionBar);