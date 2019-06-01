import { connect } from "react-redux";
import { login, receiveClearFormErrors } from "../../../actions/session_actions";
import LoginForm from './login_form';

const msp = state => {
   
    return {
        errors: state.errors.session,
        // error: state.errors
    };
};

const mdp = dispatch => {
    return {
        login: (formUser) => dispatch(login(formUser)),
        clearErrors: () => dispatch(receiveClearFormErrors())
    };
};

export default connect(msp, mdp)(LoginForm);