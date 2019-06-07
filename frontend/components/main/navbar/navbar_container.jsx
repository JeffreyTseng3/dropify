import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../../actions/session_actions";
import { fetchUser } from '../../../actions/user_actions';
import { withRouter } from "react-router";

const msp = state => {
    
    return {
        users: Object.values(state.entities.users),
        currentUserId: state.session.currentUserId,
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchUser: id => dispatch(fetchUser(id)),

    };
};

export default withRouter(connect(msp, mdp)(NavBar));