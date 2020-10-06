import { usersAPI, profileAPI } from '../../api/api';
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'
const REMOVE_LIKE = 'REMOVE-LIKE'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
  status: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postData.length + 1,
        message: action.newPostText,
        likes: 0,
        img: img,
      }
      return {
        ...state,
        postData: [...state.postData, { ...newPost }],
      };
    case DELETE_POST:
      return { ...state, postData: state.postData.filter(p => p.id !== action.postID) };
    case SAVE_PHOTO_SUCCESS:
      debugger;
      return { ...state, profile: { ...state.profile, photos: action.photos } }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case ADD_LIKE:
      return {
        ...state,
        postData: state.postData.map(p => {
          if (p.id === action.postID) {
            return { ...p, likes: p.likes + 1 }
          };
          return p;
        })
      };
    case REMOVE_LIKE:
      return {
        ...state,
        postData: state.postData.map(p => {
          if (p.id === action.postID) {
            return { ...p, likes: p.likes - 1 }
          };
          return p;
        })
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const addLikeAC = (postID) => {
  return { type: ADD_LIKE, postID };
};
export const removeLikeAC = (postID) => {
  return { type: REMOVE_LIKE, postID };
};
const setUserProfile = (profile) => {
  return { type: SET_USERS_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const deletePost = (postID) => {
  return { type: DELETE_POST, postID }
};
export const savePhotoSuccess = (photos) => {
  return { type: SAVE_PHOTO_SUCCESS, photos }
};

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data))
    });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data))
    });
};

export const updateStatus = (status) => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  };
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  };
};

export default profileReducer;
