import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import './App.scss';
import Navbar from './PAGES/Navigation';
import ProfileContainer from './PAGES/Profile/container';
import DialogsContainer from './PAGES/Dialogs/container';
import UsersContainer from './PAGES/Users/container';
import HeaderContainer from './PAGES/Header/container';
import Login from './PAGES/Login';
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/reducers/app-reducer";
import Preloader from "./PAGES/common/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div>
        <HeaderContainer className="app-wrapper" />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route /*exact*/ path='/dialogs' render={() => <DialogsContainer />} />
          <Route /*exact*/ path='/users' render={() => <UsersContainer />} />
          <Route /*exact*/ path='/login' render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App); 
