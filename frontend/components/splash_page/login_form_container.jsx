import { connect } from "react-redux";
import { login } from "../../actions/session_actions"
import LoginForm from './login_form';

const msp = state => {
    return {
        errors: state.errors,
    };
};

const mdp = dispatch => {
    return {
        login: (formUser) => dispatch(login(formUser))
    };
};

export default connect(msp, mdp)(LoginForm);