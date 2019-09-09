import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, minLengthCreator, required} from "../../common/Validators/validators";
import {Input, createField} from "../../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import s from './Login.module.css';
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30);
const maxLength16 = maxLengthCreator(16);
const minLength10 = minLengthCreator(10);
const minLength6 = minLengthCreator(6);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', Input,
                [required, maxLength30, minLength10], '')}
            {createField('Password', 'password', Input,
                [required, maxLength16, minLength6], '', {type: 'password'})}
            {createField(null, 'rememberMe', Input,
                null, 'remember me', {type: 'checkbox'})}
            <div>
                <button>Login</button>
            </div>
            {error && <span className={s.commonError}>
                {error}
            </span>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.login, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);