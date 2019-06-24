import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';
export const RECEIVE_CLEAR_FORM_ERRORS = "RECEIVE_CLEAR_SESSION_FORM_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => {
    if (errors === undefined) {
        errors = [];
    }
    return {
    type: RECEIVE_SESSION_ERRORS,
    errors
}};

export const receiveUsersErrors = errors => {
    if (errors === undefined) {
        errors = [];
    }
    return {
    type: RECEIVE_USERS_ERRORS,
    errors
}};

export const receiveClearFormErrors = () => {
    return {
        type: RECEIVE_CLEAR_FORM_ERRORS
    }
}

export const signup = formUser => dispatch => {
 
    return SessionAPIUtil.signup(formUser)
        .then(

            user => {
          
            return dispatch(receiveCurrentUser(user))
            }, err => {
            return dispatch(receiveUsersErrors(err.responseJSON))
            })
};

export const login = formUser => dispatch => {
 
    return SessionAPIUtil.login(formUser)
        .then(
            user => {
              
            return dispatch(receiveCurrentUser(user))
            }, err => {
     
            return dispatch(receiveSessionErrors(err.responseJSON))
            })
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => {
            return dispatch(logoutCurrentUser())
        })
};

export const demoLogin = () => dispatch => {
 
    let formUser = { info: "frey_jay", password: "123123"};
    return SessionAPIUtil.login(formUser)
        .then(
            user => {

                return dispatch(receiveCurrentUser(user))
            }, err => {

                return dispatch(receiveSessionErrors(err.responseJSON))
            })
}