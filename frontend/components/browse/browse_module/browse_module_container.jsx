import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import BrowseModule from './browse_module';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(BrowseModule))