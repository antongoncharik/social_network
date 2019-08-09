import {authAPI} from "../Api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: action.isAuth
            }
            break;
        default:
            return state;
    }
}

export const setAuthData = (authData) => {
    let auth = false;
    if (authData.id) auth = true;

    return {
        type: SET_AUTH_DATA,
        id: authData.id,
        login: authData.login,
        email: authData.email,
        isAuth: auth
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthData({
                        type: SET_AUTH_DATA,
                        id: response.data.data.userId,
                        login: null,
                        email: null,
                        isAuth: true
                    }));
                    authAPI.auth()
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                setAuthData(response.data.data);
                            }
                        });
                } else {
                    let messageError = response.data.messages.length ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('login', {_error: messageError}));
                }
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthData({type: SET_AUTH_DATA, id: null, login: null, email: null, isAuth: false}));
                }
            });
    }
}