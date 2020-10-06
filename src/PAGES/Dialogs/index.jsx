import React from "react";
import "./style.scss";
import UserNames from "./User-Names";
import Messages from './Messages';
import { reduxForm, Field } from 'redux-form';

const Dialogs = (props) => {

  const { users, messages } = props.dialogsPage;

  const userElements = users
    .map(el => (
      <UserNames key={el.id} id={el.id} name={`${el.firstName} ${el.lastName}`} />
    ));

  const messageElements = messages
    .map(el => (
      <Messages key={el.id} message={el.text} />
    ));

  // const newMessageElement = props.dialogsPage.newMessage;

  // // const onSendMessage = () => {
  // //   newMessageElement !== '' &&
  // //   props.sendMessage();
  // //   console.log(props.sendMessage())
  // // };

  // // const onPostChange = (e) => {
  // //   	const newMessage = e.target.value;
  // //   	props.changePost(newMessage);
  // // };

  const addNewMessage = (values) => {
    values.newMessageElement !== '' &&
      props.sendMessage(values.newMessageElement);
    values.newMessageElement = '';
    ;
  }

  return (
    <div className='dialogs-wrapper'>
      <div>
        {userElements}
      </div>
      <div className='field'>
        {messageElements}
        <AddMessageReduxForm
          onSubmit={addNewMessage}
        />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='field'>
      <Field
        component='textarea'
        name='newMessageElement'
        placeholder='Enter a new message'
      />
      <button>
        Send
      </button>
    </form>
  )
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm)

export default Dialogs;
