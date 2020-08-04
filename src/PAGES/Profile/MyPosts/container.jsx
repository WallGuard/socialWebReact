import React from "react";
import "./style.scss";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/reducers/profile-reducer";
import MyPosts from ".";

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
        addPost={addPost}
        updateNewPostText={onPostChange}
        postData={state.profilePage.postData}
        newPostText={state.profilePage.newPostText}
    />);
};

export default MyPostsContainer;
