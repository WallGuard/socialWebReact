import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./reducers/app-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;
