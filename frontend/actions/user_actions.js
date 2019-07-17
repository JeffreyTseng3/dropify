export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

import * as UserAPIUtil from "../util/user_api_util";

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const fetchUser = id => dispatch => {
    return UserAPIUtil.fetchUser(id)
        .then(user => {
            dispatch(receiveUser(user))
        }) 
}

export const fetchUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers() 
        .then(users => {
            // debugger
            dispatch(receiveUsers(users))
        })
}