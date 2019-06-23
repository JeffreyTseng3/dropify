import { connect } from "react-redux";
import SearchModule from './search_module';
import { withRouter } from "react-router"
import { search } from '../../../actions/search_actions';

const msp = state => {

    return {

    };
};

const mdp = dispatch => {
    return {
        search: (searchInput) => dispatch(search(searchInput)),

    };
};

export default withRouter(connect(msp, mdp)(SearchModule));