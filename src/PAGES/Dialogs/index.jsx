import React from "react";
import "./style.scss";
import UserNames from "./User-Names";
import Messages from './Messages';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/reducers/dialogs-reducer';

const Dialogs = (props) => {
  const {
    users,
    messages
  } = props.state;

  const userElements = users
    .map( el => (
      <UserNames id={el.id} name={`${el.firstName} ${el.lastName}`} />
    ));
  
    const messageElements = messages
    .map( el => (
      <Messages message={el.text} />
    ));

    //const newMessageElement = React.createRef();
    const newMessageElement = props.state.newMessage;

    const sendMessage = () => {
      newMessageElement.value !== '' && 
      props.dispatch(sendMessageActionCreator());
      //newMessageElement.current.value = '';
    };

    const onPostChange = (e) => {
      //const newMessage = newMessageElement.current.value
      const newMessage = e.target.value;
      props.dispatch(updateNewMessageTextActionCreator(newMessage));
    }

  return (
    <div className='dialogs-wrapper'>
      <div>
        {userElements}
      </div>
      <div className='field'>
        {messageElements}
          <textarea
            value={newMessageElement}
            //ref={newMessageElement}
            onChange={onPostChange}
          >
          </textarea>
          <button
            onClick={sendMessage}
          >
            Send
          </button>
      </div>
    </div>
  );
};

export default Dialogs;
