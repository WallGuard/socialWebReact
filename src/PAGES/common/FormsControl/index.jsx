import React from 'react';
import styled from 'styled-components';
import {Field} from "redux-form";


const FormControl = ({ input, meta, ...props }) => {

  const isError = meta.touched && meta.error;

  return (
    <div>
      <div>{props.children}</div>
      {isError && <ErrorSpan>{meta.error}</ErrorSpan>}
    </div>
  )
};

export const Textarea = (props) => {
  const { input, meta, restProps } = props;
  const isError = meta.touched && meta.error;
  return <FormControl {...props}><PostTextarea isError={isError} {...input} {...restProps} /></FormControl>
};

export const Textarea2 = ({ input, meta, ...props }) => {

  const isError = meta.touched && meta.error;

  return (
    <div>
      <div>
        <PostTextarea isError={isError} {...input} {...props} />
      </div>
      {isError && <ErrorSpan>{meta.error}</ErrorSpan>}
    </div>
  )
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
  <div>
    <Field placeholder={placeholder} name={name}
      validate={validators}
      component={component}
      {...props}
    /> {text}
  </div>
)

const PostTextarea = styled.textarea`
    ${props => props.isError && 'border: 3px solid red;'}
`;

const ErrorSpan = styled.span`
    color: red;
`;
