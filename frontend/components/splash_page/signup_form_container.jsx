import { connect } from "react-redux";
import { signup } from "../../actions/session_actions"
import SignupForm from './signup_form';

const msp = state => {
    return {
        errors: state.errors,
    };
};

const mdp = dispatch => {
    return {
        signup: (formUser) => dispatch(signup(formUser))
    };
};

export default connect(msp, mdp)(SignupForm);