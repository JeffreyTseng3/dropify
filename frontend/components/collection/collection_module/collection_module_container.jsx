import { withRouter } from 'react-router';
import { connect } from "react-redux";
import CollectionModule from './collection_module';
import { fetchCollection } from '../../../actions/collection_actions';


const msp = state => {

  
    return ({
     
    })
}

const mdp = dispatch => {
    return ({
        fetchCollection: () => dispatch(fetchCollection()),
    })
}

export default withRouter(connect(msp, mdp)(CollectionModule));