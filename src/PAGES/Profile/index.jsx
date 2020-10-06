import React, { useState } from 'react';
import "./style.scss";
import MyPostsContainer from "./MyPosts/container";
import Preloader from "../common/Preloader";
import ProfileStatusWithHooks from './ProfileInfo/ProfileStatusWithHooks';
import userPhoto from "../../assets/spinner.gif";
import ProfileDataForm from "./ProfileInfo/profileDataForm";


const Profile = (props) => {
  let [editMode, setEditMode] = useState(false);

  const {
    profile,
    isOwner,
    savePhoto,
    saveProfile
  } = props;

  if (!props.profile) { return <Preloader /> }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  };

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
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
          }
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

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
    }

    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
};

const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
};

export default Profile;
