import React from "react";
import "./style.scss";
import Header from '.';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../Redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header isAuth={this.props.isAuth} login={this.props.login}/>
    );
  };
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
