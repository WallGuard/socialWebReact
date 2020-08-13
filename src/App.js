import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './PAGES/Header';
//import Profile from './PAGES/Profile';
import Navbar from './PAGES/Navigation';
import ProfileContainer from './PAGES/Profile/container';
import DialogsContainer from './PAGES/Dialogs/container';
import UsersContainer from './PAGES/Users/container';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div>
        <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
        <Route /*exact*/ path='/dialogs' render={ () => <DialogsContainer />} />
        <Route /*exact*/ path='/users' render={ () => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
