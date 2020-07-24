import * as APIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const PAGE_LOADING = 'PAGE_LOADING';
export const PAGE_LOADED = 'PAGE_LOADED';


const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    })
};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
});

export const pageLoading = () => ({
    type: PAGE_LOADING
});

export const pageLoaded = () => ({
    type: PAGE_LOADED
});



export const login = (user) => dispatch => (
    APIUtil.login(user)
        .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
        (err) => dispatch(receiveErrors(err.responseJSON)),
        
));

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => dispatch => (
    APIUtil.signup(user)
        .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
        (err) => dispatch(receiveErrors(err.responseJSON)), 
));

export const fetchUser = (id) => dispatch => {
    return UserAPIUtil.fetchUser(id)
        .then((user) => dispatch(receiveCurrentUser(user))),
        (err) => dispatch(receiveErrors(err.responseJSON))
};





