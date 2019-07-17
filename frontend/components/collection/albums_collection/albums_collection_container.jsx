
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import AlbumsCollection from './albums_collection';
const msp = (state) => {

    return ({

        currentUserId: state.session.currentUserId,
        collection: Object.values(state.collection), 

    });
};

const mdp = dispatch => {
    return ({

    });
};

export default withRouter(connect(msp, mdp)(AlbumsCollection));