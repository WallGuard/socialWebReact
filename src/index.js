import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';

const { subscribe } = store;

const rerenderEntireTree = () => {
  const data = {
    //addPost: store.addPost.bind(store),
    //updateNewPostText: store.updateNewPostText.bind(store),
    state: store.getState(),
    sendMessage: store.sendMessage.bind(store),
    updateNewMessageText: store.updateNewMessageText.bind(store),
  }
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          data={data}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree();
subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
