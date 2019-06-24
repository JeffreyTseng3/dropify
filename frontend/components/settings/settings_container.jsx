import { connect } from "react-redux";
import Settings from './settings';
import { logout } from "../../actions/session_actions";
import { withRouter } from 'react-router';

const msp = state => {

    return {
        users: Object.values(state.entities.users),
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default withRouter(connect(msp, mdp)(Settings));