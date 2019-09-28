import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, minLengthCreator, required} from "../../common/Validators/validators";
import {Input, createField} from "../../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import s from './Login.module.css';
import {Redirect} from "react-router-dom";
import styleButton from "../../common/css/Button.module.css";

const maxLength30 = maxLengthCreator(30);
const maxLength16 = maxLengthCreator(16);
const minLength10 = minLengthCreator(10);
const minLength6 = minLengthCreator(6);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', Input,
                [required, maxLength30, minLength10], '')}
            {createField('Password', 'password', Input,
                [required, maxLength16, minLength6], '', {type: 'password'})}
            {createField(null, 'rememberMe', Input,
                null, 'remember me', {type: 'checkbox'})}
            <div>
                <button className={styleButton.button}>Login</button>
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Input text of captcha', 'captcha', Input, [required], '')}
            {error && <span className={s.commonError}>{error}</span>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}
                            captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);