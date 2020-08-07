import "./style.scss";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  addLikeAC,
  removeLikeAC,
} from "../../../Redux/reducers/profile-reducer";
import MyPosts from ".";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
    addLike: (postID) => dispatch(addLikeAC(postID)),
    removeLike: (postID) => dispatch(removeLikeAC(postID)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
