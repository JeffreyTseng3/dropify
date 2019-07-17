
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import ArtistsCollection from './artists_collection';
import { fetchArtists } from "../../../actions/artist_actions";


const msp = (state) => {
    
    return ({
        
        currentUserId: state.session.currentUserId,
        collection: Object.values(state.collection), 
    });
};

const mdp = dispatch => {
    return ({
        fetchArtists: () => dispatch(fetchArtists()),
    });
};

export default withRouter(connect(msp, mdp)(ArtistsCollection));