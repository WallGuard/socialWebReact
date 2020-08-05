const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const img = 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST : {
            debugger;
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likes: 0,
                img: img,
            }
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: 
            { console.log(`Error: this ${action.type} type doesn't exist`) }
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST};
  };
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text};
  };

export default profileReducer;
