import React from "react";
import "./style.scss";
import Post from "./Posts";
//import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/reducers/profile-reducer';

const MyPosts = (props) => {
  const { postData = props.state.postData } = props;

  const messageElements = postData.map((el) => (
    <Post key={el.id} message={el.message} likes={el.likes} img={el.img} />
  ));

  const newPostElement = React.createRef();
  const onAddPost = () => {
    newPostElement.current.value !== "" && props.addPost();
    //props.dispatch(addPostActionCreator());
    newPostElement.current.value = "";
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
    //props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      {messageElements}
    </div>
  );
};

export default MyPosts;
