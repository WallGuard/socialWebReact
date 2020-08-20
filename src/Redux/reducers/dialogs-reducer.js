const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    users: [
        {
            id: 'kewfsdgadf',
            firstName: 'Alexander',
            lastName: 'Ivanov',
        },
        {
            id: '3454354423',
            firstName: 'Carol',
            lastName: 'Petrova',
        },
        {
            id: 'sgd43dgfd4re',
            firstName: 'Ivan',
            lastName: 'Sidorov',
        },
        {
            id: 'sfs324cv34',
            firstName: 'Gabriel',
            lastName: 'Kovalev',
        },
        {
            id: '123m123nb123v',
            firstName: 'Kate',
            lastName: 'Charlie',
        },
    ],
    messages: [
        {
            text: 'hello world!',
        },
        {
            text: 'New text',
        },
        {
            text: 'Another one text',
        },
        {
            text: 'Hey hey!',
        },
    ],
    newMessage: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE : {
            let newMessage = {
                text: action.newMessage
            };
            return {
                ...state,
                messages: [...state.messages, {...newMessage,}],
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT :
            return {...state, newMessage: action.newText,};
        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessage) => {
    return {type: SEND_MESSAGE, newMessage};
  };
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text};
  };

export default dialogsReducer;
