import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import { Provider } from './StoreContext';

const { subscribe } = store;

const rerenderEntireTree = () => {
  const data = {
    //addPost: store.addPost.bind(store),
    //updateNewPostText: store.updateNewPostText.bind(store),
    state: store.getState(),
  };
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
