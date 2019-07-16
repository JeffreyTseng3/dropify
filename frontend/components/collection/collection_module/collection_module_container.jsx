import { withRouter } from 'react-router';
import { connect } from "react-redux";
import CollectionModule from './collection_module';


const msp = state => {

  
    return ({
     
    })
}

const mdp = dispatch => {
    return ({
     
    })
}

export default withRouter(connect(msp, mdp)(CollectionModule));