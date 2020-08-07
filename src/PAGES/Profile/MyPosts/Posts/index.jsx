import React from "react";
import s from "./style.module.scss";

const Post = (props) => {

  const onAddLike = () => {
    props.addLike(props.id)
  };
  const onRemoveLike = () => {
    props.removeLike(props.id)
  };

  return (
    <div className={s.post_wrapper}>
      <div className={s.post}>
        <img
          className={s.post__img}
          src={props.img}
          alt="ava"
        />
        <span className={s.post__text}>{props.message}</span>
      </div>
      <div className={s.post__like}>
        <span>Likes</span>
        <span> {props.likes} </span>
        <button onClick={onAddLike}>Like</button>
        <button onClick={onRemoveLike}>Dis</button>
      </div>
    </div>
  );
};

export default Post;
