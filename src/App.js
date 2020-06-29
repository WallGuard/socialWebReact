import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './PAGES/Header';
import Profile from './PAGES/Profile';
import Dialogs from './PAGES/Dialogs';
import Navbar from './PAGES/Navigation';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div>
        <Route path='/profile' render={ () => <Profile
            state={props.data.state.profilePage}
            addPost={props.data.addPost}
            updateNewPostText={props.data.updateNewPostText}
          />} 
        />
        <Route /*exact*/ path='/dialogs' render={ () => <Dialogs
            state={props.data.state.dialogsPage}
            sendMessage={props.data.sendMessage}
            updateNewMessageText={props.data.updateNewMessageText}
          />}
        />
      </div>
    </div>
  );
}

export default App;
