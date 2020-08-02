import React from "react";
import "./style.scss";
import Post from "./Posts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/store';



const Profile = (props) => {
  const {
    postData = props.state.postData,
  } = props;
  
  const messageElements = postData.map((el) => (
    <Post message={el.message} likes={el.likes} img={el.img} />
  ));

  const newPostElement = React.createRef();
  const addPost = () => {
    newPostElement.current.value !== '' &&
    props.dispatch(addPostActionCreator());
    newPostElement.current.value = '';
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
          <img
            className="content__profile-ava"
            src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            alt="ava"
          />
        </div>
        <div>
          <div>
            <h3>My posts</h3>
          </div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
          {messageElements}
        </div>
      </div>
    </div>
  );
};

export default Profile;
