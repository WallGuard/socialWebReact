import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/reducers/dialogs-reducer";
import Dialogs from ".";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  

  return (
    <StoreContext.Consumer>
        { (store) => {
            const { dispatch } = store;

            const sendMessage = () => {
                dispatch(sendMessageActionCreator());
            };

            const changePost = (newMessage) => {
                dispatch(updateNewMessageTextActionCreator(newMessage));
            };
            return (
            <Dialogs
                sendMessage={sendMessage}
                changePost={changePost}
                state={store.getState().dialogsPage}
            />
            )}
        }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
