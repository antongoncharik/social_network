import {createStore, combineReducers, applyMiddleware} from 'redux';
import {profileReduser} from './profile_reducer';
import {dialogsReduser} from './dialogs_reducer';
import {sidebarReduser} from './sidebar_reducer';
import {usersReducer} from './users_reducer';
import {authReducer} from './auth_reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {appReducer} from "./app_reducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebarPage: sidebarReduser,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
