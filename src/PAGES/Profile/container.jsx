import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import "./style.scss";
import Profile from ".";
import { getUserProfile } from '../../Redux/reducers/profile-reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {userId = ''};
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
  )}
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const withUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);
