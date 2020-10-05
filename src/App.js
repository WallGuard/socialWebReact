import React, { Component } from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.scss';
import Navbar from './PAGES/Navigation';
// import ProfileContainer from './PAGES/Profile/container';
// import DialogsContainer from './PAGES/Dialogs/container';
import UsersContainer from './PAGES/Users/container';
import HeaderContainer from './PAGES/Header/container';
import Login from './PAGES/Login';
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/reducers/app-reducer";
import Preloader from "./PAGES/common/Preloader";
import store from "./Redux/redux-store";
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./PAGES/Dialogs/container'));
const ProfileContainer = React.lazy(() => import('./PAGES/Profile/container'));

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
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route /*exact*/ path='/dialogs' render={withSuspense(DialogsContainer)}/>
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

  let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const ReactApp = (props) => {
  return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default ReactApp;
