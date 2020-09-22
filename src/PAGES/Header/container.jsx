import React from "react";
import "./style.scss";
import Header from '.';
import { connect } from 'react-redux';
import { logout } from '../../Redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {

  render() {
    return (
      <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />
    );
  };
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {logout})(HeaderContainer);
