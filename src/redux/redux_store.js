import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {profileReduser} from './profile_reducer';
import {dialogsReduser} from './dialogs_reducer';
import {usersReducer} from './users_reducer';
import {authReducer} from './auth_reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {appReducer} from "./app_reducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));