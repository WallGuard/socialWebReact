import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';
const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers)

export default store;