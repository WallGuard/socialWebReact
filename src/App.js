import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Navbar from './PAGES/Navigation';
import ProfileContainer from './PAGES/Profile/container';
import DialogsContainer from './PAGES/Dialogs/container';
import UsersContainer from './PAGES/Users/container';
import HeaderContainer from './PAGES/Header/container';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
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
