import React from "react";
import logo from "../../logo.svg";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} className='header__logo' alt="logo" />
      <input className='header__search'></input>
      <div className="header__login-block">
      {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
