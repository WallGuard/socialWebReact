import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";

const img = 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg';

let rerenderEntireTree = null;

let store = {
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: 'Mikhail',
                    likes: 1,
                    img: img,
                },
                {
                    id: 2,
                    message: 'Andrew',
                    likes: 2,
                    img: img,
                },
                {
                    id: 3,
                    message: 'Alex',
                    likes: 3,
                    img: img,
                },
                {
                    id: 4,
                    message: 'Courtney',
                    likes: 4,
                    img: img,
                },
                {
                    id: 5,
                    message: 'Elizabeth',
                    likes: 5,
                    img: 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg',
                },
            ],
            newPostText: '',
        },

        dialogsPage: {
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
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        rerenderEntireTree()
    },
}

export default store;
