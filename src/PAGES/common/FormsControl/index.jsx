import React from 'react';
import styled from 'styled-components';


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

const PostTextarea = styled.textarea`
    ${props => props.isError && 'border: 3px solid red;'}
`;

const ErrorSpan = styled.span`
    color: red;
`;
