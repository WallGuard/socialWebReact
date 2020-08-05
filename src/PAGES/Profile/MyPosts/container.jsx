import React from "react";
import "./style.scss";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/reducers/profile-reducer";
import MyPosts from ".";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
        let state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
        <MyPosts
          addPost={addPost}
          updateNewPostText={onPostChange}
          postData={state.profilePage.postData}
          newPostText={state.profilePage.newPostText}
        />
        )
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
