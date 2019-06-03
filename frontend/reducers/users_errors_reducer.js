import { 
    RECEIVE_USERS_ERRORS, 
    RECEIVE_CURRENT_USER,
    RECEIVE_CLEAR_FORM_ERRORS
    } from "../actions/session_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_CLEAR_FORM_ERRORS:
            return [];
        default:
            return state;
    }
}


