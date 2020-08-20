import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form>
            <div>
                <Field
                    onSubmit={props.handlerSubmit}
                    placeholder='Login'
                    name={'login'}
                    component={'input'} />
            </div>
            <div>
                <Field
                    onSubmit={props.handlerSubmit}
                    placeholder='Password'
                    name={'password'}
                    component={'input'} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type='checkbox' />
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default Login;
