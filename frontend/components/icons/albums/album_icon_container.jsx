import { withRouter } from 'react-router';
import { connect } from "react-redux";
import AlbumIcon from './album_icon';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(AlbumIcon));