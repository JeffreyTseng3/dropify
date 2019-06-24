import { connect } from "react-redux";
import { login, receiveClearFormErrors } from "../../actions/session_actions";
import LoginForm from './login_form';
import { withRouter } from 'react-router';
import { demoLogin } from "../../actions/session_actions";

const msp = state => {
   
    return {
        errors: state.errors.session,
        // error: state.errors
    };
};

const mdp = dispatch => {
    return {
        login: (formUser) => dispatch(login(formUser)),
        clearErrors: () => dispatch(receiveClearFormErrors()),
        demoLogin: () => dispatch(demoLogin()),
    };
};

export default withRouter(connect(msp, mdp)(LoginForm));