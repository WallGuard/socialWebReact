import { usersAPI, profileAPI } from '../../api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'
const REMOVE_LIKE = 'REMOVE-LIKE'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
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
			return { ...state, postData: state.postData.filter(p => p.id !== action.postID) }
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
	return {type: DELETE_POST, postID}
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

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status))
			}
		});
};

export default profileReducer;
