import { connect } from "react-redux";
import SearchModule from './search_module';
import { withRouter } from "react-router"

const msp = state => {

    return {

    };
};

const mdp = dispatch => {
    return {


    };
};

export default withRouter(connect(msp, mdp)(SearchModule));