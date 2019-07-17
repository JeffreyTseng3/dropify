
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import AlbumsCollection from './albums_collection';
import { fetchAlbums } from "../../../actions/album_actions";

const msp = (state) => {

    return ({

        currentUserId: state.session.currentUserId,
        collection: Object.values(state.collection), 
        albums: Object.values(state.entities.albums),
    });
};

const mdp = dispatch => {
    return ({
        fetchAlbums: () => dispatch(fetchAlbums()),
    });
};

export default withRouter(connect(msp, mdp)(AlbumsCollection));