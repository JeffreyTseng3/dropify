import { 
    RECEIVE_SESSION_ERRORS, 
    RECEIVE_CURRENT_USER,
    RECEIVE_CLEAR_FORM_ERRORS 
    } from "../actions/session_actions";

export default (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return action;
        case RECEIVE_CLEAR_FORM_ERRORS:
            return [];
        default:
            return state;
    }
}