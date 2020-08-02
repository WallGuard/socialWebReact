const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch(action.type) {
        case SEND_MESSAGE : {
            let newMessage = {
                text: state.newMessage
            };
    
            state.messages.push(newMessage);
            state.messages.newMessage = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT : {
            state.newMessage = action.newText;
            return state;
        }
        default:
            { console.log(`Error: this ${action.type} type doesn't exist`) }
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE};
  };
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text};
  };

export default dialogsReducer;
