import {authAPI} from "../Api";
import {setAuthData} from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
            break;
        default:
            return state;
    }
}

export const initializedSuccsess = () => ({type: INITIALIZED_SUCCESS})

export const initializedApp = () => {
    return async (dispatch) => {
        let response = await authAPI.auth()
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(response.data.data));
        }
        dispatch(initializedSuccsess());
    }
}