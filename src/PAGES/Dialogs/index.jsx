import React from "react";
import "./style.scss";
import UserNames from "./User-Names";
import Messages from './Messages';

const Dialogs = (props) => {
  
  const { users, messages } = props.dialogsPage;

  const userElements = users
    .map( el => (
      <UserNames key={el.id} id={el.id} name={`${el.firstName} ${el.lastName}`} />
    ));
  
    const messageElements = messages
    .map( el => (
      <Messages key={el.id} message={el.text} />
    ));

    //const newMessageElement = React.createRef();
    const newMessageElement = props.dialogsPage.newMessage;

    const onSendMessage = () => {
      newMessageElement !== '' && 
      props.sendMessage();
      //newMessageElement.current.value = '';
    };

    const onPostChange = (e) => {
      //const newMessage = newMessageElement.current.value
      	const newMessage = e.target.value;
      	props.changePost(newMessage);
    ;}

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
            onClick={onSendMessage}
          >
            Send
          </button>
      </div>
    </div>
  );
};

export default Dialogs;
