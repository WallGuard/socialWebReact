import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './PAGES/Header';
//import Profile from './PAGES/Profile';
import Navbar from './PAGES/Navigation';
import Profile from './PAGES/Profile/';
import DialogsContainer from './PAGES/Dialogs/container';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div>
        <Route path='/profile' render={ () => <Profile
          />} 
        />
        <Route /*exact*/ path='/dialogs' render={ () => <DialogsContainer
          />}
        />
      </div>
    </div>
  );
}

export default App;
