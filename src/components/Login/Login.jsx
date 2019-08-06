import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, minLengthCreator, required} from "../../common/Validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);
const maxLength16 = maxLengthCreator(16);
const minLength10 = minLengthCreator(10);
const minLength6 = minLengthCreator(6);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login'
                       name={'login'}
                       component={Input}
                       validate={[required, maxLength30, minLength10]}/>
            </div>
            <div>
                <Field placeholder='Password'
                       name={'password'}
                       component={Input}
                       validate={[required, maxLength16, minLength6]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       component={Input}
                       type='checkbox'/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {

    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;