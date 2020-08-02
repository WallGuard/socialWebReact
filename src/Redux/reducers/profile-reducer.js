const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const img = 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg';

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST : {
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likes: 0,
                img: img,
            }
            state.postData.push(newPost)
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT : {
            state.newPostText = action.newText;
            return state;
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
