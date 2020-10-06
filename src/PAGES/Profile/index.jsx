import React from "react";
import "./style.scss";
import MyPostsContainer from "./MyPosts/container";
import Preloader from "../common/Preloader";
import ProfileStatusWithHooks from './ProfileInfo/ProfileStatusWithHooks';
import userPhoto from "../../assets/spinner.gif";


const Profile = (props) => {

  const {
    profile,
    isOwner,
    savePhoto
  } = props;

  if (!props.profile) { return <Preloader /> }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
}

  return (
    <div className="content-wrapper">
      <div className="content">
        <img
          className="content__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg2QGNzZQraiwoWraK-8RZYCbmwqEOQn9fLxzoLiSXw0443PNU&usqp=CAU"
          alt="main content"
        />
        <div className="content__profile">
          <img src={profile.photos.large || userPhoto} className="content__profile-ava" alt="ava" />
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
