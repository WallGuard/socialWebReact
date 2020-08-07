const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
//const img = 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg';

let initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    };
                    return u;
                })
            };
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    };
                    return u;
                })
            };
        case SET_USERS :
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default: 
            return state;
    }
}

export const followAC = (userId) => {
    return {type: FOLLOW, userId};
};
export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId};
};
export const setUsersAC = (users) => {
    return {type: SET_USERS, users};
};

export default usersReducer;