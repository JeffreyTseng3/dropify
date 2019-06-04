import { withRouter } from 'react-router';
import { connect } from "react-redux";
import ArtistIcon from './artist_icon';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(ArtistIcon));