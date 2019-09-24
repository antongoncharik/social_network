import {authAPI, securityAPI} from "../Api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
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
        type: 'SET_AUTH_DATA',
        id: authData.id,
        login: authData.login,
        email: authData.email,
        isAuth: auth
    }
}
export const setCaptchaUrl = (captchaUrl) => {
    return {
        type: 'SET_CAPTCHA_URL',
        captchaUrl: captchaUrl
    }
}

export const login = (email, password, rememberMe, captcha = null) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(setAuthData({
                type: SET_AUTH_DATA,
                id: response.data.data.userId,
                login: null,
                email: null,
                isAuth: true
            }));
            response = await authAPI.auth();
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(response.data.data));
            }
        } else {
            if (response.data.resultCode === 10) {
                const response = await securityAPI.getCaptchaUrl();
                dispatch(setCaptchaUrl(response.data.url));
            }
            const messageError = response.data.messages.length ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: messageError}));
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthData({type: SET_AUTH_DATA, id: null, login: null, email: null, isAuth: false}));
        }
    }
}