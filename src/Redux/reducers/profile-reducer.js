const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'
const REMOVE_LIKE = 'REMOVE-LIKE'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
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
    profile: null,
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST :
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likes: 0,
                img: img,
            }
            return {
                ...state,
                postData: [...state.postData, {...newPost}],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newText,
            };
            case ADD_LIKE :
                return {
                    ...state,
                    postData: state.postData.map( p => {
                        if (p.id === action.postID) {
                            return {...p, likes: p.likes + 1}
                        };
                        return p;})
                };
                case REMOVE_LIKE :
                    return {
                        ...state,
                        postData: state.postData.map( p => {
                            if (p.id === action.postID) {
                                return {...p, likes: p.likes - 1}
                            };
                            return p;})
                    };
                case SET_USERS_PROFILE :
                    return {
                        ...state,
                        profile: action.profile,
                    };
        default: 
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST};
  };
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text};
  };
export const addLikeAC = (postID) => {
    return {type: ADD_LIKE, postID};
};
export const removeLikeAC = (postID) => {
    return {type: REMOVE_LIKE, postID};
};
export const setUserProfile = (profile) => {
    return {type: SET_USERS_PROFILE, profile};
};

export default profileReducer;
