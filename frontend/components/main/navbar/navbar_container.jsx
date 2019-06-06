import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../../actions/session_actions";
import { fetchUser } from '../../../actions/user_actions';


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

export default connect(msp, mdp)(NavBar);