import React from "react";
import "./style.scss";
import MyPostsContainer from "./MyPosts/container";
import Preloader from "../common/Preloader";
//import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/reducers/profile-reducer';

const Profile = (props) => {
  if (!props.profile) { return <Preloader /> }

  return (
    <div className="content-wrapper">
      <div className="content">
        <img
          className="content__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg2QGNzZQraiwoWraK-8RZYCbmwqEOQn9fLxzoLiSXw0443PNU&usqp=CAU"
          alt="main content"
        />
        <div className="content__profile">
          <img
            className="content__profile-ava"
            src={!props.profile.photos.large ?
              "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
              :
              props.profile.photos.large}
            alt="ava"
          />
        </div>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
