import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const UserNames = (props) => {
  const {
    id,
    name,
  } = props;
  return (
      <div><NavLink to={`/dialogs/${id}`}>{ name }</NavLink></div>

  );
};

export default UserNames;
