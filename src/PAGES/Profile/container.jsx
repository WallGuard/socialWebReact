import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import "./style.scss";
import Profile from ".";
import { setUserProfile } from '../../Redux/reducers/profile-reducer';
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {userId = ''};
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
        });
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

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
