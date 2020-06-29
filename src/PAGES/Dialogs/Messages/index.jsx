import React from "react";
import "./style.scss";

const Messages = (props) => {
  const {
    message,
  } = props
  return (
      <div>
        { message }
      </div>
  );
};

export default Messages;
