import React from "react";
import "./style.scss";
import Post from "./Posts";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const { postData = props.state.postData } = props;

  const messageElements = postData.map((el) => (
    <Post addLike={props.addLike} removeLike={props.removeLike} key={el.id} id={el.id} message={el.message} likes={el.likes} img={el.img} />
  ));

  const newPostText = props.newPostText

  const onAddPost = () => {
    newPostText !== '' && props.addPost();
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div>
        <h3>My posts</h3>
        <MyPostReduxForm />
      </div>
      <div>
        <textarea value={newPostText} onChange={onPostChange} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
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
