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

    addPost() {
        let newPost = {
            id: this._state.profilePage.postData.length + 1,
            message: this._state.profilePage.newPostText,
            likes: 0,
            img: img,
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = '';
        rerenderEntireTree()
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        rerenderEntireTree()
    },

    sendMessage() {
        let newMessage = {
            text: this._state.dialogsPage.newMessage
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.messages.newMessage = 'sfd';
        rerenderEntireTree();
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessage = newText;
        rerenderEntireTree()
    },
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default store;
