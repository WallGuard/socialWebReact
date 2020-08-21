import React from "react";
import "./style.scss";
import Post from "./Posts";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const { postData = props.state.postData } = props;

  const messageElements = postData.map((el) => (
    <Post addLike={props.addLike} removeLike={props.removeLike} key={el.id} id={el.id} message={el.message} likes={el.likes} img={el.img} />
  ));

  const AddPost = (values) => {
    values.newPostText !== '' && props.addPost(values.newPostText);
    values.newPostText = '';
  };

  return (
    <div>
      <div>
        <h3>My posts</h3>
        <MyPostReduxForm onSubmit={AddPost} />
      </div>
      {messageElements}
    </div>
  );
};

const MyPostForm =(props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component='textarea'
          name='newPostText'
          placeholder='Enter text'
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
};

const MyPostReduxForm = reduxForm({
  form: 'addNewPostForm',
})(MyPostForm)

export default MyPosts;
