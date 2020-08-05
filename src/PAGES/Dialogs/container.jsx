import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/reducers/dialogs-reducer';
import Dialogs from ".";

const DialogsContainer = (props) => {

    const {dispatch} = props.store;

    const sendMessage = () => {
      dispatch(sendMessageActionCreator());
    };

    const changePost = (newMessage) => {
      dispatch(updateNewMessageTextActionCreator(newMessage));
    }

  return (
        <Dialogs
            sendMessage={sendMessage}
            changePost={changePost}
            state={props.store.getState().dialogsPage}
        />
  );
};

export default DialogsContainer;
