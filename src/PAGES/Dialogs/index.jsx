import React from "react";
import "./style.scss";
import UserNames from "./User-Names";
import Messages from './Messages';

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

    const newMessageElement = React.createRef();

    const sendMessage = () => {
      props.sendMessage();
      newMessageElement.current.value = '';
    };

    const onPostChange = () => {
      const newMessage = newMessageElement.current.value
      props.updateNewMessageText(newMessage);
    }

  return (
    <div className='dialogs-wrapper'>
      <div>
        {userElements}
      </div>
      <div className='field'>
        {messageElements}
          <textarea
            ref={newMessageElement}
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
