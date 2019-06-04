import { connect } from "react-redux";
import { login, signup, receiveClearFormErrors } from "../../actions/session_actions";
import SignupForm from './signup_form';
import { withRouter } from 'react-router';

const msp = state => {
    return {
        errors: state.errors.users,
    };
};

const mdp = dispatch => {
    return {
        signup: (formUser) => dispatch(signup(formUser)),
        login: (formUser) => dispatch(login(formUser)),
        clearErrors: () => dispatch(receiveClearFormErrors())
    };
};

export default withRouter(connect(msp, mdp)(SignupForm));


