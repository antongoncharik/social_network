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
                isAuth: true
            }
            break;
        default:
            return state;
    }
}

export const setAuthData = (authData) => {
    return {
        type: SET_AUTH_DATA,
        id: authData.id,
        login: authData.login,
        email: authData.email
    }
}
