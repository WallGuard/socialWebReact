import React from 'react';
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/reducers/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormsControl/style.module.scss"
import { createField, Input } from '../common/FormsControl';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"}
          validate={[required]}
          component={'input'} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"}
          validate={[required]}
          component={'input'} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
      </div>
      { props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}
      { props.captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
      { props.error && <div className={style.formSummaryError}>
        {props.error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
  </div>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login); 
