import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './PAGES/Header';
//import Profile from './PAGES/Profile';
import Dialogs from './PAGES/Dialogs';
import Navbar from './PAGES/Navigation';
import Profile from './PAGES/Profile/';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div>
        <Route path='/profile' render={ () => <Profile
            store={props.store}
          />} 
        />
        <Route /*exact*/ path='/dialogs' render={ () => <Dialogs
            dispatch={props.dispatch}
            state={props.data.state.dialogsPage}
          />}
        />
      </div>
    </div>
  );
}

export default App;
